"use client";
import CanvasScrollSequence from "./CanvasScrollSequence";

export default function About() {
  const pad = (num: number) => num.toString().padStart(3, '0');
  
  return (
    <CanvasScrollSequence
      frameCount={76}
      imagePath={(index) => `/assets/four_worlds/frame_${pad(index)}.png`}
      id="about"
    >
      <div className="w-full h-full flex flex-col justify-center max-w-[1220px] mx-auto px-7 py-20 overflow-y-auto">
        <div className="bg-bg-base/50 backdrop-blur-md p-8 rounded-2xl border border-bd-subtle mt-20 max-w-4xl">
          <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-2">
            Our Purpose
          </p>
          <h2 className="font-display font-bold text-t1 mb-6" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>
            To accelerate the transition toward green, autonomous, resilient, and future-ready maritime systems.
          </h2>
          <p className="text-[14px] text-t2 leading-[1.7] mb-12">
            UMINATO is a maritime venture studio that researches, builds, and scales technologies, ventures, and partnerships addressing the most significant shifts shaping the future of maritime systems.
          </p>
          
          <h3 className="font-display font-bold text-t1 mb-6" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>The Four Shifts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="font-display text-[15px] font-bold text-sky-base mb-2">⚓ Autonomous Systems</h4>
              <p className="text-[13px] text-t2">Software AI, Physical AI, Robotics, Drones, Intelligent Operations, Digital Twins, Autonomous Maritime Systems.</p>
            </div>
            <div>
              <h4 className="font-display text-[15px] font-bold text-success mb-2">🌿 Decarbonisation &amp; Green Transition</h4>
              <p className="text-[13px] text-t2">Green Ports, Low-Carbon Shipping, Alternative Fuels, Sustainable Infrastructure, Carbon Intelligence.</p>
            </div>
            <div>
              <h4 className="font-display text-[15px] font-bold text-sky-light mb-2">🌊 Climate Resilience</h4>
              <p className="text-[13px] text-t2">Climate Adaptation, Disaster Risk Reduction, Coastal Resilience, Blue Economy Sustainability.</p>
            </div>
            <div>
              <h4 className="font-display text-[15px] font-bold text-warning mb-2">👥 Workforce Transformation</h4>
              <p className="text-[13px] text-t2">Future Skills, Digital Workforce, Human-AI Collaboration, Leadership Development, Capability Building.</p>
            </div>
          </div>

          <h3 className="font-display font-bold text-t1 mb-6" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>Our Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-bg-surface/50 p-5 rounded-xl border border-bd-subtle">
              <h4 className="font-display text-[14px] font-bold text-t1 mb-2">Discover &amp; Validate</h4>
              <p className="text-[12px] text-t3">Research maritime challenges, generate insights, assess readiness, and validate opportunities through studies, pilots, and proof-of-value initiatives.</p>
            </div>
            <div className="bg-bg-surface/50 p-5 rounded-xl border border-bd-subtle">
              <h4 className="font-display text-[14px] font-bold text-t1 mb-2">Build &amp; Venture</h4>
              <p className="text-[12px] text-t3">Develop technologies, products, partnerships, and ventures that solve validated maritime challenges and create scalable solutions.</p>
            </div>
            <div className="bg-bg-surface/50 p-5 rounded-xl border border-bd-subtle">
              <h4 className="font-display text-[14px] font-bold text-t1 mb-2">Scale &amp; Sustain</h4>
              <p className="text-[12px] text-t3">Institutionalize capabilities, expand proven solutions, and deliver long-term economic, environmental, and societal impact.</p>
            </div>
          </div>
        </div>
      </div>
    </CanvasScrollSequence>
  );
}
