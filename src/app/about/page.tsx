import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const shifts = [
    {
      title: "Autonomous Systems",
      tags: ["Artificial Intelligence", "Physical AI", "Robotics", "Drones", "Digital Twins", "Intelligent Operations", "Autonomous Maritime Systems"]
    },
    {
      title: "Decarbonisation & Green Transition",
      tags: ["Green Ports", "Low-Carbon Shipping", "Alternative Fuels", "Sustainable Infrastructure", "Carbon Intelligence"]
    },
    {
      title: "Climate Resilience",
      tags: ["Climate Adaptation", "Disaster Risk Reduction", "Coastal Resilience", "Blue Economy Sustainability"]
    },
    {
      title: "Workforce Transformation",
      tags: ["Future Skills", "Digital Workforce", "Human-AI Collaboration", "Leadership Development", "Capability Building"]
    }
  ];

  const sectors = [
    "Ports & Terminals",
    "Shipping & Maritime Transport",
    "Inland Waterways",
    "Coastal Communities & Ecosystems",
    "Shipbuilding & Allied Industries",
    "Maritime Defence"
  ];

  const framework = [
    {
      title: "Discover & Validate",
      desc: "Research maritime challenges, assess readiness, validate opportunities through studies, pilots, and proof-of-value initiatives."
    },
    {
      title: "Build & Venture",
      desc: "Develop technologies, products, partnerships, and ventures that solve validated maritime challenges."
    },
    {
      title: "Scale & Sustain",
      desc: "Expand proven solutions and create long-term economic, environmental, and societal impact."
    }
  ];

  return (
    <>
      <Header />
      <main className="flex-grow w-full overflow-hidden bg-bg-void pt-24">
        
        {/* Section 1 - About Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1220px] mx-auto px-7 relative z-10 text-center">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-6">Our Purpose</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-t1 mb-8 max-w-4xl mx-auto leading-tight">
              To accelerate the transition toward green, autonomous, resilient, and future-ready maritime systems.
            </h1>
            <p className="text-xl text-t2 font-body max-w-3xl mx-auto leading-relaxed">
              UMINATO researches, builds, and scales technologies, ventures, and partnerships addressing the most significant shifts shaping the maritime future.
            </p>
          </div>
        </section>

        {/* Section 2 - The Four Shifts */}
        <section className="py-24 bg-bg-deep border-t border-bd-subtle">
          <div className="max-w-[1220px] mx-auto px-7">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-t1 mb-6">The Four Shifts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {shifts.map((shift, idx) => (
                <div key={idx} className="bg-bg-card border border-bd-subtle p-8 rounded-xl hover:border-sky-base transition-colors duration-300">
                  <h3 className="font-display text-2xl font-bold text-t1 mb-6">{shift.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {shift.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[12px] px-3 py-1.5 bg-bg-raised border border-bd-subtle rounded text-t2 font-body">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - Focus Sectors */}
        <section className="py-24 bg-bg-base border-t border-bd-subtle text-center">
          <div className="max-w-[1220px] mx-auto px-7">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-6">Maritime Focus Sectors</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-t1 mb-16">Industries We Serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
              {sectors.map((sector, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-bg-surface p-6 rounded-lg border border-bd-subtle">
                  <div className="w-2 h-2 rounded-full bg-sky-base"></div>
                  <span className="font-body text-t2 font-medium">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 - Framework */}
        <section className="py-24 bg-bg-deep border-t border-bd-subtle">
          <div className="max-w-[1220px] mx-auto px-7">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-t1 mb-6">Our Framework</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {framework.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-bg-card border border-sky-base text-sky-base font-display text-xl font-bold flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(74,184,232,0.15)]">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-xl font-bold text-t1 mb-4">{step.title}</h3>
                  <p className="text-t2 font-body leading-relaxed text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 - Closing */}
        <section className="py-32 bg-sky-base text-bg-void text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-transparent"></div>
          <div className="max-w-4xl mx-auto px-7 relative z-10">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Understand What Matters.<br/>
              Create What Is Needed.<br/>
              Deliver Impact That Endures.
            </h2>
          </div>
        </section>

      </main>
      <Footer hideCTA />
    </>
  );
}
