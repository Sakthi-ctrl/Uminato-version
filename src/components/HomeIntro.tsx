import React from 'react';

const PROCESS_CARDS = [
  {
    num: '01',
    title: 'Discover & Validate',
    desc: "We dig deep — researching where the maritime sector's most critical technology, policy, and market gaps lie, and validating where UMINATO's intervention will move the needle most.",
  },
  {
    num: '02',
    title: 'Build & Venture',
    desc: 'We build — proprietary tools, technology platforms, and indices, then structure the ventures and partnerships that take them from the studio into ports, waterways, and shipping lanes.',
  },
  {
    num: '03',
    title: 'Scale & Sustain',
    desc: "We scale — connecting proven solutions to government programmes, multilateral funding, and industry partners to deliver lasting, measurable impact — from India's maritime ecosystem to port economies worldwide.",
  },
  {
    num: '04',
    title: 'Advise. Deploy. Transform.',
    desc: 'UMINATO works directly with ports, shipping companies, waterway operators, coastal authorities, and maritime institutions — evaluating readiness, identifying gaps, and mapping clear pathways forward.',
  },
];

export default function HomeIntro() {
  return (
    <section
      className="relative overflow-hidden border-t border-bd-subtle"
      style={{ background: 'linear-gradient(180deg, #080F1E 0%, #0B1628 100%)' }}
    >
      {/* ══════════════════════════════════
          BLOCK 1 — Introduction copy
      ══════════════════════════════════ */}
      <div className="max-w-[1220px] mx-auto px-8 md:px-12" style={{ paddingTop: '96px', paddingBottom: '80px' }}>



        {/* Two-column grid — label is OUTSIDE so columns align naturally */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0"
          style={{ alignItems: 'center' }}
        >
          {/* ── LEFT: Heading ── */}
          <div style={{ paddingRight: '64px' }}>
            <h2
              className="font-display font-bold text-t1 leading-[1.06] tracking-tight"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)' }}
            >
              Accelerating
              <br />
              <span style={{ color: '#4AB8E8' }}>Maritime</span>
              <br />
              Transformation
            </h2>
          </div>

          {/* ── RIGHT: Body paragraphs ── */}
          <div
            className="mt-10 lg:mt-0"
            style={{
              paddingLeft: '56px',
              borderLeft: '1px solid rgba(74,184,232,0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <p className="font-body text-t2 leading-[1.8]" style={{ fontSize: '0.9375rem' }}>
              India's ports, waterways, and coastlines are at the centre of one of the world's most
              ambitious maritime transformations — Harit Sagar, Harit Nauka, Sagarmala, Maritime
              Amrit Kaal Vision 2047. The policies are in place. The technology and measurement
              infrastructure to deliver them is still being built.
            </p>
            <p className="font-body text-t2 leading-[1.8]" style={{ fontSize: '0.9375rem' }}>
              UMINATO researches what the sector needs, builds the tools to measure and accelerate
              progress, and develops the ventures that make India's ports, port ecosystems,
              waterways, and coastlines smarter, greener, climate-resilient, and genuinely
              future-ready.
            </p>
            <p className="font-body text-t2 leading-[1.8]" style={{ fontSize: '0.9375rem' }}>
              The pressure is the same worldwide. IMO's net-zero targets are reshaping every
              shipping lane. The EU's port decarbonisation mandates are rewriting terminal
              investment. Climate shocks are redrawing coastlines from the Bay of Bengal to the
              Gulf of Mexico. UMINATO exists to change that.
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          BLOCK 2 — "How We Work" divider
      ══════════════════════════════════ */}
      <div
        className="max-w-[1220px] mx-auto px-8 md:px-12"
        style={{ paddingBottom: '48px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(74,184,232,0.15))' }} />
          <span
            className="font-display font-bold uppercase whitespace-nowrap"
            style={{ fontSize: '0.62rem', letterSpacing: '0.28em', color: '#4E6E88' }}
          >
            How We Work
          </span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(74,184,232,0.15), transparent)' }} />
        </div>
      </div>

      {/* ══════════════════════════════════
          BLOCK 3 — Process cards 2×2
      ══════════════════════════════════ */}
      <div
        className="max-w-[1220px] mx-auto px-8 md:px-12"
        style={{ paddingBottom: '96px' }}
      >
        {/* 2×2 grid using gap-px + wrapper background for visible inner borders */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: 'rgba(74,184,232,0.12)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(74,184,232,0.12)',
          }}
        >
          {PROCESS_CARDS.map((item, i) => (
            <div
              key={i}
              className="group relative"
              style={{
                background: '#0B1628',
                padding: '44px 40px 40px',
                transition: 'background 0.25s ease',
              }}
            >
              {/* Hover background — simulated via overlay since no JS */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: '#0F1E38', zIndex: 0 }}
              />

              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, #4AB8E8 0%, transparent 70%)',
                  zIndex: 1,
                }}
              />

              {/* Content above overlay */}
              <div className="relative" style={{ zIndex: 2 }}>
                {/* Number */}
                <div
                  className="font-display font-extralight mb-6 select-none"
                  style={{
                    fontSize: '2.25rem',
                    lineHeight: 1,
                    color: 'rgba(74,184,232,0.2)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.num}
                </div>

                {/* Title */}
                <h3
                  className="font-display font-bold text-t1 mb-4"
                  style={{ fontSize: '1.05rem', letterSpacing: '-0.01em', lineHeight: 1.3 }}
                >
                  {item.title}
                </h3>

                {/* Desc */}
                <p
                  className="font-body text-t3 leading-[1.75]"
                  style={{ fontSize: '0.875rem' }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
