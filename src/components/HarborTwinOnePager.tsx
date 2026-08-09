"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Anchor,
  Cpu,
  Eye,
  Leaf,
  Users,
  Layers,
  Bot,
  Database,
  ArrowRight,
  CheckCircle2,
  Clock,
  ChevronRight,
  Download,
  Sparkles,
  ShieldCheck,
  Activity,
  Sliders,
  Building2,
  Send,
  X,
  FileText,
  Workflow,
  Zap,
  TrendingUp,
  BarChart3,
  Server
} from 'lucide-react';

const CAPABILITIES = [
  {
    id: "ops",
    icon: Anchor,
    title: "Port & Terminal Operations",
    badge: "Operational Intelligence",
    description: "Real-time vessel, berth, yard, gate, cargo-flow and integrated operational intelligence for max throughput.",
    highlights: ["Vessel & Berth Tracking", "Yard Flow Optimization", "Automated Gate Operations", "Cargo Bottleneck Detection"],
    color: "from-blue-500/20 to-sky-500/10",
    border: "border-blue-500/30"
  },
  {
    id: "asset",
    icon: Cpu,
    title: "Asset Reliability & Predictive Maintenance",
    badge: "Predictive AI",
    description: "Condition monitoring, remaining useful life (RUL) estimation, and AI-assisted RCA/CAPA for critical equipment.",
    highlights: ["Condition Monitoring", "RUL Estimation", "AI-assisted RCA/CAPA", "Downtime Reduction"],
    color: "from-indigo-500/20 to-purple-500/10",
    border: "border-indigo-500/30"
  },
  {
    id: "vision",
    icon: Eye,
    title: "AI Vision & CCTV Analytics",
    badge: "Computer Vision",
    description: "Next-gen CCTV analytics for real-time safety compliance, yard congestion monitoring, productivity, and security.",
    highlights: ["PPE & Safety Detection", "Yard & Gate Congestion", "Equipment Utilization", "Perimeter & Area Security"],
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30"
  },
  {
    id: "sustainability",
    icon: Leaf,
    title: "Sustainability & Decarbonization",
    badge: "Green Port Tech",
    description: "Energy management, fuel usage tracking, emissions intelligence, shore power integration, and decarbonization paths.",
    highlights: ["Emissions Benchmarking", "Shore Power Integration", "Fuel Optimization", "Decarbonization Reporting"],
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30"
  },
  {
    id: "workforce",
    icon: Users,
    title: "Workforce Intelligence",
    badge: "Human Capital AI",
    description: "AI-assisted recruitment, automated video screening, shift planning, safety training, and digital work instructions.",
    highlights: ["AI Video Screening", "Dynamic Shift Planning", "Digital Work Instructions", "Safety & Training Matrix"],
    color: "from-violet-500/20 to-indigo-500/10",
    border: "border-violet-500/30"
  },
  {
    id: "digitaltwin",
    icon: Layers,
    title: "Digital Twin & Planning",
    badge: "3D Visualization",
    description: "Interactive operational visualization, dynamic simulation, scenario planning, and CAPEX investment optimization.",
    highlights: ["Interactive 3D Visualizer", "Scenario Simulation", "CAPEX Optimization", "Capacity Bottleneck Modeling"],
    color: "from-sky-500/20 to-blue-600/10",
    border: "border-sky-500/30"
  },
  {
    id: "genai",
    icon: Bot,
    title: "GenAI & Agentic AI",
    badge: "Autonomous Agents",
    description: "Role-based assistants, automated reporting, intelligent recommendations, knowledge access, and workflow automation.",
    highlights: ["Executive Assistant Agents", "Automated Ops Reporting", "Instant Knowledge Query", "Workflow Automation"],
    color: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/30"
  },
  {
    id: "integration",
    icon: Database,
    title: "Integration & Data Engine",
    badge: "Universal Interop",
    description: "Seamlessly connects existing TOS, PCS, ERP, CMMS, GIS, SCADA, IoT sensors, and third-party partner technologies.",
    highlights: ["TOS & PCS Integration", "SCADA & IoT Ingestion", "ERP & CMMS Connectors", "OEM Neutral Data Fabric"],
    color: "from-teal-500/20 to-cyan-500/10",
    border: "border-teal-500/30"
  }
];

