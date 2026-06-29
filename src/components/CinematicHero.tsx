"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. UMINATO enters — large, bold, cinematic
      tl.fromTo(
        ".hero-uminato",
        { autoAlpha: 0, y: 100, scale: 0.88 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 2, ease: "power4.out" }
      )
        // 2. Studio line floats in AFTER UMINATO has settled
        .fromTo(
          ".hero-studio",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out" },
          "+=0.05"
        )
        // 3. Divider line draws across
        .fromTo(
          ".hero-divider",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        // 4. Tagline
        .fromTo(
          ".hero-tagline",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.4"
        )
        // 5. CTA buttons
        .fromTo(
          ".hero-cta",
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.12 },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* ── Video Background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source
          src="https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support external video */}
      </video>

      {/* ── Dark Blue Gradient Overlay ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,11,24,0.78) 0%, rgba(4,13,31,0.72) 50%, rgba(2,11,24,0.92) 100%)",
        }}
      />

      {/* ── Ambient Blue Glow ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "900px",
            height: "450px",
            background: "radial-gradient(ellipse, rgba(74,184,232,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "200px",
            background: "linear-gradient(to top, rgba(2,11,24,0.9), transparent)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto pt-24 pb-16">

        {/* UMINATO — enters first, cinematic */}
        <h1
          className="hero-uminato font-display font-extrabold tracking-tight leading-none mb-4 uppercase"
          style={{
            opacity: 0,
            fontSize: "clamp(4rem, 14vw, 14rem)",
            background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.85) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 0 60px rgba(74,184,232,0.25))",
          }}
        >
          UMINATO
        </h1>

        {/* Studio line — floats in AFTER UMINATO */}
        <p
          className="hero-studio font-display font-bold uppercase tracking-[0.3em] text-sky-base"
          style={{ opacity: 0, fontSize: "clamp(0.65rem, 2vw, 1.25rem)", letterSpacing: "0.35em" }}
        >
          Maritime Innovation and Venture Studio
        </p>

        {/* Divider */}
        <div
          className="hero-divider mx-auto my-6 origin-left"
          style={{
            height: "1px",
            width: "120px",
            background: "linear-gradient(90deg, transparent, #4AB8E8, transparent)",
            transform: "scaleX(0)",
          }}
        />

        {/* Tagline */}
        <p
          className="hero-tagline font-body text-t2 leading-relaxed max-w-3xl mb-10"
          style={{ opacity: 0, fontSize: "clamp(0.95rem, 2vw, 1.2rem)" }}
        >
          Building Green, Autonomous and Resilient Maritime Systems —{" "}
          and Future-Ready Maritime Experts
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="hero-cta bg-sky-base text-t-inv px-8 py-3.5 rounded-md font-body font-medium text-[15px] hover:bg-sky-light hover:-translate-y-[1px] hover:shadow-[0_0_28px_rgba(74,184,232,0.28)] transition-all duration-200" style={{ opacity: 0 }}>
            Explore Projects
          </button>
          <button className="hero-cta bg-transparent border border-sky-base text-sky-base px-8 py-3.5 rounded-md font-body font-medium text-[15px] hover:bg-[rgba(74,184,232,0.1)] hover:shadow-[0_0_16px_rgba(74,184,232,0.15)] transition-all duration-200" style={{ opacity: 0 }}>
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
}
