import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Anchor, Ship, Waves, Palmtree, Wrench, Shield } from 'lucide-react';

const FOUNDERS = [
  {
    photo: '/Image 01.jpeg',
    name: 'Umesh Sahdev',
    role: 'Co-Founder',
    expertise: 'Climate Change Mitigation & Decarbonisation',
    bio: "A veteran across multiple industries and a pioneer of climate change mitigation and decarbonisation — Umesh saw the maritime sector's urgent need clearly and built UMINATO to answer it.",
  },
  {
    photo: '/image 02.jpg',
    name: 'Ram Shankar',
    role: 'Co-Founder',
    expertise: 'Industry 4.0 | AI & Robotics | Intelligent Systems',
    bio: 'Founder of Maxbyte Technologies across India, the Middle East, and the USA, and one of the foremost pioneers of Industry 4.0 — bringing deep expertise in AI, robotics, and intelligent systems.',
  },
  {
    photo: '/Image 03.jpeg',
    name: 'Capt. Indresh Kharbanda',
    role: 'Co-Founder',
    expertise: 'Maritime Operations | Ship Command | Sector Credibility',
    bio: 'A decorated veteran ship captain bringing decades of lived experience from the deck up — giving UMINATO its operational credibility and its human compass.',
  },
];

const FOUR_SHIFTS = [
  {
    num: '01',
    title: 'Autonomous Systems',
    desc: 'The maritime industry is moving from human-operated to machine-augmented — and the gap between early movers and the rest is widening fast.',
    tags: ['Artificial Intelligence', 'Physical AI', 'Robotics', 'Drones', 'Digital Twins', 'Intelligent Operations', 'Autonomous Maritime Systems'],
  },
  {
    num: '02',
    title: 'Decarbonisation & Green Transition',
    desc: "IMO's net-zero targets and global regulatory pressure are making decarbonisation not a choice but a survival imperative for every port, fleet, and waterway.",
    tags: ['Green Ports', 'Low-Carbon Shipping', 'Alternative Fuels', 'Sustainable Infrastructure', 'Carbon Intelligence'],
  },
  {
    num: '03',
    title: 'CCA & DRR — Climate and Disaster Resilience',
    desc: "Ports, coastlines, and inland waterways face escalating climate shocks — and the infrastructure built for yesterday's climate is already becoming inadequate. Building resilience means protecting ecosystems, communities, and economies together — aligned with the IMO's Blue Economy framework.",
    tags: ['Climate Adaptation', 'Disaster Risk Reduction', 'Coastal Resilience', 'Blue Economy', 'Ocean Sustainability', 'IMO Blue Economy'],
  },
  {
    num: '04',
    title: 'Workforce Transformation',
    desc: "The maritime workforce that will operate tomorrow's smart, green, autonomous systems doesn't yet exist — it needs to be built deliberately, now.",
    tags: ['Future Skills', 'Digital Workforce', 'Human-AI Collaboration', 'Leadership Development', 'Capability Building'],
  },
];