const ENGAGEMENT_STEPS = [
  { step: "01", name: "Discover", desc: "Define operational value stream & baseline key pain points." },
  { step: "02", name: "Select", desc: "Identify pre-built capabilities & accelerator modules." },
  { step: "03", name: "Configure", desc: "Tailor platform business logic to terminal specifics." },
  { step: "04", name: "Integrate", desc: "Connect TOS, SCADA, IoT & legacy enterprise data sources." },
  { step: "05", name: "Develop", desc: "Build site-specific custom workflows & agentic bots." },
  { step: "06", name: "Validate", desc: "Execute 8–16 week PoV to quantify ROI & adoption." },
  { step: "07", name: "Scale", desc: "Progressively deploy across additional berths & facilities." }
];

const WHY_HARBORTWIN = [
  {
    title: "Leverages Proven Capabilities",
    desc: "Avoid building from scratch by starting with pre-tested accelerator components and pre-configured maritime domain modules.",
    icon: Zap
  },
  {
    title: "Reduces Implementation Risk",
    desc: "Modular architecture ensures seamless integration with legacy systems without interrupting live port operations.",
    icon: ShieldCheck
  },
  {
    title: "Accelerates Proof of Value",
    desc: "Tangible ROI and operational benefit validation in 8–16 weeks instead of multi-year software development cycles.",
    icon: TrendingUp
  },
  {
    title: "OEM-Neutral Architecture",
    desc: "Avoid single-vendor lock-in. Integrates existing TOS, SCADA, IoT, and multi-vendor hardware equipment effortlessly.",
    icon: Workflow
  },
  {
    title: "Scales Progressively",
    desc: "Modular expansion path allows terminals to scale function-by-function, asset-by-asset, and site-by-site on demand.",
    icon: BarChart3
  }
];

const TIMELINE_PHASES = [
  {
    phase: "Phase 1",
    duration: "2 – 3 Weeks",
    title: "Discovery & Value Definition",
    details: ["Operational mapping & value stream definition", "Legacy system readiness & data assessment", "Target KPI & ROI baseline alignment"]
  },
  {
    phase: "Phase 2",
    duration: "8 – 16 Weeks",
    title: "Proof of Value (PoV) Pilot",
    details: ["Integration of core value stream (e.g., Yard + Gate + Maintenance)", "Deployment of pre-built AI modules & analytics", "Operational user testing & feedback loops"]
  },
  {
    phase: "Phase 3",
    duration: "Ongoing",
    title: "Validation & Hardening",
    details: ["Validation of financial, operational, and adoption outcomes", "Enterprise security hardening & compliance verification", "Deployment automation & SLA setup"]
  },
  {
    phase: "Phase 4",
    duration: "Scale Phase",
    title: "Progressive Scaling",
    details: ["Expansion to additional equipment & berths", "Rollout to sister terminals and regional port sites", "Continuous GenAI model tuning & enhancement"]
  }
];

