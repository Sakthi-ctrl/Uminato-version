import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PROJECTS = [
  {
    id: "01",
    code: "MAPMI",
    title: "MAPMI — Maritime and Ports Maturity Index",
    subtitle: "Smart, Green, Resilient and Climate-Ready Performance — Objectively Measured",
    desc: "MAPMI benchmarks ports, terminals, and coastal ecosystems across decarbonisation, digitisation, robotisation, and climate resilience — drawing exclusively on objective data extracted through system integrations, APIs, and remote sensing, with minimal human subjectivity. Part of the UMINATO Maritime Tech Suite, MAPMI gives port authorities, regulators, planners, and investors a credible, defensible performance baseline — and a clear roadmap for transformation.",
    focus: [
      "Decarbonisation",
      "Digitisation",
      "Robotisation",
      "Climate Resilience",
      "Remote Sensing",
      "Performance Benchmarking",
    ],
    status: "In Development",
  },
  {
    id: "02",
    code: "C2OS",
    title: "C2OS — Crew Command Operating System",
    subtitle: "The AI Co-Captain for Smarter, Safer Ship Operations",
    desc: "C2OS is an AI-powered command intelligence platform that transforms how vessels are operated — shifting from fragmented, reactive systems to a unified autonomous brain that predicts fatigue risks, ensures IMO/STCW compliance, optimises crew deployment, and delivers real-time decision support to captains and fleet managers. Built on a multi-agent architecture and integrated with vessel IoT, ERP, and port platforms, C2OS is the intelligence layer modern shipping demands.",
    focus: [
      "AI Command Intelligence",
      "STCW Compliance",
      "Fatigue Risk Prediction",
      "Multi-Agent Architecture",
      "Vessel IoT",
      "Fleet Management",
    ],
    status: "Research & Pilot",
  },
  {
    id: "03",
    code: "NAVIK",
    title: "NAVIK — Maritime Talent Intelligence Platform",
    subtitle: "Smarter Hiring Across the Full Maritime Workforce",
    desc: "NAVIK applies artificial intelligence to one of the maritime industry's most persistent challenges — finding, matching, and retaining the right talent for the right role. Covering the full spectrum from seafarers and vessel crew to shore-based professionals across ports, terminals, shipyards, and maritime institutions, NAVIK goes beyond CV matching to assess competency, predict retention, and close the skills gap that the global maritime industry increasingly cannot afford.",
    focus: [
      "AI Screening",
      "Competency Assessment",
      "Skills Intelligence",
      "Retention Prediction",
      "Talent Matching",
      "Workforce Analytics",
    ],
    status: "Research & Pilot Programs",
  },
  {
    id: "04",
    code: "SGPTLP",
    title: "Smart & Green Ports Transformation Leadership Program",
    subtitle: "Leading the Transition to Smarter, Greener, and More Resilient Ports",
    desc: "A practitioner-led program designed for port executives, mid-level managers, and government officials navigating the twin pressures of decarbonisation and digitalisation. Delivered in hybrid format across multiple certification levels — each certified with recognised academic and industry authorities — participants gain the frameworks, tools, and networks to lead maritime transformation, not just manage it.",
    focus: [
      "Green Ports",
      "Smart Ports",
      "Transformation Leadership",
      "Decarbonisation",
      "Innovation",
      "Future Skills",
    ],
    status: "Program Development",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow w-full overflow-hidden bg-bg-void pt-24">

        {/* ── Hero ── */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1220px] mx-auto px-7 relative z-10">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-6">
              Our Work
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-t1 mb-8 max-w-4xl leading-tight">
              Projects & Platforms
            </h1>
            <p className="text-xl text-t2 font-body max-w-2xl leading-relaxed">
              Research, technology, leadership, and venture initiatives transforming maritime
              industries — from India's coastlines to port economies worldwide.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bg-surface/50 to-transparent pointer-events-none" />
        </section>

        {/* ── Projects List ── */}
        <section className="py-12 pb-32">
          <div className="max-w-[1220px] mx-auto px-7 flex flex-col gap-12">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="bg-bg-card border border-bd-subtle rounded-2xl p-8 md:p-12 hover:border-bd-default hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
              >
                {/* Glow */}
                <div className="absolute -inset-px bg-gradient-to-r from-sky-base/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />

                <div className="relative z-10 flex flex-col md:flex-row gap-12">
                  <div className="md:w-2/3">
                    {/* Status */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(74,184,232,0.1)] border border-[rgba(74,184,232,0.2)] rounded-full text-sky-base text-xs font-semibold mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-base" />
                      {proj.status}
                    </div>

                    {/* Code */}
                    <p className="font-display text-xs font-bold tracking-[0.2em] text-sky-base/60 uppercase mb-2">
                      Project {proj.id} — {proj.code}
                    </p>

                    <h2 className="font-display text-2xl md:text-3xl font-bold text-t1 mb-2 leading-tight">
                      {proj.title}
                    </h2>
                    <p className="font-body text-sm text-sky-base italic mb-6">
                      {proj.subtitle}
                    </p>

                    <p className="text-base text-t2 font-body mb-8 leading-relaxed">
                      {proj.desc}
                    </p>

                    <div>
                      <h4 className="text-xs font-semibold text-t1 uppercase tracking-wider mb-4">
                        Focus Areas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.focus.map((area, i) => (
                          <span
                            key={i}
                            className="text-[12px] px-3 py-1.5 bg-bg-raised border border-bd-subtle rounded text-t2 font-body"
                          >
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
