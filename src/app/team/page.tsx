import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FOUNDERS = [
  {
    name: "Capt. Indresh Kharbanda",
    role: "Co-Founder",
    expertise: "Maritime Operations | Ship Command | Sector Credibility",
    initials: "IK",
    image: "/Image 03.jpeg",
    bio: "A decorated veteran ship captain bringing decades of lived experience from the deck up — giving UMINATO its operational credibility and its human compass."
  },
  {
    name: "Umesh Sahdev",
    role: "Co-Founder",
    expertise: "Climate Change Mitigation & Decarbonisation",
    initials: "US",
    image: "/Image 01.jpeg",
    bio: "A veteran across multiple industries and a pioneer of climate change mitigation and decarbonisation — Umesh saw the maritime sector's urgent need clearly and built UMINATO to answer it."
  },
  {
    name: "Ram Shankar",
    role: "Co-Founder",
    expertise: "Industry 4.0 | AI & Robotics | Intelligent Systems",
    initials: "RS",
    image: "/image 02.jpg",
    bio: "Founder of Maxbyte Technologies across India, the Middle East, and the USA, and one of the foremost pioneers of Industry 4.0 — bringing deep expertise in AI, robotics, and intelligent systems."
  },
];

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="flex-grow w-full overflow-hidden bg-bg-void pt-24">

        {/* ── Section 1: Introduction ── */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1220px] mx-auto px-7 relative z-10 text-center">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-6">
              Leadership
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-t1 mb-8">
              The People behind UMINATO
            </h1>
            <p className="text-xl text-t2 font-body max-w-3xl mx-auto leading-relaxed">
              A multidisciplinary founding team bringing together maritime operations, advanced
              technology, climate change expertise, and venture-building experience.
            </p>
          </div>
        </section>

        {/* ── Section 2: Founding Team ── */}
        <section className="py-24 bg-bg-deep border-t border-bd-subtle">
          <div className="max-w-[1220px] mx-auto px-7">
            <div className="mb-16">
              <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-4">
                Founding Team
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-t1 mb-4">
                Three Minds. One Mission.
              </h2>
              <p className="text-t2 font-body max-w-2xl">
                Short CVs will be provided shortly. Photos and full profiles coming soon.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {FOUNDERS.map((founder, idx) => (
                <div
                  key={idx}
                  className="bg-bg-card border border-bd-subtle rounded-xl overflow-hidden hover:border-sky-base transition-colors duration-300 group"
                >
                  {/* Photo */}
                  <div className="h-64 w-full relative overflow-hidden bg-bg-raised">
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent"></div>
                  </div>

                  <div className="p-6 relative z-10 -mt-10">
                    <h3 className="font-display text-xl font-bold text-t1 mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-[11px] text-sky-base font-body font-bold uppercase tracking-wider mb-3">
                      {founder.role}
                    </p>
                    <p className="text-xs text-t3 font-body leading-relaxed mb-6">
                      {founder.expertise}
                    </p>
                    <div className="h-[1px] w-full bg-bd-subtle mb-6"></div>
                    <p className="text-[13px] text-t2 font-body leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CV note */}
            <div className="mt-12 text-center p-6 bg-bg-surface border border-bd-subtle rounded-xl max-w-2xl mx-auto">
              <p className="text-t3 font-body text-sm italic">
                Full CVs and detailed founder profiles will be added shortly.
                The team brings together maritime command, climate action, and AI/Industry 4.0
                expertise to drive UMINATO's mission.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 3: Advisory (placeholder) ── */}
        <section className="py-24 bg-bg-base border-t border-bd-subtle">
          <div className="max-w-[1220px] mx-auto px-7">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-4">
                  Strategic Guidance
                </p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-t1">
                  Advisors
                </h2>
                <p className="text-t2 font-body mt-4 max-w-xl">
                  Industry, academic, and policy leaders providing strategic guidance.
                  Advisory board details to follow.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-bg-card border border-bd-subtle rounded-xl p-6 text-center hover:shadow-[0_0_15px_rgba(74,184,232,0.1)] transition-all duration-300"
                >
                  <div className="w-20 h-20 mx-auto bg-bg-raised rounded-full mb-4 flex items-center justify-center border border-bd-default">
                    <span className="text-t3 text-xs font-bold uppercase tracking-widest">TBA</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-t1 mb-1">Coming Soon</h3>
                  <p className="text-xs text-sky-base font-body">Advisory Board</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer hideCTA />
    </>
  );
}
