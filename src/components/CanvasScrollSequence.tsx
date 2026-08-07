"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP registers ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CanvasScrollSequenceProps {
  frameCount: number;
  imagePath: (index: number) => string;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export default function CanvasScrollSequence({
  frameCount,
  imagePath,
  className,
  id,
  children,
}: CanvasScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const sequenceRef = useRef({ frame: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !context) return;

    let totalLoaded = 0;
    
    // Preload all images
    for (let i = 1; i <= frameCount; i++) {
      const preloadImg = new Image();
      preloadImg.src = imagePath(i);
      preloadImg.onload = () => {
        totalLoaded++;
        if (totalLoaded === 1) {
          render(0);
        }
        if (totalLoaded === frameCount) {
          setLoaded(true);
        }
      };
      preloadImg.onerror = () => {
        totalLoaded++;
        if (totalLoaded === frameCount) {
          setLoaded(true);
        }
      };
      imagesRef.current[i - 1] = preloadImg;
    }

    const render = (frameIndex: number) => {
      if (!imagesRef.current[frameIndex]) return;
      const currentImg = imagesRef.current[frameIndex];
      if (!currentImg.complete) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const scale = Math.max(
        canvas.width / currentImg.width,
        canvas.height / currentImg.height
      );
      const x = canvas.width / 2 - (currentImg.width / 2) * scale;
      const y = canvas.height / 2 - (currentImg.height / 2) * scale;
      
      // Draw a dark background fallback
      context.fillStyle = "#0B1628";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(currentImg, x, y, currentImg.width * scale, currentImg.height * scale);
    };

    const handleResize = () => {
      render(sequenceRef.current.frame);
    };
    window.addEventListener("resize", handleResize);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${frameCount * 35}`, // 35px scroll per frame to control speed
        scrub: 0.5,
        pin: true,
      },
    });

    tl.to(sequenceRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => render(sequenceRef.current.frame),
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.kill();
    };
  }, [frameCount, imagePath]);

  return (
    <div ref={containerRef} id={id} className={`w-full h-screen relative bg-bg-base overflow-hidden ${className || ""}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />
      {/* Overlay to darken slightly if needed, or pure container for children */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-bg-base/30 to-bg-base/80"></div>
      <div className="relative z-20 w-full h-full">
        {children}
      </div>
    </div>
  );
}
