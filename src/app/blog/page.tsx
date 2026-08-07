import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const articles = [
    { title: "AI Trends in Maritime Crew Recruitment for 2027", date: "June 2026", category: "Talent & Workforce", href: "/blog/ai-crew-hiring-trends", image: "/assets/blog/crew-insight.png" },
    { title: "The Future of Autonomous Maritime Systems", date: "June 2026", category: "Autonomy", href: "/blog/future-autonomous-maritime", image: "/assets/blog/featured-insight.png" }
  ];

  return (
    <>
      <Header />
      <main className="flex-grow w-full overflow-hidden bg-bg-void pt-24">
        
        {/* Blog Hero */}
        <section className="py-24 relative overflow-hidden border-b border-bd-subtle">
          <div className="max-w-[1220px] mx-auto px-7 relative z-10 text-center">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-6">Blog</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-t1 mb-8">
              Maritime Insights
            </h1>
            <p className="text-xl text-t2 font-body max-w-3xl mx-auto leading-relaxed">
              Research, perspectives, and thought leadership on maritime transformation.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16">
          <div className="max-w-[1220px] mx-auto px-7">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-t3 uppercase mb-6">Featured Article</p>
            
            <Link href="/blog/future-autonomous-maritime" className="group bg-bg-card border border-bd-subtle rounded-2xl overflow-hidden hover:border-sky-base hover:shadow-[0_0_30px_rgba(74,184,232,0.1)] transition-all duration-500 cursor-pointer flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto bg-bg-raised relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-dim/20 to-transparent group-hover:scale-105 transition-transform duration-700"></div>
                <img src="/assets/blog/featured-insight.png" alt="Featured Article" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] px-2.5 py-1 bg-sky-base/10 border border-sky-base/20 rounded text-sky-base font-medium">Research</span>
                  <span className="text-xs text-t3 font-medium">June 12, 2026</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-t1 mb-6 group-hover:text-sky-base transition-colors duration-300 leading-tight">
                  The Future of Autonomous Maritime Systems
                </h2>
                <p className="text-lg text-t2 font-body leading-relaxed mb-8">
                  A deep dive into how physical AI, sensor fusion, and digital twins are moving ports and shipping lines closer to full operational autonomy.
                </p>
                <div className="flex items-center text-sky-base font-semibold text-sm">
                  Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 pb-32">
          <div className="max-w-[1220px] mx-auto px-7">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-t3 uppercase mb-6">Latest Posts</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, idx) => (
                <Link key={idx} href={article.href} className="group bg-bg-card border border-bd-subtle rounded-2xl overflow-hidden hover:border-sky-base hover:shadow-[0_0_20px_rgba(74,184,232,0.08)] transition-all duration-500 cursor-pointer flex flex-col">
                  <div className="h-60 bg-bg-raised relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-bg-surface to-transparent group-hover:opacity-50 transition-opacity z-10"></div>
                    <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] uppercase tracking-wider text-sky-base font-semibold">{article.category}</span>
                      <span className="w-1 h-1 rounded-full bg-bd-strong"></span>
                      <span className="text-[11px] text-t3">{article.date}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-t1 mb-4 group-hover:text-sky-base transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <div className="mt-auto flex items-center text-t2 font-medium text-xs">
                      Read more <span className="ml-1 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            

          </div>
        </section>

      </main>
      <Footer hideCTA />
    </>
  );
}
