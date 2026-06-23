import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const inquiries = [
    "Research Collaborations",
    "Strategic Partnerships",
    "Venture Development",
    "Leadership Programs",
    "Speaking Opportunities"
  ];

  return (
    <>
      <Header />
      <main className="flex-grow w-full overflow-hidden bg-bg-void pt-24">
        
        {/* Contact Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1220px] mx-auto px-7 relative z-10 text-center">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-sky-base uppercase mb-6">Contact Us</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-t1 mb-8 max-w-4xl mx-auto leading-tight">
              Let's Build the Future of Maritime Systems Together
            </h1>
            <p className="text-xl text-t2 font-body max-w-2xl mx-auto leading-relaxed">
              We welcome conversations with innovators, researchers, governments, port authorities, investors, and ecosystem partners.
            </p>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="py-16 pb-32">
          <div className="max-w-[1220px] mx-auto px-7">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
              
              {/* Form Column */}
              <div className="lg:col-span-3 order-2 lg:order-1">
                <div className="bg-bg-card border border-bd-subtle p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  <h2 className="font-display text-2xl font-bold text-t1 mb-8">Send a Message</h2>
                  
                  <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-t3 uppercase tracking-wider">Full Name</label>
                        <input type="text" className="bg-bg-surface border border-bd-default rounded-md px-4 py-3 text-t1 font-body text-sm focus:outline-none focus:border-sky-base transition-colors" placeholder="Jane Doe" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-t3 uppercase tracking-wider">Organization</label>
                        <input type="text" className="bg-bg-surface border border-bd-default rounded-md px-4 py-3 text-t1 font-body text-sm focus:outline-none focus:border-sky-base transition-colors" placeholder="Maritime Port Authority" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-t3 uppercase tracking-wider">Email Address</label>
                      <input type="email" className="bg-bg-surface border border-bd-default rounded-md px-4 py-3 text-t1 font-body text-sm focus:outline-none focus:border-sky-base transition-colors" placeholder="jane@example.com" />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-t3 uppercase tracking-wider">Subject</label>
                      <select className="bg-bg-surface border border-bd-default rounded-md px-4 py-3 text-t1 font-body text-sm focus:outline-none focus:border-sky-base transition-colors appearance-none">
                        <option>General Inquiry</option>
                        {inquiries.map((item, idx) => <option key={idx}>{item}</option>)}
                      </select>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-t3 uppercase tracking-wider">Message</label>
                      <textarea rows={5} className="bg-bg-surface border border-bd-default rounded-md px-4 py-3 text-t1 font-body text-sm focus:outline-none focus:border-sky-base transition-colors resize-none" placeholder="Tell us about how we can collaborate..."></textarea>
                    </div>
                    
                    <button type="submit" className="bg-sky-base hover:bg-sky-light text-t-inv font-bold font-body py-4 rounded-md mt-4 transition-all shadow-[0_0_20px_rgba(74,184,232,0.15)] text-sm">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              
              {/* Info Column */}
              <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col gap-12">
                

                
                {/* Connect */}
                <div>
                  <h3 className="font-display text-xl font-bold text-t1 mb-6">Connect With Us</h3>
                  <p className="text-t2 font-body text-sm mb-6">Follow UMINATO for the latest updates and research.</p>
                  <div className="flex items-center gap-4">
                    {/* LinkedIn */}
                    <a href="#" className="w-12 h-12 bg-bg-card border border-bd-default rounded-md flex items-center justify-center text-t2 hover:bg-bg-raised hover:text-sky-base hover:border-sky-base transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    {/* YouTube */}
                    <a href="#" className="w-12 h-12 bg-bg-card border border-bd-default rounded-md flex items-center justify-center text-t2 hover:bg-bg-raised hover:text-sky-base hover:border-sky-base transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                    </a>
                    {/* Spotify */}
                    <a href="#" className="w-12 h-12 bg-bg-card border border-bd-default rounded-md flex items-center justify-center text-t2 hover:bg-bg-raised hover:text-sky-base hover:border-sky-base transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
                    </a>
                    {/* X (Twitter) */}
                    <a href="#" className="w-12 h-12 bg-bg-card border border-bd-default rounded-md flex items-center justify-center text-t2 hover:bg-bg-raised hover:text-sky-base hover:border-sky-base transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer hideCTA />
    </>
  );
}
