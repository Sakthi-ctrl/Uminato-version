import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Ports & Terminal Technology Transformation Index (PTTI)",
      desc: "A benchmarking and maturity framework for measuring and accelerating technology transformation across ports and terminals.",
      details: "Complete project details focusing on digital maturity, automation readiness, and sustainability benchmarking for modern ports.",
      focus: ["Digital Maturity", "Autonomous Systems", "Sustainability", "Climate Resilience", "Workforce Readiness"],
      status: "In Development"
    },
    {
      title: "AI in Shipping Crew Hiring",
      desc: "Applying artificial intelligence to modernize maritime workforce recruitment, competency assessment, and talent mobility.",
      details: "Complete project details on developing LLM-driven and machine-learning assessments to match future-ready maritime skills with shipping demands.",
      focus: ["AI Screening", "Skills Intelligence", "Workforce Analytics", "Talent Matching"],
      status: "Research & Pilot Programs"
    },
    {
      title: "Smart & Green Ports Transformation Leadership Program",
      desc: "An executive leadership program designed to prepare maritime leaders for the transition toward green, autonomous, and resilient ports.",
      details: "Complete project details for a cohort-based executive training program covering decarbonization strategies and physical AI integrations.",
      focus: ["Green Ports", "Smart Ports", "Transformation Leadership", "Innovation", "Future Skills"],
      status: "Program Development"
    }
  ];

  return (
    <>
      <Header />
      <main className="flex-grow w-full overflow-hidden bg-bg-void pt-24">
        
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1220px] mx-auto px-7 relative z-10">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-6">Our Work</p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-t1 mb-8 max-w-4xl leading-tight">
              Building the Future of Maritime Systems
            </h1>
            <p className="text-xl text-t2 font-body max-w-2xl leading-relaxed">
              Research, technology, leadership, and venture initiatives transforming maritime industries.
            </p>
          </div>
          
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bg-surface/50 to-transparent pointer-events-none"></div>
        </section>

        {/* Projects List */}
        <section className="py-12 pb-32">
          <div className="max-w-[1220px] mx-auto px-7 flex flex-col gap-12">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-bg-card border border-bd-subtle rounded-2xl p-8 md:p-12 hover:border-bd-default hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                
                {/* Glow effect on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-sky-base/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-12">
                  <div className="md:w-2/3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(74,184,232,0.1)] border border-[rgba(74,184,232,0.2)] rounded-full text-sky-base text-xs font-semibold mb-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-base"></div>
                      {proj.status}
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-t1 mb-6 leading-tight">{proj.title}</h2>
                    <p className="text-lg text-t2 font-body mb-6 leading-relaxed">{proj.desc}</p>
                    <p className="text-sm text-t3 font-body mb-8">{proj.details}</p>
                    
                    <div>
                      <h4 className="text-xs font-semibold text-t1 uppercase tracking-wider mb-4">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.focus.map((area, i) => (
                          <span key={i} className="text-[12px] px-3 py-1.5 bg-bg-raised border border-bd-subtle rounded text-t2 font-body">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/3 flex flex-col justify-end">
                    <button className="bg-transparent border border-sky-base text-sky-base px-6 py-3 rounded-md font-body font-medium text-[14px] hover:bg-sky-base hover:text-t-inv transition-all w-full mt-8 md:mt-0 shadow-[0_0_15px_rgba(74,184,232,0.1)]">
                      View Initiative Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer hideCTA />
    </>
  );
}
