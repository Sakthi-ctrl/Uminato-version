"use client";
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Share2, 
  TrendingUp, 
  Cpu, 
  Users, 
  Shield, 
  Award, 
  Activity, 
  Check, 
  BookOpen, 
  Star
} from 'lucide-react';

const LinkedinIcon = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
);

const CopyIcon = ({ size = 24, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

export default function BlogPostPage() {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "AI Trends in Maritime Crew Recruitment for 2027";
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <>
      <Header />
      <main className="flex-grow w-full bg-bg-void pt-[70px] min-h-screen text-t1 font-body relative">
        
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[600px] pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-100px] right-[10%] w-[500px] h-[500px] rounded-full bg-sky-dim/10 blur-[120px]" />
          <div className="absolute top-[200px] left-[10%] w-[450px] h-[450px] rounded-full bg-navy/15 blur-[130px]" />
        </div>

        {/* Article Header */}
        <section className="relative z-10 pt-16 pb-12 border-b border-bd-subtle bg-bg-deep/40 backdrop-blur-[2px]">
          <div className="max-w-[1100px] mx-auto px-7">
            <Link 
              href="/#insights" 
              className="inline-flex items-center gap-2 text-xs font-semibold text-sky-base hover:text-sky-light transition-colors mb-8 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              BACK TO INSIGHTS
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] px-2.5 py-1 bg-sky-base/10 border border-sky-base/20 rounded text-sky-base font-bold uppercase tracking-wider">
                Talent & Workforce
              </span>
              <span className="text-xs text-t3 font-medium">Published June 29, 2026</span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-t1 leading-[1.12] mb-6">
              AI Trends in Maritime Crew Recruitment for 2027
            </h1>

            <p className="text-lg md:text-xl text-t2 leading-relaxed max-w-4xl font-normal">
              How Predictive Analytics and Skills Intelligence Are Reshaping the Future of Global Maritime Talent Sourcing and Development.
            </p>

            {/* Author / Metadata bar */}
            <div className="flex flex-wrap items-center justify-between gap-6 mt-10 pt-8 border-t border-bd-subtle/60 text-xs text-t3">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-bg-raised border border-bd-default flex items-center justify-center text-sky-base">
                    <User size={14} />
                  </div>
                  <div>
                    <p className="font-semibold text-t2">UMINATO Workforce Research</p>
                    <p className="text-[10px] text-t3">Talent Intelligence Division</p>
                  </div>
                </div>
                <div className="h-6 w-px bg-bd-subtle" />
                <div className="flex items-center gap-1.5">
                  <Clock size={13} />
                  <span>7 min read</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5">
                  <BookOpen size={13} />
                  <span>1,800 words</span>
                </div>
              </div>

              {/* Share buttons */}
              <div className="flex items-center gap-2">
                <span className="font-medium text-[11px] mr-1">SHARE:</span>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="w-8 h-8 rounded-md bg-bg-surface hover:bg-bg-raised border border-bd-subtle flex items-center justify-center text-t2 hover:text-sky-base hover:border-sky-base/50 transition-all cursor-pointer"
                  title="Share on Twitter"
                >
                  <TwitterIcon size={13} />
                </button>
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="w-8 h-8 rounded-md bg-bg-surface hover:bg-bg-raised border border-bd-subtle flex items-center justify-center text-t2 hover:text-sky-base hover:border-sky-base/50 transition-all cursor-pointer"
                  title="Share on LinkedIn"
                >
                  <LinkedinIcon size={13} />
                </button>
                <button 
                  onClick={() => handleShare('copy')}
                  className="w-8 h-8 rounded-md bg-bg-surface hover:bg-bg-raised border border-bd-subtle flex items-center justify-center text-t2 hover:text-sky-base hover:border-sky-base/50 transition-all cursor-pointer"
                  title="Copy link"
                >
                  <CopyIcon size={13} />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Article Body */}
        <section className="relative z-10 py-16 pb-32">
          <div className="max-w-[1100px] mx-auto px-7 flex flex-col lg:flex-row gap-12">
            
            {/* Left Column: Sidebar / Table of Contents (Sticky) */}
            <aside className="lg:w-1/4 flex-shrink-0">
              <div className="sticky top-[110px] bg-bg-deep/40 border border-bd-subtle rounded-xl p-6 backdrop-blur-[2px]">
                <p className="font-display text-[10px] font-bold tracking-[0.15em] text-t3 uppercase mb-4">Table of Contents</p>
                <nav className="flex flex-col gap-3.5 text-xs text-t2">
                  <a href="#growing-challenge" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">The Talent Challenge</a>
                  <a href="#predictive-analytics" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">Predictive Analytics</a>
                  <a href="#skills-intelligence" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">Skills Intelligence</a>
                  <a href="#talent-ecosystem" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">Connected Ecosystems</a>
                  <a href="#future-skills" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">Future Skillsets</a>
                  <a href="#conclusion" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">Conclusion</a>
                </nav>
              </div>
            </aside>

            {/* Right Column: Main Content */}
            <article className="lg:w-3/4 max-w-none text-[15px] md:text-[16px] text-t1/95 leading-relaxed flex flex-col gap-8 font-light">
              
              <p className="text-lg text-t2 leading-relaxed italic border-l-2 border-sky-base/60 pl-5 mb-2 font-normal">
                The maritime industry is experiencing a significant workforce transformation driven by artificial intelligence, automation, and data-driven decision-making. As global shipping operations become increasingly digital, organizations are adopting advanced AI technologies to identify, recruit, train, and retain highly skilled maritime professionals.
              </p>
              
              <p>
                By 2027, AI-powered recruitment platforms are expected to become a core component of maritime workforce management, helping shipping companies address talent shortages, improve hiring accuracy, and build future-ready crews.
              </p>

              {/* 1. The Growing Challenge of Maritime Talent Acquisition */}
              <h2 id="growing-challenge" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                The Growing Challenge of Maritime Talent Acquisition
              </h2>
              <p>
                The global maritime sector faces several workforce challenges that traditional hiring workflows struggle to resolve. Recruitment in this sector is highly regulated, safety-critical, and requires navigating complex cross-border logistics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                {[
                  { title: "Aging Demographics", desc: "A significant percentage of senior officers are reaching retirement age, leaving leadership gaps." },
                  { title: "New Digital Skills", desc: "Vessels increasingly feature remote automation, advanced telematics, and eco-efficiency software." },
                  { title: "Qualified Seafarer Shortages", desc: "Increasing difficulty in retaining crew members due to long sea hours and lifestyle changes." },
                  { title: "Compliance Complexities", desc: "Aligning with various international maritime rules, flag-state requirements, and certifications." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-bg-surface/30 border border-bd-subtle rounded-xl p-5">
                    <h4 className="font-display font-semibold text-t1 text-sm mb-1.5">{item.title}</h4>
                    <p className="text-xs text-t2 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p>
                Traditional recruitment methods often struggle to match candidates with rapidly evolving job requirements. This has created the need for intelligent talent acquisition solutions powered by AI.
              </p>

              {/* 2. Predictive Analytics: Smarter Hiring Decisions */}
              <h2 id="predictive-analytics" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                Predictive Analytics: Smarter Hiring Decisions
              </h2>
              <p>
                Predictive analytics enables maritime organizations to analyze historical workforce data and forecast future talent needs. Instead of reacting to crew shortages, operators can use data models to hire candidates in anticipation of vessel movements and dry-dock cycles.
              </p>
              
              <p className="font-medium text-t2">
                AI recruitment systems can evaluate and cross-reference:
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Candidate qualifications",
                  "Career progression patterns",
                  "Certification requirements",
                  "Training history",
                  "Performance indicators",
                  "Workforce demand forecasts"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-bg-surface/20 border border-bd-subtle/50 rounded-lg px-4 py-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-base flex-shrink-0" />
                    <span className="text-xs text-t2 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlight benefits card */}
              <div className="bg-bg-card/50 border border-bd-subtle rounded-xl p-8 my-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-sky-base/10 opacity-30">
                  <TrendingUp size={120} />
                </div>
                <h4 className="font-display font-semibold text-sky-base text-sm mb-4 tracking-wider uppercase">Key Benefits of Predictive Hiring:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Faster recruitment cycles & onboarding",
                    "Significantly improved candidate-vessel matching",
                    "Reduced operational and travel expenses in recruitment",
                    "Better long-term workforce capability forecasting",
                    "Enhanced officer retention and career longevity strategies"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check size={16} className="text-sky-base flex-shrink-0 mt-0.5" />
                      <span className="text-t2 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Skills Intelligence and Workforce Optimization */}
              <h2 id="skills-intelligence" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                Skills Intelligence and Workforce Optimization
              </h2>
              <p>
                Modern AI recruitment platforms go beyond resumes and static certifications. Skills Intelligence uses machine learning to understand workforce capabilities and identify skill gaps across organizations.
              </p>

              <div className="flex flex-col gap-4 my-4">
                {[
                  { 
                    title: "Skills Mapping", 
                    icon: Users,
                    desc: "AI creates detailed competency profiles for maritime professionals, helping organizations understand workforce strengths and development opportunities." 
                  },
                  { 
                    title: "Career Path Recommendations", 
                    icon: Award,
                    desc: "Employees receive personalized training and certification recommendations aligned with future industry demands and ship-automation upgrades." 
                  },
                  { 
                    title: "Succession Planning", 
                    icon: Star,
                    desc: "Organizations can proactively identify future leaders, deck officers, and engineers, resolving critical workforce gaps before they impact operations." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 p-6 border border-bd-subtle/70 rounded-xl bg-bg-surface/10 hover:border-bd-default hover:bg-bg-surface/20 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-sky-base/10 flex items-center justify-center text-sky-base flex-shrink-0">
                      {React.createElement(item.icon, { size: 18 })}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-t1 text-sm mb-1.5">{item.title}</h4>
                      <p className="text-xs text-t2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 4. AI-Powered Talent Ecosystems */}
              <h2 id="talent-ecosystem" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                AI-Powered Talent Ecosystems
              </h2>
              <p>
                The maritime workforce of 2027 will be supported by connected talent ecosystems that integrate recruitment, crew deployment, and active training databases.
              </p>
              
              <p>
                Rather than treating recruitment as an isolated department, ship management companies are integrating:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Talent Recruitment Platforms",
                  "Training & Simulator Management",
                  "Workforce Data Analytics",
                  "STCW Compliance Management",
                  "Flag-State Certification Tracking",
                  "Continuous Learning Programs"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 pl-4 py-2.5 border-l-2 border-bd-default bg-bg-deep/30">
                    <span className="text-xs text-t2 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p>
                These systems provide real-time visibility into workforce readiness while ensuring regulatory compliance and operational excellence.
              </p>

              {/* 5. The Future of Maritime Workforce Management */}
              <h2 id="future-skills" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                The Future of Maritime Workforce Management
              </h2>
              <p>
                As autonomous vessels, smart ports, and digital shipping operations become more common, demand for technology-focused maritime talent will continue to increase.
              </p>
              <p>
                Future maritime professionals will require expertise in fields that did not exist in traditional naval architectures:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                {[
                  { title: "AI and Automation Systems", desc: "Understanding algorithmic controls on ships." },
                  { title: "Autonomous Operations", desc: "Managing remote shore-control centers and navigation inputs." },
                  { title: "Cybersecurity", desc: "Protecting ship-to-shore telemetry from threats." },
                  { title: "Data Analytics & Telemetry", desc: "Evaluating ship engine logs and fuel consumption stats." },
                  { title: "Digital Twin Technologies", desc: "Interfacing physical equipment with virtual representations." },
                  { title: "Remote Fleet Management", desc: "Coordinating logistics paths across automated fleets." }
                ].map((skill, idx) => (
                  <div key={idx} className="border border-bd-subtle rounded-xl p-5 bg-bg-deep/50 hover:bg-bg-deep transition-colors">
                    <h5 className="font-display font-semibold text-t1 text-sm mb-1">{skill.title}</h5>
                    <p className="text-xs text-t2 leading-relaxed font-light">{skill.desc}</p>
                  </div>
                ))}
              </div>

              <p>
                Organizations that leverage AI-driven recruitment and workforce intelligence today will be better positioned to attract and retain the talent needed for tomorrow's maritime industry.
              </p>

              {/* 6. Conclusion */}
              <h2 id="conclusion" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                Conclusion
              </h2>
              <p>
                AI is redefining maritime crew recruitment by enabling smarter hiring decisions, workforce optimization, and skills-based talent management. Through predictive analytics and skills intelligence, shipping companies can build resilient, future-ready teams capable of navigating an increasingly autonomous and technology-driven maritime landscape.
              </p>
              <p>
                As the industry moves toward 2027 and beyond, AI-powered workforce strategies will become a competitive advantage for organizations seeking operational excellence and sustainable growth.
              </p>

              {/* Key Takeaway box */}
              <div className="mt-8 border border-sky-base/30 rounded-xl p-8 bg-sky-base/5 relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-sky-base" />
                <h4 className="font-display font-bold text-sky-base text-xs uppercase tracking-wider mb-2">Key Takeaway</h4>
                <p className="text-t1 font-normal leading-relaxed text-[15px] italic m-0">
                  "AI is redefining maritime crew recruitment by enabling smarter hiring decisions, workforce optimization, and skills-based talent management. Shipping companies that adapt today will navigate the upcoming digital wave with confidence."
                </p>
              </div>

              {/* Tags Section */}
              <div className="mt-12 pt-8 border-t border-bd-subtle/50 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-t3 mr-2">TAGS:</span>
                {[
                  "AI Recruitment", "Maritime Workforce", "Predictive Analytics", "Skills Intelligence", 
                  "Crew Management", "Maritime Technology", "Future of Work", "Talent Acquisition", 
                  "Autonomous Shipping", "Workforce Transformation"
                ].map((tag, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 bg-bg-surface hover:bg-bg-raised border border-bd-subtle rounded-full text-t2 transition-all cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>

            </article>

          </div>
        </section>

        {/* Subscribe banner */}
        <section className="py-20 border-t border-bd-subtle bg-bg-deep/40 relative overflow-hidden">
          <div className="max-w-[760px] mx-auto px-7 text-center relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-t1 mb-4">
              Stay ahead of maritime workforce trends
            </h3>
            <p className="text-sm text-t2 font-body mb-8 max-w-xl mx-auto leading-relaxed">
              Join leading maritime executives and technology experts who receive our research and perspectives on crew recruitment automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your corporate email address" 
                className="bg-bg-card border border-bd-default rounded-md px-4 py-3 font-body text-sm text-t1 outline-none focus:border-sky-base flex-grow" 
              />
              <button className="bg-sky-base text-t-inv px-6 py-3 rounded-md font-body font-semibold text-sm hover:bg-sky-light transition-all flex-shrink-0 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer hideCTA />
    </>
  );
}
