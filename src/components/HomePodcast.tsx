import React from 'react';
import Link from 'next/link';

export default function HomePodcast() {
  return (
    <section className="py-16 md:py-20 bg-bg-base relative overflow-hidden border-t border-bd-subtle">
      <div className="max-w-[1220px] mx-auto px-7">
        <div className="bg-bg-card border border-bd-default rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-base opacity-[0.03] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

          <div className="max-w-xl relative z-10">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-4">
              Podcast
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-t1 mb-6">
              Future of Maritime Systems
            </h2>
            <p className="text-lg text-t2 font-body mb-8">
              Conversations on the Future of Maritime Systems
            </p>

            <div className="flex items-center gap-3 mb-10">
              <span className="text-xs font-semibold text-t3 uppercase tracking-wider">Status:</span>
              <span className="inline-flex items-center px-3 py-1 bg-[rgba(240,180,41,0.1)] border border-[rgba(240,180,41,0.3)] rounded-full text-[#F5C752] text-xs font-semibold">
                Coming Soon
              </span>
            </div>

            <div className="mb-10">
              <span className="text-xs font-semibold text-t3 uppercase tracking-wider block mb-4">Platforms:</span>
              <div className="flex items-center gap-4">
                <span className="text-sm text-t2 font-medium bg-bg-raised px-4 py-2 rounded-md border border-bd-subtle">Spotify</span>
                <span className="text-sm text-t2 font-medium bg-bg-raised px-4 py-2 rounded-md border border-bd-subtle">Apple Podcasts</span>
                <span className="text-sm text-t2 font-medium bg-bg-raised px-4 py-2 rounded-md border border-bd-subtle">YouTube</span>
              </div>
            </div>

            <button className="bg-sky-base text-t-inv px-8 py-3.5 rounded-md font-body font-medium text-[15px] hover:bg-sky-light transition-all shadow-[0_0_20px_rgba(74,184,232,0.15)]">
              Subscribe
            </button>
          </div>

          <div className="w-full md:w-1/3 aspect-square bg-bg-raised border border-bd-subtle rounded-xl flex items-center justify-center relative z-10 shadow-lg overflow-hidden group cursor-pointer">
            <img src="/assets/podcast/cover.png" alt="The UMINATO Podcast" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-bg-deep/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-sky-base/90 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(74,184,232,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-1"><path d="M5 3l14 9-14 9V3z" /></svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
