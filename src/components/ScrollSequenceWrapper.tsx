"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSequenceWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    // Set canvas dimensions to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameCount = 55;
    const currentFrame = (index: number) =>
      `/second-section-frames/seq/${String(index + 1).padStart(4, "0")}.png`;

    const images: HTMLImageElement[] = [];
    const imageSeq = {
      frame: 0,
    };

    // Keep track of loaded images to render the first frame ASAP
    let loadedCount = 0;
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          // Render first frame as soon as it's loaded
          render();
        }
        if (loadedCount === frameCount) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }

    const render = () => {
      if (images[imageSeq.frame]) {
        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw image covering the canvas (like object-fit: cover)
        const img = images[imageSeq.frame];
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
    };

    // Animate on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    tl.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
    });

    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      render();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.kill();
      // Only kill scroll triggers associated with this component
      // We don't want to break other scroll triggers on the page
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === containerRef.current) {
          t.kill();
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="absolute inset-0 w-full h-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0A0D14]">
          <canvas ref={canvasRef} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
