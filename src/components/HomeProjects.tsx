import React from 'react';
import Link from 'next/link';

export default function HomeProjects() {
  const projects = [
    {
      title: "Ports & Terminal Technology Transformation Index",
      desc: "A benchmarking and maturity framework for measuring and accelerating technology transformation across ports and terminals.",
      focus: ["Digital Maturity", "Autonomous Systems", "Sustainability", "Climate Resilience", "Workforce Readiness"],
      status: "In Development"
    },
    {
      title: "AI in Shipping Crew Hiring",
      desc: "Applying artificial intelligence to modernize maritime workforce recruitment, competency assessment, and talent mobility.",
      focus: ["AI Screening", "Skills Intelligence", "Workforce Analytics", "Talent Matching"],
      status: "Research & Pilot Programs"
    },
    {
      title: "Smart & Green Ports Transformation Leadership Program",
      desc: "An executive leadership program designed to prepare maritime leaders for the transition toward green, autonomous, and resilient ports.",
      focus: ["Green Ports", "Smart Ports", "Transformation Leadership", "Innovation", "Future Skills"],
      status: "Program Development"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-transparent border-t border-bd-subtle">
      <div className="max-w-[1220px] mx-auto px-7 relative z-10">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-t1 leading-tight max-w-2xl">
              Featured Projects
            </h2>
            <Link href="/projects" className="bg-transparent border border-sky-base text-sky-base px-6 py-2.5 rounded-md font-body font-medium text-[14px] hover:bg-[rgba(74,184,232,0.1)] transition-all inline-flex items-center gap-2">
              View All Projects
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-bg-card border border-bd-subtle rounded-xl p-8 hover:border-bd-default hover:shadow-md transition-all flex flex-col h-full">
              <div className="mb-6 flex-grow">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(74,184,232,0.1)] border border-[rgba(74,184,232,0.2)] rounded-full text-sky-base text-xs font-semibold mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-base"></div>
                  {proj.status}
                </div>
                <h3 className="font-display text-xl font-bold text-t1 mb-4">{proj.title}</h3>
                <p className="text-sm text-t2 font-body leading-relaxed mb-6">{proj.desc}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-t3 uppercase tracking-wider mb-3">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {proj.focus.map((area, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-1 bg-bg-raised border border-bd-subtle rounded text-t2 font-body">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
