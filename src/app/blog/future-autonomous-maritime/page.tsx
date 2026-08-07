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
  Anchor, 
  Cpu, 
  Eye, 
  Compass, 
  Shield, 
  Server, 
  Activity, 
  Check, 
  BookOpen,
  Waves
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
    const text = "The Future of Autonomous Maritime Systems";
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
          <div className="absolute top-[-100px] left-[10%] w-[500px] h-[500px] rounded-full bg-sky-dim/10 blur-[120px]" />
          <div className="absolute top-[200px] right-[10%] w-[450px] h-[450px] rounded-full bg-navy/15 blur-[130px]" />
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
                Insights
              </span>
              <span className="text-xs text-t3 font-medium">Published June 29, 2026</span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-t1 leading-[1.12] mb-6">
              The Future of Autonomous Maritime Systems
            </h1>

            <p className="text-lg md:text-xl text-t2 leading-relaxed max-w-4xl font-normal">
              How Physical AI, Sensor Fusion, and Digital Twins Are Shaping the Next Generation of Global Shipping.
            </p>

            {/* Author / Metadata bar */}
            <div className="flex flex-wrap items-center justify-between gap-6 mt-10 pt-8 border-t border-bd-subtle/60 text-xs text-t3">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-bg-raised border border-bd-default flex items-center justify-center text-sky-base">
                    <User size={14} />
                  </div>
                  <div>
                    <p className="font-semibold text-t2">UMINATO Research</p>
                    <p className="text-[10px] text-t3">Maritime Innovation Lab</p>
                  </div>
                </div>
                <div className="h-6 w-px bg-bd-subtle" />
                <div className="flex items-center gap-1.5">
                  <Clock size={13} />
                  <span>8 min read</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5">
                  <BookOpen size={13} />
                  <span>2,100 words</span>
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
                  <a href="#shift" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">The Shift Toward Autonomy</a>
                  <a href="#physical-ai" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">Physical AI</a>
                  <a href="#sensor-fusion" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">Sensor Fusion</a>
                  <a href="#digital-twins" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">Digital Twins</a>
                  <a href="#smart-ports" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">Smart Ports</a>
                  <a href="#challenges" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">Key Challenges</a>
                  <a href="#conclusion" className="hover:text-sky-base border-l-2 border-transparent pl-3 py-0.5 hover:border-sky-base transition-all font-medium">Looking Ahead</a>
                </nav>
              </div>
            </aside>

            {/* Right Column: Main Content */}
            <article className="lg:w-3/4 max-w-none text-[15px] md:text-[16px] text-t1/95 leading-relaxed flex flex-col gap-8 font-light">
              
              <p className="text-lg text-t2 leading-relaxed italic border-l-2 border-sky-base/60 pl-5 mb-2 font-normal">
                The maritime industry is at the forefront of a technological revolution. As global trade continues to expand, ports and shipping companies are embracing advanced technologies to improve efficiency, safety, and sustainability. Among the most transformative innovations are Physical AI, Sensor Fusion, and Digital Twins, which are enabling a new era of autonomous maritime operations.
              </p>

              {/* 1. The Shift Toward Maritime Autonomy */}
              <h2 id="shift" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                The Shift Toward Maritime Autonomy
              </h2>
              <p>
                Traditional maritime operations rely heavily on manual processes, human decision-making, and isolated systems. While effective, these methods can result in operational inefficiencies, higher costs, and increased risks.
              </p>
              <p>
                Today's maritime ecosystem is evolving toward intelligent, data-driven operations where vessels, ports, and logistics networks can sense, analyze, and respond to real-world conditions in real time. This transformation is laying the foundation for fully autonomous maritime systems.
              </p>

              {/* 2. Physical AI: Intelligence Beyond Software */}
              <h2 id="physical-ai" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                Physical AI: Intelligence Beyond Software
              </h2>
              <p>
                Physical AI combines artificial intelligence with real-world sensors, machines, and autonomous systems. Unlike conventional AI that operates purely in digital environments, Physical AI enables machines to understand and interact with their surroundings.
              </p>
              
              {/* Highlight Card */}
              <div className="bg-bg-card/50 border border-bd-subtle rounded-xl p-8 my-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-sky-base/10 opacity-30">
                  <Cpu size={120} />
                </div>
                <h4 className="font-display font-semibold text-sky-base text-sm mb-4 tracking-wider uppercase">In maritime environments, Physical AI powers:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Autonomous vessel navigation",
                    "Smart cargo handling systems",
                    "Automated port operations",
                    "Predictive maintenance solutions",
                    "Real-time operational decision-making"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check size={16} className="text-sky-base flex-shrink-0 mt-0.5" />
                      <span className="text-t2 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                By continuously learning from environmental and operational data, these systems improve safety, efficiency, and reliability across maritime operations.
              </p>

              {/* 3. Sensor Fusion: Building Complete Situational Awareness */}
              <h2 id="sensor-fusion" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                Sensor Fusion: Building Complete Situational Awareness
              </h2>
              <p>
                Autonomous systems depend on accurate environmental understanding. Sensor Fusion combines information from multiple data sources to create a unified and reliable operational picture.
              </p>

              {/* Grid of Technologies */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                {[
                  { name: "Radar Systems", icon: Activity, desc: "Long-range tracking and obstacle mapping." },
                  { name: "LiDAR Sensors", icon: Eye, desc: "High-precision 3D scanning of port infrastructure and shoreline." },
                  { name: "Sonar Systems", icon: Waves, desc: "Underwater depth profiling and obstacle detection." },
                  { name: "GPS & GNSS Tracking", icon: Compass, desc: "Precise global positioning and heading metrics." },
                  { name: "Industrial IoT Devices", icon: Server, desc: "Asset telemetry and operational machinery metrics." },
                  { name: "Cameras & Weather", icon: Anchor, desc: "Visual imagery and ambient environmental condition sensing." }
                ].map((tech, idx) => (
                  <div key={idx} className="bg-bg-surface/40 border border-bd-subtle/70 rounded-xl p-5 hover:border-bd-default hover:bg-bg-surface/75 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-sky-base/10 flex items-center justify-center text-sky-base mb-3.5">
                      {React.createElement(tech.icon, { size: 16 })}
                    </div>
                    <h4 className="font-display font-semibold text-t1 text-sm mb-1.5">{tech.name}</h4>
                    <p className="text-xs text-t2 leading-relaxed">{tech.desc}</p>
                  </div>
                ))}
              </div>

              <p className="font-medium text-t2 mt-2">
                By merging data from these sources, autonomous maritime systems can:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Detect obstacles more accurately",
                  "Navigate complex environments safely",
                  "Operate effectively in adverse weather conditions",
                  "Improve operational reliability and decision-making"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-bg-surface/20 border border-bd-subtle/40 rounded-lg px-4 py-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-base flex-shrink-0" />
                    <span className="text-xs text-t2 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* 4. Digital Twins: Virtual Models for Real-World Operations */}
              <h2 id="digital-twins" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                Digital Twins: Virtual Models for Real-World Operations
              </h2>
              <p>
                Digital Twin technology creates a real-time virtual replica of physical assets, systems, and processes.
                For maritime organizations, digital twins can model cargo ships, container terminals, port infrastructure, cranes and equipment, logistics networks, and energy systems.
              </p>
              
              <p>
                These virtual models continuously receive live operational data, enabling organizations to monitor performance, predict issues, and optimize operations.
              </p>

              {/* Benefits of Digital Twins */}
              <div className="my-6">
                <h4 className="font-display text-lg font-bold text-sky-base mb-5 uppercase tracking-wide text-xs">Benefits of Digital Twins</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { title: "Predictive Maintenance", desc: "Identify equipment issues before failures occur and reduce downtime." },
                    { title: "Operational Optimization", desc: "Test scenarios virtually to improve efficiency and throughput." },
                    { title: "Risk Management", desc: "Simulate emergency situations and operational disruptions safely." },
                    { title: "Sustainability", desc: "Reduce fuel consumption and emissions through intelligent optimization." }
                  ].map((benefit, idx) => (
                    <div key={idx} className="border border-bd-subtle rounded-xl p-6 bg-bg-deep/50 hover:bg-bg-deep transition-colors">
                      <h5 className="font-display font-semibold text-t1 text-sm mb-2">{benefit.title}</h5>
                      <p className="text-xs text-t2 leading-relaxed font-light">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Smart Ports and Autonomous Logistics */}
              <h2 id="smart-ports" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                Smart Ports and Autonomous Logistics
              </h2>
              <p>
                Modern ports are rapidly adopting automation technologies to handle increasing cargo volumes and operational complexity.
              </p>
              <p>
                Key innovations include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Autonomous Guided Vehicles (AGVs)",
                  "AI-Powered Container Tracking",
                  "Intelligent Crane Operations",
                  "Automated Gate Systems",
                  "Real-Time Operational Analytics"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 pl-4 py-2 border-l-2 border-bd-default">
                    <span className="text-xs text-t2 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p>
                Together, these technologies create connected and intelligent logistics ecosystems capable of operating with minimal human intervention while maintaining high levels of safety and efficiency.
              </p>

              {/* 6. Challenges on the Path to Full Autonomy */}
              <h2 id="challenges" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                Challenges on the Path to Full Autonomy
              </h2>
              <p>
                While significant progress has been made, several challenges remain:
              </p>

              <div className="flex flex-col gap-3 my-2">
                {[
                  { title: "Regulatory and Compliance Requirements", desc: "Adapting international maritime law and classification rules to accommodate unmanned vessels." },
                  { title: "Cybersecurity and Data Protection", desc: "Securing highly connected autonomous networks from external interception or disruption." },
                  { title: "Infrastructure Modernization", desc: "Upgrading existing ports and terminals to interface with digital platforms and autonomous machinery." },
                  { title: "Human-Machine Collaboration", desc: "Establishing safe workflows for human operators in onshore operations centers working with remote systems." },
                  { title: "Integration with Legacy Systems", desc: "Interfacing new AI-powered tools with traditional cargo tracking, routing, and telemetry databases." }
                ].map((challenge, idx) => (
                  <div key={idx} className="flex gap-4 p-4 border border-bd-subtle/50 rounded-xl bg-bg-surface/10 hover:border-bd-default transition-all">
                    <div className="w-6 h-6 rounded bg-bd-subtle flex-shrink-0 flex items-center justify-center text-t3 text-xs font-bold">{idx + 1}</div>
                    <div>
                      <h4 className="font-display font-semibold text-t1 text-sm mb-1">{challenge.title}</h4>
                      <p className="text-xs text-t2 leading-relaxed">{challenge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Successfully addressing these challenges will be essential for widespread adoption of autonomous maritime technologies.
              </p>

              {/* 7. Looking Ahead */}
              <h2 id="conclusion" className="font-display text-2xl md:text-3xl font-bold text-t1 mt-6 pt-6 border-t border-bd-subtle/50 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-base rounded-full flex-shrink-0" />
                Looking Ahead
              </h2>
              <p>
                The convergence of Physical AI, Sensor Fusion, and Digital Twin technologies is accelerating the transformation of the maritime industry. Ports and shipping operators are moving toward a future where intelligent systems can optimize operations, reduce costs, enhance safety, and improve sustainability.
              </p>
              <p>
                As autonomy becomes a strategic priority, organizations that invest in these technologies today will be better positioned to lead the next generation of global maritime innovation.
              </p>

              {/* Key Takeaway box */}
              <div className="mt-8 border border-sky-base/30 rounded-xl p-8 bg-sky-base/5 relative overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-sky-base" />
                <h4 className="font-display font-bold text-sky-base text-xs uppercase tracking-wider mb-2">Key Takeaway</h4>
                <p className="text-t1 font-normal leading-relaxed text-[15px] italic m-0">
                  "Autonomous maritime systems are no longer a distant vision. Powered by AI, real-time sensing, and digital intelligence, the future of shipping is becoming smarter, safer, and more connected than ever before."
                </p>
              </div>

              {/* Tags Section */}
              <div className="mt-12 pt-8 border-t border-bd-subtle/50 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-t3 mr-2">TAGS:</span>
                {[
                  "Maritime Autonomy", "Physical AI", "Sensor Fusion", "Digital Twins", 
                  "Smart Ports", "Autonomous Systems", "Logistics Innovation", 
                  "Industrial AI", "Autonomous Infrastructure", "Future of Shipping"
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
              Get the latest insights delivered weekly
            </h3>
            <p className="text-sm text-t2 font-body mb-8 max-w-xl mx-auto leading-relaxed">
              Join leading maritime executives and technology experts who receive our research and perspectives on shipping autonomy.
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
