import React from 'react';
import Link from 'next/link';

const STATUS_COLORS: Record<string, string> = {
  'In Development': '#1B6F2E',
  'Research & Pilot': '#7B4A0E',
  'Research & Pilot Programs': '#7B4A0E',
  'Program Development': '#1A3D80',
};

const PROJECTS = [
  {
    id: '01',
    code: 'MAPMI',
    title: 'Maritime and Ports Maturity Index',
    subtitle: 'Smart, Green, Resilient and Climate-Ready Performance — Objectively Measured',
    desc: 'MAPMI benchmarks ports, terminals, and coastal ecosystems across decarbonisation, digitisation, robotisation, and climate resilience — drawing exclusively on objective data extracted through system integrations, APIs, and remote sensing, with minimal human subjectivity.',
    focus: ['Decarbonisation', 'Digitisation', 'Robotisation', 'Climate Resilience', 'Remote Sensing'],
    status: 'Research & Development',
  },
  {
    id: '02',
    code: 'C2OS',
    title: 'Crew Command Operating System',
    subtitle: 'The AI Co-Captain for Smarter, Safer Ship Operations',
    desc: 'C2OS is an AI-powered command intelligence platform that transforms how vessels are operated — shifting from fragmented, reactive systems to a unified autonomous brain that predicts fatigue risks, ensures IMO/STCW compliance, and optimises crew deployment.',
    focus: ['AI Command Intelligence', 'STCW Compliance', 'Fatigue Risk', 'Vessel IoT'],
    status: 'Research & Development',
  },
  {
    id: '03',
    code: 'NAVIK',
    title: 'Maritime Talent Intelligence Platform',
    subtitle: 'Smarter Hiring Across the Full Maritime Workforce',
    desc: "NAVIK applies AI to maritime's most persistent challenge — finding, matching, and retaining the right talent. Covering seafarers to shore-based professionals, NAVIK goes beyond CV matching to assess competency and predict retention.",
    focus: ['AI Screening', 'Competency Assessment', 'Skills Intelligence', 'Talent Matching'],
    status: 'MVP Validation',
  },
  {
    id: '04',
    code: 'SGPTLP',
    title: 'Smart & Green Ports Transformation Leadership Program',
    subtitle: 'Leading the Transition to Smarter, Greener, and More Resilient Ports',
    desc: 'A practitioner-led program for port executives, mid-level managers, and government officials navigating decarbonisation and digitalisation — delivered in hybrid format across multiple certification levels.',
    focus: ['Green Ports', 'Smart Ports', 'Transformation Leadership', 'Future Skills'],
    status: 'Research & Development',
  },
];

export default function HomeProjects() {
  return (
    <section className="py-28 md:py-36 border-t border-bd-subtle" style={{ background: '#080F1E' }}>
      <div className="max-w-[1220px] mx-auto px-8 md:px-12">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div style={{ width: '28px', height: '1px', background: '#4AB8E8' }} />
              <span className="font-display text-[11px] font-bold tracking-[0.25em] uppercase" style={{ color: '#4AB8E8' }}>
                Our Ventures
              </span>
            </div>
            <h2 className="font-display font-bold text-t1 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Projects &amp; Platforms
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-body font-medium text-sky-base border border-sky-base rounded-md transition-all min-h-[44px] justify-center"
            style={{ padding: '10px 22px', fontSize: '0.85rem', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}
          >
            View All Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.625 7H11.375M11.375 7L7.875 3.5M11.375 7L7.875 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* ── Projects Grid — 2×2 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((proj) => {
            const statusBg = STATUS_COLORS[proj.status] ?? '#1A3D80';
            return (
              <div
                key={proj.id}
                className="group relative flex flex-col rounded-xl border border-bd-subtle transition-all duration-300 overflow-hidden"
                style={{ background: '#0F1E38' }}
              >
                {/* Top accent */}
                <div
                  style={{
                    height: '3px',
                    background: 'linear-gradient(90deg, #4AB8E8 0%, transparent 80%)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                  className="group-hover:opacity-100"
                />

                <div className="flex flex-col flex-1 p-8">

                  {/* Row 1: Code + Status */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="font-display font-bold tracking-[0.18em] uppercase"
                      style={{ fontSize: '0.7rem', color: 'rgba(74,184,232,0.55)' }}
                    >
                      {proj.code} · {proj.id}
                    </span>
                    <span
                      className="font-display font-semibold rounded-full"
                      style={{
                        fontSize: '0.68rem',
                        padding: '3px 10px',
                        letterSpacing: '0.04em',
                        color: '#E8F3FC',
                        background: `${statusBg}55`,
                        border: `1px solid ${statusBg}99`,
                      }}
                    >
                      {proj.status}
                    </span>
                  </div>

                  {/* Row 2: Title */}
                  <h3
                    className="font-display font-bold text-t1 leading-snug mb-2"
                    style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.35rem)' }}
                  >
                    {proj.title}
                  </h3>

                  {/* Row 3: Subtitle */}
                  <p
                    className="font-body italic leading-snug mb-5"
                    style={{ fontSize: '0.78rem', color: '#4AB8E8', opacity: 0.75 }}
                  >
                    {proj.subtitle}
                  </p>

                  {/* Divider */}
                  <div style={{ height: '1px', background: '#1E3158', marginBottom: '20px' }} />

                  {/* Row 4: Description */}
                  <p
                    className="font-body text-t2 leading-relaxed flex-1 mb-6"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {proj.desc}
                  </p>

                  {/* Row 5: Focus tags */}
                  <div>
                    <p
                      className="font-display font-bold uppercase tracking-wider mb-3"
                      style={{ fontSize: '0.65rem', color: '#4E6E88' }}
                    >
                      Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proj.focus.map((area, i) => (
                        <span
                          key={i}
                          className="font-body"
                          style={{
                            fontSize: '0.72rem',
                            padding: '4px 10px',
                            background: '#122342',
                            border: '1px solid #1E3158',
                            borderRadius: '4px',
                            color: '#8AAFC8',
                          }}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
