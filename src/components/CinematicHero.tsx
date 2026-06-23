"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-content",
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1.5, ease: "power3.out", stagger: 0.2 }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative cinematic-bg min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
      
      {/* Ambient Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-base/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-light/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center hero-content">
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-t1 mb-8 hero-content uppercase text-center w-full md:whitespace-nowrap leading-tight">
          Maritime Venture Studio
        </h1>
        
        <p className="text-lg md:text-2xl text-t2 font-body max-w-3xl leading-relaxed mb-16 hero-content">
          Building Maritime Systems Green, Autonomous, Resilient, and Future-Ready Talents.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 mb-16 max-w-5xl w-full text-sm md:text-base text-t3 font-body text-left mx-auto hero-content">
          {[
            "Across Ports & Terminals",
            "Shipping & Maritime Transport",
            "Inland Waterways",
            "Coastal Communities & Ecosystems",
            "Shipbuilding & Allied Industries",
            "Maritime Defence"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-base flex-shrink-0"></div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 hero-content">
          <button className="bg-sky-base text-t-inv px-8 py-3.5 rounded-md font-body font-medium text-[15px] hover:bg-sky-light hover:-translate-y-[1px] hover:shadow-[0_0_28px_rgba(74,184,232,0.22)] transition-all duration-200">
            Explore Projects
          </button>
          <button className="bg-transparent border border-sky-base text-sky-base px-8 py-3.5 rounded-md font-body font-medium text-[15px] hover:bg-[rgba(74,184,232,0.1)] hover:shadow-[0_0_16px_rgba(74,184,232,0.15)] transition-all duration-200">
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
}