export default function HarborTwinOnePager() {
  const [activeTab, setActiveTab] = useState<'overview' | 'capabilities' | 'engagement' | 'why' | 'timeline'>('overview');
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="w-full bg-bg-void text-t1 min-h-screen pt-24 pb-20 selection:bg-sky-base selection:text-t-inv">
      
      {/* ── Top Executive Banner & Action Header ── */}
      <div className="max-w-[1220px] mx-auto px-4 md:px-7 mb-8">
        <div className="bg-gradient-to-r from-bg-card via-bg-surface to-bg-card border border-bd-strong/40 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-base/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-sky-base/10 border border-sky-base/30 text-sky-base text-[11px] font-mono uppercase tracking-widest rounded-full flex items-center gap-1.5 font-semibold">
                  <Sparkles size={13} className="text-sky-base animate-pulse" />
                  Executive Briefing
                </span>
                <span className="text-t3 text-xs font-mono">Document Ref: HTWIN-2026-V1</span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-t1 mb-2">
                HARBORTWIN
              </h1>
              <p className="text-sky-base font-display text-sm md:text-base font-semibold tracking-wide uppercase">
                UMINATO MARITIME GROUP &bull; MARITIME AI & DIGITAL INTELLIGENCE SOLUTIONS
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 print:hidden">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-sky-base text-t-inv hover:bg-sky-light rounded-lg text-xs font-bold transition-all shadow-[0_0_20px_rgba(74,184,232,0.3)] hover:shadow-[0_0_30px_rgba(74,184,232,0.5)]"
              >
                <Send size={15} />
                <span>Schedule Discovery</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Executive Content Area ── */}
      <div className="max-w-[1220px] mx-auto px-4 md:px-7">
        
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 border-b border-bd-subtle pb-3 mb-10 no-scrollbar print:hidden">
          {[
            { id: 'overview', label: 'Executive Overview' },
            { id: 'capabilities', label: '8 Capability Areas' },
            { id: 'engagement', label: '7-Step Engagement Flow' },
            { id: 'why', label: 'Why HarborTwin' },
            { id: 'timeline', label: 'Engagement Timeline' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-sky-base text-t-inv shadow-[0_0_15px_rgba(74,184,232,0.3)]'
                  : 'bg-bg-card/60 text-t2 hover:text-t1 hover:bg-bg-raised border border-bd-subtle'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Section 1: Executive Overview ── */}
        <section className={`mb-16 ${activeTab === 'overview' ? 'block' : 'hidden print:block'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-8 bg-bg-card/70 border border-bd-subtle rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-sky-base/5 to-transparent pointer-events-none" />
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="text-sky-base" size={20} />
                  <h2 className="text-xs font-mono uppercase tracking-widest text-sky-base font-bold">
                    Platform Architecture Overview
                  </h2>
                </div>
                <p className="text-xl md:text-2xl font-display font-medium text-t1 leading-relaxed mb-6">
                  Modular technology platform tailored specifically for the modern port and terminal value chain.
                </p>
                <p className="text-t2 font-body text-base leading-relaxed mb-6">
                  HarborTwin brings together pre-built capabilities, proven technology components, specialist startups, and OEM partner solutions — then configures, integrates, and develops them around each customer’s specific operational requirements.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-bd-subtle">
                <div className="bg-bg-deep p-3.5 rounded-xl border border-bd-subtle/80">
                  <p className="text-2xl font-bold font-display text-sky-base">8+</p>
                  <p className="text-xs text-t2">Core AI Domains</p>
                </div>
                <div className="bg-bg-deep p-3.5 rounded-xl border border-bd-subtle/80">
                  <p className="text-2xl font-bold font-display text-sky-base">7</p>
                  <p className="text-xs text-t2">Step Deployment</p>
                </div>
                <div className="bg-bg-deep p-3.5 rounded-xl border border-bd-subtle/80">
                  <p className="text-2xl font-bold font-display text-sky-base">8-16w</p>
                  <p className="text-xs text-t2">Proof of Value</p>
                </div>
                <div className="bg-bg-deep p-3.5 rounded-xl border border-bd-subtle/80">
                  <p className="text-2xl font-bold font-display text-sky-base">100%</p>
                  <p className="text-xs text-t2">OEM Neutral</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-bg-surface to-bg-card border border-bd-default rounded-2xl p-8 flex flex-col justify-between relative shadow-xl">
              <div>
                <div className="flex items-center gap-2 mb-4 text-sky-base">
                  <Activity size={20} />
                  <h3 className="text-xs font-mono uppercase tracking-widest font-bold">Quick Value Proposition</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Plug-and-play integrations with TOS, PCS & SCADA",
                    "Turnkey AI vision for safety & gate productivity",
                    "Predictive maintenance reducing downtime",
                    "Decarbonization tracking & shore power intelligence",
                    "GenAI role-based assistants for terminal ops"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-t1 font-body">
                      <CheckCircle2 size={18} className="text-sky-base shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-bd-subtle">
                <button
                  onClick={() => setActiveTab('capabilities')}
                  className="w-full py-3 px-4 bg-bg-raised hover:bg-sky-base hover:text-t-inv border border-bd-default rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Explore 8 Capability Areas</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ── Section 2: 8 Core Capability Areas ── */}
        <section className={`mb-16 ${activeTab === 'capabilities' ? 'block' : 'hidden print:block'}`}>
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-sky-base font-bold mb-2">
                Modular Core Engine
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-t1">
                8 Core Capability Areas
              </h2>
            </div>
            <p className="text-sm text-t2 max-w-md">
              Configure, combine, and scale specialized intelligence modules according to your terminal’s priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap) => {
              const IconComponent = cap.icon;
              const isSelected = selectedCapability === cap.id;
              return (
                <div
                  key={cap.id}
                  onClick={() => setSelectedCapability(isSelected ? null : cap.id)}
                  className={`bg-gradient-to-b ${cap.color} bg-bg-card border ${cap.border} rounded-2xl p-6 transition-all duration-300 hover:border-sky-base cursor-pointer relative overflow-hidden group flex flex-col justify-between ${
                    isSelected ? 'ring-2 ring-sky-base shadow-[0_0_25px_rgba(74,184,232,0.25)]' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-bg-deep/80 rounded-xl border border-bd-subtle text-sky-base group-hover:scale-110 transition-transform">
                        <IconComponent size={24} />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-bg-deep/90 border border-bd-subtle rounded-full text-sky-light">
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-t1 mb-2 group-hover:text-sky-base transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-t2 font-body text-xs leading-relaxed mb-6">
                      {cap.description}
                    </p>
                  </div>

                  <div>
                    <div className="border-t border-bd-subtle/60 pt-4 mt-2">
                      <p className="text-[11px] font-mono text-sky-base/80 uppercase font-semibold mb-2">Key Modules:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cap.highlights.map((h, i) => (
                          <span key={i} className="text-[11px] px-2 py-0.5 bg-bg-deep/70 border border-bd-subtle rounded text-t2">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Section 3: 7-Step Engagement Flow ── */}
        <section className={`mb-16 ${activeTab === 'engagement' ? 'block' : 'hidden print:block'}`}>
          <div className="bg-bg-card border border-bd-subtle rounded-2xl p-8 relative overflow-hidden">
            <div className="mb-8">
              <p className="text-xs font-mono uppercase tracking-widest text-sky-base font-bold mb-2">
                Engagement Methodology
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-t1 mb-3">
                How We Engage: 7-Step Deployment Pathway
              </h2>
              <p className="text-sm text-t2 max-w-3xl">
                A structured approach ensuring zero operational disruption, fast value realization, and custom alignment with existing port technology investments.
              </p>
            </div>

            {/* 7-Step Process Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10">
              {ENGAGEMENT_STEPS.map((s, idx) => (
                <div key={s.step} className="bg-bg-deep border border-bd-subtle rounded-xl p-4 relative group hover:border-sky-base/60 transition-colors">
                  <div className="text-3xl font-display font-black text-sky-base/30 group-hover:text-sky-base transition-colors mb-2">
                    {s.step}
                  </div>
                  <h4 className="font-display font-bold text-sm text-t1 mb-1">{s.name}</h4>
                  <p className="text-[11px] text-t3 leading-tight">{s.desc}</p>
                  {idx < ENGAGEMENT_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-sky-base/40">
                      <ChevronRight size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Typical Entry Point Box */}
            <div className="bg-gradient-to-r from-bg-surface via-bg-raised to-bg-surface border border-sky-base/30 rounded-xl p-6 relative">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-sky-base" size={18} />
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-sky-base">
                      Typical Starting Point Blueprint
                    </h4>
                  </div>
                  <p className="text-sm text-t1 font-body max-w-3xl leading-relaxed">
                    <strong>1 Core Value Stream + 2 to 3 Connected Functions</strong><br />
                    <span className="text-t2 text-xs">
                      Example: Combining <em>Yard Operations</em> + <em>Gate Operations</em> + <em>Equipment Maintenance</em>. Accelerates deployment by connecting existing TOS and IoT data with HarborTwin accelerator components.
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="shrink-0 py-2.5 px-5 bg-sky-base hover:bg-sky-light text-t-inv font-bold text-xs rounded-lg transition-all shadow-md"
                >
                  Request Blueprint Mapping
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ── Section 4: Why HarborTwin (Strategic Differentiators) ── */}
        <section className={`mb-16 ${activeTab === 'why' ? 'block' : 'hidden print:block'}`}>
          <div className="mb-8">
            <p className="text-xs font-mono uppercase tracking-widest text-sky-base font-bold mb-2">
              Strategic Differentiators
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-t1">
              Why HarborTwin?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {WHY_HARBORTWIN.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-bg-card border border-bd-subtle rounded-2xl p-6 flex flex-col justify-between hover:border-sky-base/50 transition-all duration-300 hover:shadow-xl group">
                  <div>
                    <div className="p-3 bg-bg-deep rounded-xl border border-bd-subtle w-fit text-sky-base mb-4 group-hover:scale-110 transition-transform">
                      <IconComp size={22} />
                    </div>
                    <h3 className="font-display font-bold text-base text-t1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-t2 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Section 5: Engagement Timeline ── */}
        <section className={`mb-16 ${activeTab === 'timeline' ? 'block' : 'hidden print:block'}`}>
          <div className="bg-bg-card border border-bd-subtle rounded-2xl p-8">
            <div className="mb-8">
              <p className="text-xs font-mono uppercase tracking-widest text-sky-base font-bold mb-2">
                Implementation Roadmap
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-t1">
                Typical Engagement Timeline
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TIMELINE_PHASES.map((p, idx) => (
                <div key={idx} className="bg-bg-deep border border-bd-subtle rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-sky-base/50 transition-colors">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-base to-sky-light opacity-60" />
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold uppercase text-sky-base">{p.phase}</span>
                      <span className="text-[11px] font-mono bg-bg-surface px-2.5 py-1 rounded border border-bd-subtle text-t2">{p.duration}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-t1 mb-4">{p.title}</h3>
                    <ul className="space-y-2">
                      {p.details.map((d, i) => (
                        <li key={i} className="text-xs text-t2 font-body flex items-start gap-2">
                          <span className="text-sky-base font-bold">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Executive Bottom Call to Action ── */}
        <div className="bg-gradient-to-r from-bg-card via-bg-surface to-bg-card border border-sky-base/40 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl print:hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-base/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="px-3.5 py-1 bg-sky-base/10 border border-sky-base/30 text-sky-base text-xs font-mono uppercase tracking-widest rounded-full inline-block font-semibold mb-4">
              Uminato Maritime Group
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-t1 mb-4 leading-tight">
              Ready to Accelerate Your Terminal's AI Transformation?
            </h2>
            <p className="text-t2 font-body text-sm md:text-base leading-relaxed mb-8">
              Schedule an executive discovery session with our maritime AI solution architects to map your terminal's unique value stream.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 bg-sky-base hover:bg-sky-light text-t-inv font-bold text-sm rounded-xl transition-all shadow-[0_0_25px_rgba(74,184,232,0.4)] flex items-center gap-2"
              >
                <Send size={16} />
                <span>Request Executive Workshop</span>
              </button>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-bg-raised border border-bd-default hover:border-sky-base/50 text-t1 hover:text-sky-base font-bold text-sm rounded-xl transition-all"
              >
                Contact Maritime Team
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* ── Discovery Modal ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-bg-card border border-bd-strong rounded-2xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => { setIsModalOpen(false); setFormSubmitted(false); }}
              className="absolute top-4 right-4 text-t3 hover:text-t1 p-2 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2 text-sky-base">
                  <Sparkles size={18} />
                  <span className="text-xs font-mono uppercase tracking-widest font-bold">HarborTwin Discovery</span>
                </div>
                <h3 className="font-display font-bold text-xl text-t1 mb-2">Schedule Executive Session</h3>
                <p className="text-xs text-t2 mb-6">
                  Get a tailored HarborTwin capability mapping for your port or terminal facility.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-mono text-t2 uppercase mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Captain Alex Morgan"
                      className="w-full bg-bg-deep border border-bd-subtle rounded-lg px-4 py-2.5 text-sm text-t1 focus:outline-none focus:border-sky-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-t2 uppercase mb-1">Corporate Email</label>
                    <input
                      required
                      type="email"
                      placeholder="alex.morgan@portauthority.com"
                      className="w-full bg-bg-deep border border-bd-subtle rounded-lg px-4 py-2.5 text-sm text-t1 focus:outline-none focus:border-sky-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-t2 uppercase mb-1">Port / Terminal Facility</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Gateway Container Terminal"
                      className="w-full bg-bg-deep border border-bd-subtle rounded-lg px-4 py-2.5 text-sm text-t1 focus:outline-none focus:border-sky-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-t2 uppercase mb-1">Primary Priority Area</label>
                    <select className="w-full bg-bg-deep border border-bd-subtle rounded-lg px-4 py-2.5 text-sm text-t1 focus:outline-none focus:border-sky-base">
                      <option>Yard & Gate Operations Intelligence</option>
                      <option>Asset Reliability & Predictive Maintenance</option>
                      <option>AI Vision & CCTV Safety Analytics</option>
                      <option>Sustainability & Shore Power</option>
                      <option>Workforce & Training AI</option>
                      <option>GenAI & Agentic Operations</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-sky-base hover:bg-sky-light text-t-inv font-bold text-sm rounded-lg transition-all shadow-[0_0_20px_rgba(74,184,232,0.3)] mt-2"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-sky-base/20 border border-sky-base text-sky-base rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-t1 mb-2">Request Received</h3>
                <p className="text-sm text-t2 leading-relaxed mb-6">
                  Thank you. A Uminato Maritime AI solution architect will contact you within 24 hours to schedule your HarborTwin discovery workshop.
                </p>
                <button
                  onClick={() => { setIsModalOpen(false); setFormSubmitted(false); }}
                  className="px-6 py-2.5 bg-bg-raised border border-bd-default text-t1 text-xs font-bold rounded-lg hover:border-sky-base transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
