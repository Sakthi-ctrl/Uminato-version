import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function HomeIntro() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent border-t border-white/5">
      <div className="max-w-[1220px] mx-auto px-7 relative z-10">
        
        {/* Corporate Split Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-sky-base"></div>
              <p className="font-display text-[12px] font-bold tracking-[0.2em] text-sky-base uppercase">
                Introduction
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-t1 leading-[1.1] tracking-tight">
              Accelerating <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Maritime</span> <br className="hidden md:block" />
              Transformation
            </h2>
          </div>
          
          <div className="md:w-1/2 md:pt-14">
            <p className="text-lg md:text-xl text-t2 font-body leading-relaxed pl-0 md:pl-10 border-l-0 md:border-l border-white/10">
              UMINATO is a maritime venture studio focused on researching, building, and scaling technologies, ventures, and partnerships that address the future of maritime systems.
            </p>
          </div>
        </div>
        
        {/* Corporate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: "01", title: "Discover & Validate", desc: "Identifying high-impact opportunities and proving their viability in the maritime sector." },
            { num: "02", title: "Build & Venture", desc: "Developing scalable technologies and forming strategic ventures to solve critical challenges." },
            { num: "03", title: "Scale & Sustain", desc: "Driving long-term growth and resilience through continuous innovation and partnerships." }
          ].map((item, i) => (
            <div key={i} className="group relative p-8 md:p-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sky-base/30 transition-all duration-300 hover:bg-white/[0.04]">
              <div className="flex justify-between items-start mb-16">
                <span className="font-display text-4xl font-light text-sky-base/30 group-hover:text-sky-base transition-colors duration-300">
                  {item.num}
                </span>
                <ArrowUpRight className="text-t3 group-hover:text-sky-base transition-all duration-300 w-6 h-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0" />
              </div>
              <h3 className="font-display text-xl font-bold text-t1 mb-4">{item.title}</h3>
              <p className="text-t3 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
