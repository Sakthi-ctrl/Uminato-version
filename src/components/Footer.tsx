// Icons
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const YoutubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>;
const SpotifyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 11.9c2.3-.6 4.8-.5 7 .3" /><path d="M7 14.5c2-.5 4.3-.4 6.2.3" /><path d="M9.5 9.3c2.7-.8 5.6-.6 8.2.4" /></svg>;
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ hideCTA = false }: { hideCTA?: boolean }) {
  return (
    <footer id="contact" className={`bg-bg-void ${hideCTA ? 'pt-16' : 'pt-24'} pb-12 border-t border-bd-subtle relative z-30`}>
      <div className="max-w-[1220px] mx-auto px-7">
        {!hideCTA && (
          <>
            <div className="flex flex-col items-center text-center mb-20">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-t1 mb-8 max-w-3xl leading-tight">
                Let's Build the Future of Maritime Systems Together.
              </h2>
              <button className="bg-sky-base hover:bg-sky-light text-t-inv font-medium py-3 px-8 rounded-md transition-all shadow-[0_0_28px_rgba(74,184,232,0.22)] text-[15px] mb-12">
                Get in Touch
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="text-[11px] font-bold tracking-[0.15em] text-t3 uppercase sm:mr-2">Follow Uminato:</span>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-bg-card border border-bd-default rounded-md flex items-center justify-center text-t2 hover:bg-bg-raised hover:text-sky-base hover:border-sky-base transition-all"><LinkedinIcon /></a>
                  <a href="#" aria-label="Instagram" className="w-9 h-9 bg-bg-card border border-bd-default rounded-md flex items-center justify-center text-t2 hover:bg-bg-raised hover:text-sky-base hover:border-sky-base transition-all"><InstagramIcon /></a>
                  <a href="#" aria-label="Facebook" className="w-9 h-9 bg-bg-card border border-bd-default rounded-md flex items-center justify-center text-t2 hover:bg-bg-raised hover:text-sky-base hover:border-sky-base transition-all"><FacebookIcon /></a>
                  <a href="#" aria-label="YouTube" className="w-9 h-9 bg-bg-card border border-bd-default rounded-md flex items-center justify-center text-t2 hover:bg-bg-raised hover:text-sky-base hover:border-sky-base transition-all"><YoutubeIcon /></a>
                  <a href="#" aria-label="X (Twitter)" className="w-9 h-9 bg-bg-card border border-bd-default rounded-md flex items-center justify-center text-t2 hover:bg-bg-raised hover:text-sky-base hover:border-sky-base transition-all"><TwitterIcon /></a>
                  <a href="#" aria-label="Spotify" className="w-9 h-9 bg-bg-card border border-bd-default rounded-md flex items-center justify-center text-t2 hover:bg-bg-raised hover:text-sky-base hover:border-sky-base transition-all"><SpotifyIcon /></a>
                </div>
              </div>
            </div>

            <div className="h-px bg-bd-subtle my-12 w-full"></div>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="relative w-36 h-12 mb-4">
              <Image
                src="/logo.png"
                alt="UMINATO Logo"
                fill
                sizes="144px"
                className="object-contain object-left"
              />
            </div>
            <p className="font-display text-[10px] font-bold tracking-[0.25em] text-sky-base uppercase mb-6">Maritime Innovation &amp; Venture Studio</p>
            <p className="text-[13px] text-t2 leading-relaxed mb-6 pe-4">Building Maritime Systems Green, Autonomous, Resilient, and Future-Ready Maritime Experts.</p>
            <div className="flex gap-3">
              <span className="text-[10px] uppercase font-semibold text-t2 px-3 py-1.5 rounded-sm bg-bg-card">Discover</span>
              <span className="text-[10px] uppercase font-semibold text-t2 px-3 py-1.5 rounded-sm bg-bg-card">Build</span>
              <span className="text-[10px] uppercase font-semibold text-t2 px-3 py-1.5 rounded-sm bg-bg-card">Scale</span>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8 text-[13px]">
            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold text-t1 uppercase tracking-widest mb-1">Studio</h4>
              <Link href="/about" className="text-t2 hover:text-sky-base transition-colors">About Us</Link>
              <Link href="/projects" className="text-t2 hover:text-sky-base transition-colors">Featured Projects</Link>
              <Link href="/careers" className="text-t2 hover:text-sky-base transition-colors">Careers</Link>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold text-t1 uppercase tracking-widest mb-1">Insights</h4>
              <Link href="/blog" className="text-t2 hover:text-sky-base transition-colors">Latest Articles</Link>
              <Link href="/podcast" className="text-t2 hover:text-sky-base transition-colors">The UMINATO Podcast</Link>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-[11px] font-bold text-t1 uppercase tracking-widest mb-1">Connect</h4>
              <Link href="/contact" className="text-t2 hover:text-sky-base transition-colors">Contact Us</Link>
              <a href="#" className="text-sky-base hover:text-sky-light transition-colors flex items-center gap-2 font-medium">
                Join Community <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>


          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-bd-subtle gap-4 text-[11px] text-t3">
          <div>&copy; {new Date().getFullYear()} UMINATO. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-t1 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-t1 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-t1 transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
