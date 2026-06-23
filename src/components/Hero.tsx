"use client";
import CanvasScrollSequence from "./CanvasScrollSequence";

export default function Hero() {
  const pad = (num: number) => num.toString().padStart(3, '0');
  
  return (
    <CanvasScrollSequence
      frameCount={81}
      imagePath={(index) => `/assets/hero/frame_${pad(index)}.png`}
      id="home"
    >
      <div className="w-full h-full flex items-center max-w-[1220px] mx-auto px-7">
        <div className="max-w-3xl mt-16">
          <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-[18px]">
            Maritime Venture Studio
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.06] tracking-[-0.025em] mb-[18px]">
            Building Maritime Systems<br />
            <em className="not-italic bg-gradient-to-br from-sky-base to-sky-light text-transparent bg-clip-text">
              Green, Autonomous, Resilient,
            </em>
            <br />and Future-Ready Talents.
          </h1>
          <div className="flow-line-pair max-w-[420px] mb-8">
            <div className="flow-line"></div>
            <div className="flow-line-sm"></div>
          </div>
          <p className="text-[16px] text-t2 leading-[1.7] max-w-[520px]">
            Across Ports &amp; Terminals &bull; Shipping &amp; Maritime Transport &bull; Inland Waterways &bull; Coastal Communities &amp; Ecosystems &bull; Shipbuilding &amp; Allied Industries &bull; Maritime Defence
          </p>
        </div>
      </div>
    </CanvasScrollSequence>
  );
}
