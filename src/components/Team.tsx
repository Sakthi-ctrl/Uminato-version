export default function Team() {
  return (
    <section id="team" className="py-24 bg-bg-deep relative z-30">
      <div className="max-w-[1220px] mx-auto px-7">
        <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-2 text-center">Our People</p>
        <h2 className="font-display font-bold text-t1 mb-16 text-center" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Team &amp; Partners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Founding Team */}
          <div className="bg-bg-card border border-bd-subtle rounded-2xl p-8 hover:border-bd-default transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-sky-glow text-sky-base rounded-lg flex items-center justify-center mb-6 text-xl">👥</div>
            <h3 className="font-display text-[18px] font-bold text-t1 mb-3">Founding Team</h3>
            <p className="text-[13.5px] text-t2 leading-[1.65] mb-6">A multidisciplinary team bringing together experience across maritime, technology, policy, venture building, and transformation.</p>
            <a href="#" className="text-sky-base text-[13px] font-medium hover:text-sky-light inline-flex items-center gap-2 min-h-[44px]">View Profiles &rarr;</a>
          </div>

          {/* Advisors */}
          <div className="bg-bg-card border border-bd-subtle rounded-2xl p-8 hover:border-bd-default transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-sky-glow text-sky-base rounded-lg flex items-center justify-center mb-6 text-xl">🎓</div>
            <h3 className="font-display text-[18px] font-bold text-t1 mb-3">Advisors</h3>
            <p className="text-[13.5px] text-t2 leading-[1.65] mb-6">Industry, academic, and policy leaders providing strategic guidance across maritime transformation, sustainability, and innovation.</p>
            <a href="#" className="text-sky-base text-[13px] font-medium hover:text-sky-light inline-flex items-center gap-2 min-h-[44px]">View Profiles &rarr;</a>
          </div>

          {/* Partners */}
          <div className="bg-bg-card border border-bd-subtle rounded-2xl p-8 hover:border-bd-default transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-sky-glow text-sky-base rounded-lg flex items-center justify-center mb-6 text-xl">🤝</div>
            <h3 className="font-display text-[18px] font-bold text-t1 mb-3">Partners</h3>
            <p className="text-[13.5px] text-t2 leading-[1.65] mb-6">Collaborating with governments, port authorities, shipping companies, research institutions, development agencies, technology providers, investors, and ecosystem partners.</p>
            <a href="#" className="text-sky-base text-[13px] font-medium hover:text-sky-light inline-flex items-center gap-2 min-h-[44px]">View Partners &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}
