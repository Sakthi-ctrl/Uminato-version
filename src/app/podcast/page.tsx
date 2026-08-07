import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PodcastPage() {
  const episodes = [
    {
      number: "01",
      title: "The Transition to Zero-Emission Ports",
      guest: "Dr. Elena Rostova",
      role: "Head of Sustainability, Global Terminals",
      date: "Coming Soon",
      duration: "45 min"
    },
    {
      number: "02",
      title: "Physical AI and Autonomous Shipping",
      guest: "Marcus Chen",
      role: "Lead Engineer, Ocean Robotics",
      date: "Coming Soon",
      duration: "52 min"
    },
    {
      number: "03",
      title: "Reskilling the Maritime Workforce",
      guest: "Sarah Jenkins",
      role: "Director of Future Skills",
      date: "Coming Soon",
      duration: "38 min"
    }
  ];

  return (
    <>
      <Header />
      <main className="flex-grow w-full overflow-hidden bg-bg-void pt-24">
        
        {/* Podcast Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1220px] mx-auto px-7 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-3/5">
              <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-6">Podcast</p>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-t1 mb-8 leading-tight">
                The UMINATO Podcast
              </h1>
              <p className="text-xl text-t2 font-body max-w-2xl leading-relaxed mb-12">
                Conversations with industry leaders, innovators, researchers, and policymakers shaping the future of maritime systems.
              </p>
              
              <div className="mb-10">
                <span className="text-xs font-semibold text-t3 uppercase tracking-wider block mb-4">Available on:</span>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm text-t2 font-medium bg-bg-card px-6 py-3 rounded-md border border-bd-subtle flex items-center gap-2 hover:border-sky-base cursor-pointer transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
                    Spotify
                  </span>
                  <span className="text-sm text-t2 font-medium bg-bg-card px-6 py-3 rounded-md border border-bd-subtle flex items-center gap-2 hover:border-sky-base cursor-pointer transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
                    Apple Podcasts
                  </span>
                  <span className="text-sm text-t2 font-medium bg-bg-card px-6 py-3 rounded-md border border-bd-subtle flex items-center gap-2 hover:border-sky-base cursor-pointer transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                    YouTube
                  </span>
                </div>
              </div>
            </div>

            <div className="md:w-2/5 flex justify-center">
              {/* Giant abstract podcast art */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-bg-surface to-bg-card border border-bd-default rounded-3xl shadow-[0_0_50px_rgba(74,184,232,0.1)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-full h-full bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
                <div className="w-32 h-32 rounded-full border border-sky-base/30 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-sky-base/60 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-sky-base flex items-center justify-center shadow-[0_0_30px_rgba(74,184,232,0.4)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-bg-void translate-x-0.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Episodes */}
        <section className="py-24 bg-bg-deep border-t border-bd-subtle">
          <div className="max-w-[1220px] mx-auto px-7">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-t1 mb-12">Upcoming Episodes</h2>
            
            <div className="flex flex-col gap-6">
              {episodes.map((ep, idx) => (
                <div key={idx} className="bg-bg-card border border-bd-subtle rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-sky-base transition-colors duration-300">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl font-display font-extrabold text-bd-active hidden sm:block">
                      {ep.number}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold text-sky-base uppercase tracking-wider">{ep.date}</span>
                        <span className="w-1 h-1 rounded-full bg-t3"></span>
                        <span className="text-xs font-medium text-t3 flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          {ep.duration}
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-t1 mb-2">{ep.title}</h3>
                      <p className="text-sm text-t2 font-body">With <span className="text-t1 font-semibold">{ep.guest}</span>, {ep.role}</p>
                    </div>
                  </div>
                  
                  <button className="bg-bg-raised border border-bd-default text-t2 px-6 py-3 rounded-md font-body font-medium text-[14px] hover:bg-bg-hover hover:text-sky-base transition-all flex items-center gap-2 flex-shrink-0 w-full md:w-auto justify-center">
                    Notify Me
                  </button>
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