const SECTORS = [
  { label: 'Ports & Terminals', icon: Anchor },
  { label: 'Shipping & Maritime Transport', icon: Ship },
  { label: 'Inland Waterways & River Systems', icon: Waves },
  { label: 'Coastal & Island Communities (SIDS)', icon: Palmtree },
  { label: 'Shipbuilding & Allied Industries', icon: Wrench },
  { label: 'Maritime Defence', icon: Shield },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow w-full overflow-hidden" style={{ background: '#050D1A' }}>

        {/* ══════════════════════════════════════════
            SECTION 1 — WHY WE EXIST (Hero)
            Corporate: split layout, decorative grid,
            left accent bar, highlighted stat line
        ══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden pt-24"
          style={{ background: 'linear-gradient(160deg, #060E1D 0%, #0A1424 60%, #080F1D 100%)' }}
        >
          {/* Background decorative grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(74,184,232,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(74,184,232,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Top-right radial glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-80px', right: '-80px',
              width: '500px', height: '500px',
              background: 'radial-gradient(circle, rgba(74,184,232,0.08) 0%, transparent 65%)',
            }}
          />

          <div
            className="max-w-[1220px] mx-auto px-8 md:px-12 relative z-10"
            style={{ paddingTop: '80px', paddingBottom: '96px' }}
          >
            {/* Section eyebrow */}
            <div className="flex items-center gap-3 mb-10">
              <div style={{ width: '28px', height: '1px', background: '#4AB8E8', flexShrink: 0 }} />
              <span
                className="font-display font-bold uppercase"
                style={{ fontSize: '0.67rem', letterSpacing: '0.28em', color: '#4AB8E8' }}
              >
                About UMINATO
              </span>
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">

              {/* LEFT — headline + foundation statement */}
              <div>
                <h1
                  className="font-display font-bold text-t1 leading-[1.06] tracking-tight mb-8"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  Why We{' '}
                  <span style={{ color: '#4AB8E8' }}>Exist</span>
                </h1>

                {/* Highlighted callout block */}
                <div
                  className="mb-8"
                  style={{
                    borderLeft: '3px solid #4AB8E8',
                    paddingLeft: '20px',
                    paddingTop: '4px',
                    paddingBottom: '4px',
                  }}
                >
                  <p
                    className="font-display font-semibold text-t1 leading-relaxed"
                    style={{ fontSize: '1.05rem' }}
                  >
                    UMINATO was founded to close the gap between maritime policy ambition and the technology needed to deliver it.
                  </p>
                </div>

                {/* Founding statement */}
                <p
                  className="font-body font-bold"
                  style={{ fontSize: '0.875rem', color: '#4AB8E8', letterSpacing: '0.02em' }}
                >
                  UMINATO was founded to close that gap.
                </p>
              </div>

              {/* RIGHT — body text */}
              <div className="flex flex-col gap-5">
                <p
                  className="font-body text-t2 leading-[1.85]"
                  style={{ fontSize: '0.9375rem' }}
                >
                  India's maritime sector is at an inflection point. Ambitious government programmes — Harit Sagar, Harit Nauka, Sagarmala, Maritime Amrit Kaal Vision 2047 — are reshaping ports, waterways, and coastlines. But policy alone does not transform an industry. Technology does. And the tools, platforms, and expertise to deliver that transformation at scale were simply not there.
                </p>
                <p
                  className="font-body text-t2 leading-[1.85]"
                  style={{ fontSize: '0.9375rem' }}
                >
                  The pressure is the same worldwide. IMO's net-zero targets are reshaping every shipping lane. Climate shocks are redrawing coastlines from the Bay of Bengal to the Gulf of Mexico. And across every maritime economy — developed or emerging — the tools to measure progress, build resilience, and accelerate transformation remain thin.
                </p>
              </div>
            </div>

            {/* Bottom stats row */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20"
              style={{
                background: 'rgba(74,184,232,0.1)',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid rgba(74,184,232,0.12)',
              }}
            >
              {[
                { value: '4', label: 'Venture Initiatives' },
                { value: '6', label: 'Maritime Sectors' },
                { value: '4', label: 'Strategic Shifts' },
                { value: '3', label: 'Co-Founders' },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{ background: '#080F1D', padding: '28px 24px', textAlign: 'center' }}
                >
                  <div
                    className="font-display font-bold text-t1"
                    style={{ fontSize: '2rem', lineHeight: 1, color: '#4AB8E8', marginBottom: '6px' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-body text-t3 uppercase"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.14em' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 2 — THREE MINDS. ONE MISSION.
            Corporate: dark panel, founder cards,
            Vision & Mission side-by-side
        ══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden border-t border-bd-subtle"
          style={{ background: '#080F1E' }}
        >
          <div
            className="max-w-[1220px] mx-auto px-8 md:px-12"
            style={{ paddingTop: '96px', paddingBottom: '96px' }}
          >
            {/* Section header */}
            <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ width: '28px', height: '1px', background: '#4AB8E8', flexShrink: 0 }} />
                  <span className="font-display font-bold uppercase" style={{ fontSize: '0.67rem', letterSpacing: '0.28em', color: '#4AB8E8' }}>
                    Our Founders
                  </span>
                </div>
                <h2
                  className="font-display font-bold text-t1 leading-tight"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
                >
                  Three Minds.{' '}
                  <span style={{ color: '#4AB8E8' }}>One Mission.</span>
                </h2>
              </div>
              <p
                className="font-body text-t3 max-w-sm"
                style={{ fontSize: '0.875rem', lineHeight: 1.7 }}
              >
                Full CVs and detailed profiles coming soon. Photos pending.
              </p>
            </div>

            {/* Founder cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {FOUNDERS.map((f, i) => (
                <div
                  key={i}
                  className="group relative rounded-xl overflow-hidden border border-bd-subtle hover:border-sky-base transition-colors duration-300"
                  style={{ background: '#0F1E38' }}
                >
                  {/* Top colour accent */}
                  <div
                    style={{
                      height: '3px',
                      background: 'linear-gradient(90deg, #4AB8E8 0%, #1B3EB5 100%)',
                    }}
                  />

                  {/* Photo area */}
                  <div
                    style={{
                      height: '280px',
                      position: 'relative',
                      overflow: 'hidden',
                      background: '#0B1628',
                    }}
                  >
                    <Image
                      src={f.photo}
                      alt={f.name}
                      fill
                      unoptimized
                      className="object-cover object-center"
                      style={{ objectPosition: 'center 15%' }}
                    />
                    {/* Subtle gradient at bottom — kept thin so it doesn't cover faces */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '40px',
                        background: 'linear-gradient(to top, #0F1E38, transparent)',
                      }}
                    />
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '24px 24px 28px' }}>
                    <h3
                      className="font-display font-bold text-t1 mb-1"
                      style={{ fontSize: '1.05rem' }}
                    >
                      {f.name}
                    </h3>
                    <p
                      className="font-body font-semibold mb-2"
                      style={{ fontSize: '0.72rem', color: '#4AB8E8', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                    >
                      {f.role}
                    </p>
                    <p
                      className="font-body text-t3 mb-4"
                      style={{ fontSize: '0.7rem', letterSpacing: '0.03em' }}
                    >
                      {f.expertise}
                    </p>
                    <div style={{ height: '1px', background: 'rgba(74,184,232,0.1)', marginBottom: '16px' }} />
                    <p
                      className="font-body text-t2 leading-relaxed"
                      style={{ fontSize: '0.85rem' }}
                    >
                      {f.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: 'Vision',
                  text: 'A smarter, greener, and climate-resilient maritime world — built on technology that works on the ground.',
                  icon: '◎',
                },
                {
                  label: 'Mission',
                  text: 'To research the gaps, build the tools, and launch the ventures that transform how ports, waterways, and coastlines perform, adapt, and endure — delivering measurable, lasting impact to our partners across the maritime ecosystem.',
                  icon: '◈',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    background: '#0B1628',
                    border: '1px solid rgba(74,184,232,0.15)',
                    padding: '36px',
                  }}
                >
                  {/* Corner accent */}
                  <div
                    style={{
                      position: 'absolute', top: 0, left: 0,
                      width: '60px', height: '60px',
                      background: 'linear-gradient(135deg, rgba(74,184,232,0.12) 0%, transparent 60%)',
                    }}
                  />
                  <div className="relative" style={{ zIndex: 1 }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span style={{ color: '#4AB8E8', fontSize: '1rem' }}>{item.icon}</span>
                      <span
                        className="font-display font-bold uppercase"
                        style={{ fontSize: '0.67rem', letterSpacing: '0.28em', color: '#4AB8E8' }}
                      >
                        {item.label}
                      </span>
                    </div>
                    <p
                      className="font-display font-semibold text-t1 leading-relaxed"
                      style={{ fontSize: '1rem' }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 3 — THE FOUR SHIFTS
            Corporate: alternating card layout,
            numbered with strong visual hierarchy
        ══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden border-t border-bd-subtle"
          style={{ background: '#060E1D' }}
        >
          {/* Subtle background texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(27,62,181,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(74,184,232,0.05) 0%, transparent 50%)',
            }}
          />

          <div
            className="max-w-[1220px] mx-auto px-8 md:px-12 relative z-10"
            style={{ paddingTop: '96px', paddingBottom: '96px' }}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ width: '28px', height: '1px', background: '#4AB8E8', flexShrink: 0 }} />
                  <span className="font-display font-bold uppercase" style={{ fontSize: '0.67rem', letterSpacing: '0.28em', color: '#4AB8E8' }}>
                    Strategic Focus
                  </span>
                </div>
                <h2
                  className="font-display font-bold text-t1 leading-tight"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
                >
                  The Four{' '}
                  <span style={{ color: '#4AB8E8' }}>Shifts</span>
                </h2>
              </div>
              <p
                className="font-body text-t3 max-w-sm"
                style={{ fontSize: '0.875rem', lineHeight: 1.7 }}
              >
                The transformative forces reshaping global maritime — and UMINATO's areas of deepest focus.
              </p>
            </div>

            {/* Four Shifts cards — 2×2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FOUR_SHIFTS.map((shift, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-xl border border-bd-subtle hover:border-sky-base transition-colors duration-300 overflow-hidden"
                  style={{ background: '#0B1628', padding: '36px 36px 32px' }}
                >
                  {/* Number watermark */}
                  <div
                    className="absolute pointer-events-none select-none"
                    style={{
                      top: '-8px', right: '24px',
                      fontSize: '6rem',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      color: 'rgba(74,184,232,0.04)',
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {shift.num}
                  </div>

                  <div className="relative z-10">
                    {/* Number badge */}
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="font-display font-bold"
                        style={{
                          fontSize: '0.72rem', letterSpacing: '0.12em',
                          color: '#4AB8E8', opacity: 0.7,
                        }}
                      >
                        {shift.num}
                      </span>
                      <div style={{ width: '20px', height: '1px', background: 'rgba(74,184,232,0.3)' }} />
                    </div>

                    {/* Title */}
                    <h3
                      className="font-display font-bold text-t1 mb-4"
                      style={{ fontSize: '1.15rem', lineHeight: 1.25, letterSpacing: '-0.01em' }}
                    >
                      {shift.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="font-body text-t2 leading-relaxed mb-6"
                      style={{ fontSize: '0.875rem' }}
                    >
                      {shift.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {shift.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-body"
                          style={{
                            fontSize: '0.7rem',
                            padding: '4px 10px',
                            background: '#122342',
                            border: '1px solid rgba(74,184,232,0.12)',
                            borderRadius: '4px',
                            color: '#8AAFC8',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 4 — INDUSTRIES WE SERVE
            Corporate: icon grid on dark background
        ══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden border-t border-bd-subtle"
          style={{ background: '#080F1E' }}
        >
          <div
            className="max-w-[1220px] mx-auto px-8 md:px-12"
            style={{ paddingTop: '96px', paddingBottom: '96px' }}
          >
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div style={{ width: '28px', height: '1px', background: '#4AB8E8', flexShrink: 0 }} />
                <span className="font-display font-bold uppercase" style={{ fontSize: '0.67rem', letterSpacing: '0.28em', color: '#4AB8E8' }}>
                  Maritime Focus Sectors
                </span>
                <div style={{ width: '28px', height: '1px', background: '#4AB8E8', flexShrink: 0 }} />
              </div>
              <h2
                className="font-display font-bold text-t1 leading-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', marginBottom: '12px' }}
              >
                Industries We Serve
              </h2>
              <p className="font-body text-t3" style={{ fontSize: '0.9rem' }}>
                Spanning the Blue Economy — with climate resilience and disaster risk reduction woven across every sector.
              </p>
            </div>

            {/* Sectors grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {SECTORS.map((sector, idx) => {
                const IconComponent = sector.icon;
                return (
                  <div
                    key={idx}
                    className="group flex items-center gap-5 rounded-xl border border-bd-subtle hover:border-sky-base transition-all duration-300"
                    style={{ background: '#0F1E38', padding: '22px 28px' }}
                  >
                    <div
                      style={{
                        width: '42px', height: '42px',
                        borderRadius: '8px',
                        background: 'rgba(74,184,232,0.08)',
                        border: '1px solid rgba(74,184,232,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}
                      className="group-hover:border-sky-base/40 transition-colors duration-300"
                    >
                      <IconComponent className="text-sky-base w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span
                      className="font-body font-semibold text-t2 group-hover:text-t1 transition-colors duration-300"
                      style={{ fontSize: '0.92rem', letterSpacing: '-0.01em' }}
                    >
                      {sector.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 5 — CLOSING CTA
        ══════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden border-t border-bd-subtle text-center"
          style={{ background: 'linear-gradient(135deg, #1B3EB5 0%, #0D2A7A 50%, #0A1E5C 100%)', padding: '100px 32px' }}
        >
          {/* Background texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-100px', left: '50%', transform: 'translateX(-50%)',
              width: '600px', height: '400px',
              background: 'radial-gradient(ellipse, rgba(74,184,232,0.15) 0%, transparent 65%)',
            }}
          />

          <div className="max-w-4xl mx-auto relative z-10">
            <h2
              className="font-display font-extrabold text-white leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', marginBottom: '24px' }}
            >
              Understand What Matters.<br />
              Create What Is Needed.<br />
              Deliver Impact That Endures.
            </h2>
            <p className="font-body text-white/70" style={{ fontSize: '1rem' }}>
              UMINATO | Maritime Innovation &amp; Venture Studio
            </p>
          </div>
        </section>

      </main>
      <Footer hideCTA />
    </>
  );
}
