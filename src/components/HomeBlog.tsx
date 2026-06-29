import React from 'react';
import Link from 'next/link';

export default function HomeBlog() {
  return (
    <section id="insights" className="py-24 bg-bg-deep relative overflow-hidden border-t border-bd-subtle">
      <div className="max-w-[1220px] mx-auto px-7 relative z-10">
        <div className="mb-16">
          <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-4">
            Insights &amp; Blog
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-t1 leading-tight max-w-2xl">
              Latest Insights
            </h2>
            <Link href="/blog" className="bg-transparent border border-sky-base text-sky-base px-6 py-2.5 rounded-md font-body font-medium text-[14px] hover:bg-[rgba(74,184,232,0.1)] transition-all inline-flex items-center gap-2">
              View All Insights
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/blog/future-autonomous-maritime" className="group bg-bg-card border border-bd-subtle rounded-xl overflow-hidden hover:border-bd-default hover:shadow-md transition-all flex flex-col">
            <div className="h-64 bg-bg-raised w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent z-10"></div>
              <img src="/assets/blog/featured-insight.png" alt="Autonomous Maritime Systems" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <span className="text-[11px] px-2.5 py-1 bg-bg-raised border border-bd-subtle rounded text-sky-base font-body mb-4 inline-block font-medium">
                Featured Insight
              </span>
              <h3 className="font-display text-2xl font-bold text-t1 mb-4 group-hover:text-sky-base transition-colors">
                The Future of Autonomous Maritime Systems
              </h3>
              <p className="text-sm text-t2 font-body leading-relaxed">
                Short article preview discussing the shift towards AI-driven, physical autonomy in ports and international shipping lines.
              </p>
            </div>
          </Link>
          
          <div className="flex flex-col gap-6 justify-start">
            <Link href="/blog/ai-crew-hiring-trends" className="group p-5 bg-bg-card border border-bd-subtle rounded-xl hover:border-bd-default hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-center">
               <div className="w-full sm:w-1/3 h-28 bg-bg-raised rounded-lg flex-shrink-0 relative overflow-hidden">
                 <img src="/assets/blog/crew-insight.png" alt="AI in Crew Hiring" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div>
                 <span className="text-[10px] uppercase tracking-wider text-t3 font-semibold mb-2 block">Talent & Workforce</span>
                 <h4 className="font-display text-[15px] font-bold text-t1 mb-2 group-hover:text-sky-base transition-colors leading-tight">AI Trends in Maritime Crew Recruitment for 2027</h4>
                 <p className="text-xs text-t2 font-body line-clamp-2">Exploring how predictive analytics and skills intelligence are reshaping global shipping talent sourcing.</p>
               </div>
            </Link>
            
            <div className="p-8 bg-bg-surface border border-bd-subtle rounded-xl flex-grow flex flex-col justify-center">
              <h4 className="font-display text-lg font-bold text-t1 mb-2">Subscribe to Insights</h4>
              <p className="text-sm text-t2 font-body mb-6">Receive the latest research and perspectives on maritime transformation directly in your inbox.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email address" className="bg-bg-card border border-bd-default rounded-md px-4 py-2.5 font-body text-[13.5px] text-t1 outline-none focus:border-sky-base flex-grow" />
                <button className="bg-sky-base text-t-inv px-6 py-2.5 rounded-md font-body font-medium text-[14px] hover:bg-sky-light transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
