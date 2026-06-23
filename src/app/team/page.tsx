import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TeamPage() {
  const partners = [
    "Governments",
    "Port Authorities",
    "Shipping Companies",
    "Research Institutions",
    "Development Agencies",
    "Technology Providers",
    "Investors",
    "Ecosystem Partners"
  ];

  return (
    <>
      <Header />
      <main className="flex-grow w-full overflow-hidden bg-bg-void pt-24">
        
        {/* Section 1 - Team Introduction */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1220px] mx-auto px-7 relative z-10 text-center">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-6">Team Introduction</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-t1 mb-8">
              The People Behind UMINATO
            </h1>
            <p className="text-xl text-t2 font-body max-w-3xl mx-auto leading-relaxed">
              A multidisciplinary team bringing together maritime, technology, policy, venture building, and transformation expertise.
            </p>
          </div>
        </section>

        {/* Section 2 - Founding Team */}
        <section className="py-24 bg-bg-deep border-t border-bd-subtle">
          <div className="max-w-[1220px] mx-auto px-7">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-4">Leadership</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-t1">Founding Team</h2>
              </div>
              <button className="bg-transparent border border-sky-base text-sky-base px-6 py-2.5 rounded-md font-body font-medium text-[14px] hover:bg-[rgba(74,184,232,0.1)] transition-all">
                View Founder Profiles &rarr;
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Placeholder Founder Cards */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-bg-card border border-bd-subtle rounded-xl overflow-hidden hover:border-sky-base transition-colors duration-300">
                  <div className="h-64 bg-bg-raised w-full relative grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder image area */}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-t1 mb-1">Founder Name</h3>
                    <p className="text-sm text-sky-base font-body mb-4">Role / Title</p>
                    <p className="text-sm text-t2 font-body leading-relaxed">Brief biography detailing maritime and technology leadership expertise.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - Advisors */}
        <section className="py-24 bg-bg-base border-t border-bd-subtle">
          <div className="max-w-[1220px] mx-auto px-7">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-4">Strategic Guidance</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-t1">Advisors</h2>
                <p className="text-t2 font-body mt-4 max-w-xl">Industry, academic, and policy leaders providing strategic guidance.</p>
              </div>
              <button className="bg-transparent border border-sky-base text-sky-base px-6 py-2.5 rounded-md font-body font-medium text-[14px] hover:bg-[rgba(74,184,232,0.1)] transition-all">
                View Advisor Profiles &rarr;
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-bg-card border border-bd-subtle rounded-xl p-6 text-center hover:shadow-[0_0_15px_rgba(74,184,232,0.1)] transition-all duration-300">
                  <div className="w-24 h-24 mx-auto bg-bg-raised rounded-full mb-4"></div>
                  <h3 className="font-display text-lg font-bold text-t1 mb-1">Advisor Name</h3>
                  <p className="text-xs text-sky-base font-body">Expertise Area</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 - Partners */}
        <section className="py-24 bg-bg-deep border-t border-bd-subtle text-center">
          <div className="max-w-[1220px] mx-auto px-7">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-4">Network</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-t1 mb-8">Collaborating With</h2>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-16">
              {partners.map((partner, idx) => (
                <span key={idx} className="bg-bg-raised border border-bd-subtle text-t2 px-4 py-2 rounded-full text-sm font-body">
                  {partner}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
              {/* Logo Grid Placeholders */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="h-24 bg-bg-card border border-bd-subtle rounded-lg flex items-center justify-center grayscale hover:grayscale-0 hover:border-sky-base transition-all duration-300 cursor-pointer">
                  <span className="text-t3 text-xs font-bold uppercase tracking-widest">Logo {item}</span>
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
