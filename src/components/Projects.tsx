"use client";
import CanvasScrollSequence from "./CanvasScrollSequence";

export default function Projects() {
  const pad = (num: number) => num.toString().padStart(3, '0');

  return (
    <CanvasScrollSequence
      frameCount={59}
      imagePath={(index) => `/assets/maritime_network/frame_${pad(index)}.png`}
      id="projects"
    >
      <div className="w-full h-full flex items-center justify-center max-w-[1220px] mx-auto px-7 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full mt-16">
          <div className="bg-bg-base/40 backdrop-blur-sm p-6 rounded-2xl border border-bd-subtle/50">
            <h2 className="font-display font-bold text-t1 mb-6" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Projects &amp; Platforms</h2>

            <div className="mb-8">
              <h3 className="font-display text-[15px] font-bold text-t1 mb-2">HarborTwin — Maritime AI &amp; Digital Intelligence Platform</h3>
              <p className="text-[13.5px] text-t2 leading-[1.65] mb-3">A modular technology platform connecting operational intelligence, asset reliability, AI vision, sustainability, and GenAI workflows for ports &amp; terminals.</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-[10.5px] font-semibold tracking-[0.1em] text-t3 uppercase">Focus Areas:</span>
                <span className="text-[12px] text-sky-base">Port Operations &bull; Predictive Maintenance &bull; AI Vision &bull; Digital Twin &bull; GenAI</span>
              </div>
              <p className="text-[12px] text-t3"><span className="text-t1 font-medium">Status:</span> Live Platform</p>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-[15px] font-bold text-t1 mb-2">Maritime and Ports Maturity Index (MAPMI)</h3>
              <p className="text-[13.5px] text-t2 leading-[1.65] mb-3">A benchmarking and maturity framework for measuring and accelerating technology transformation across ports and terminals.</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-[10.5px] font-semibold tracking-[0.1em] text-t3 uppercase">Focus Areas:</span>
                <span className="text-[12px] text-sky-base">Digital Maturity &bull; Autonomous Systems &bull; Sustainability &bull; Climate Resilience</span>
              </div>
              <p className="text-[12px] text-t3"><span className="text-t1 font-medium">Status:</span> Research &amp; Development</p>
            </div>

            <div className="mb-8">
              <h3 className="font-display text-[15px] font-bold text-t1 mb-2">Crew Command Operating System (C2OS)</h3>
              <p className="text-[13.5px] text-t2 leading-[1.65] mb-3">AI-powered command intelligence co-captain transforming vessel operations, fatigue management, and STCW compliance.</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-[10.5px] font-semibold tracking-[0.1em] text-t3 uppercase">Focus Areas:</span>
                <span className="text-[12px] text-sky-base">AI Co-Captain &bull; STCW Compliance &bull; Fatigue Risk &bull; Vessel IoT</span>
              </div>
              <p className="text-[12px] text-t3"><span className="text-t1 font-medium">Status:</span> Research &amp; Development</p>
            </div>

            <div>
              <h3 className="font-display text-[15px] font-bold text-t1 mb-2">Smart &amp; Green Ports Transformation Leadership Program</h3>
              <p className="text-[13.5px] text-t2 leading-[1.65] mb-3">An executive leadership program preparing maritime leaders for green, autonomous, and resilient port transitions.</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-[10.5px] font-semibold tracking-[0.1em] text-t3 uppercase">Focus Areas:</span>
                <span className="text-[12px] text-sky-base">Green Ports &bull; Transformation Leadership &bull; Decarbonisation &bull; Future Skills</span>
              </div>
              <p className="text-[12px] text-t3"><span className="text-t1 font-medium">Status:</span> Program Development</p>
            </div>
          </div>

          <div className="flex flex-col gap-16">
            <div id="podcast" className="bg-bg-surface/60 backdrop-blur-md border border-bd-subtle rounded-[14px] p-8 hover:border-bd-default transition-colors">
              <h2 className="font-display font-bold text-t1 mb-2" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>The UMINATO Podcast</h2>
              <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-6">Upcoming</p>
              <p className="text-[14px] text-t2 mb-6">Conversations on the Future of Maritime Systems</p>
              <p className="text-[12px] text-t3 mb-6">Subscribe on Spotify &bull; Apple Podcasts &bull; YouTube</p>
              <button className="bg-sky-base hover:bg-sky-light text-t-inv font-medium py-[11px] px-[22px] rounded-md transition-all shadow-[0_0_28px_rgba(74,184,232,0.22)] min-h-[44px]">
                Subscribe
              </button>
            </div>

            <div id="blog" className="bg-bg-surface/60 backdrop-blur-md border border-bd-subtle rounded-[14px] p-8 hover:border-bd-default transition-colors">
              <h2 className="font-display font-bold text-t1 mb-6" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Blogs</h2>
              <div className="mb-6">
                <h3 className="font-display text-[15px] font-bold text-sky-base hover:text-sky-light cursor-pointer mb-2 transition-colors">The Future of Autonomous Maritime Systems</h3>
                <p className="text-[13.5px] text-t2">Explore how software AI and robotics are reshaping the maritime industry.</p>
              </div>
              <button className="bg-transparent border border-sky-base text-sky-base hover:bg-sky-base/10 font-medium py-[11px] px-[22px] rounded-md transition-all min-h-[44px]">
                View All Insights
              </button>
            </div>
          </div>
        </div>
      </div>
    </CanvasScrollSequence>
  );
}
