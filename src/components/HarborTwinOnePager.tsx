"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Sparkles,
  ShieldCheck,
  Activity,
  Building2,
  Send,
  X,
  Workflow,
  Zap,
  TrendingUp,
  BarChart3,
  Globe2,
  Radio,
  SlidersHorizontal,
  ChevronRight,
  Maximize2
} from 'lucide-react';

const CAPABILITIES = [
  {
    id: "ops",
    icon: Anchor,
    title: "Port & Terminal Operations",
    badge: "Operational Intelligence",
    tagline: "Synchronized flow across water, berth, yard & gate",
    description: "Real-time vessel, berth, yard, gate, cargo-flow and integrated operational intelligence designed to eliminate congestive bottlenecks and maximize quay throughput.",
    highlights: ["Vessel ETA & Dynamic Berth Allocation", "Yard Flow & Equipment Routing", "Automated Gate OCR & Truck Turnaround", "Quayside Congestion Early Warning"],
    metrics: "Up to 24% turnaround improvement",
    color: "from-blue-600/20 via-sky-500/10 to-transparent",
    border: "border-blue-500/30",
    accent: "text-blue-400"
  },
  {
    id: "asset",
    icon: Cpu,
    title: "Asset Reliability & Predictive Maintenance",
    badge: "Predictive AI",
    tagline: "Zero unplanned quayside & yard equipment downtime",
    description: "High-frequency vibration & thermal condition monitoring, remaining useful life (RUL) estimation, and AI-assisted RCA/CAPA for STS cranes, RTGs, AGVs, and mobile harbour assets.",
    highlights: ["Continuous Sensor Health Telemetry", "Remaining Useful Life (RUL) Forecaster", "Automated RCA & CAPA Workflows", "Spares & Maintenance Schedule Sync"],
    metrics: "Up to 40% reduction in unplanned downtime",
    color: "from-indigo-600/20 via-purple-500/10 to-transparent",
    border: "border-indigo-500/30",
    accent: "text-indigo-400"
  },
  {
    id: "vision",
    icon: Eye,
    title: "AI Vision & CCTV Safety Analytics",
    badge: "Computer Vision",
    tagline: "Autonomous optical monitoring across 100% of terminal footprint",
    description: "Next-generation edge computer vision analytics for zero-latency safety compliance, PPE validation, yard congestion detection, hazard alerts, and high-security zone monitoring.",
    highlights: ["Real-time PPE & Exclusion Zone Alerts", "Container Twistlock & Damage Scanning", "Speed & Traffic Flow Verification", "Automated Security & Perimeter Intrusion"],
    metrics: "99.2% safety anomaly detection rate",
    color: "from-cyan-600/20 via-blue-500/10 to-transparent",
    border: "border-cyan-500/30",
    accent: "text-cyan-400"
  },
  {
    id: "sustainability",
    icon: Leaf,
    title: "Sustainability & Decarbonization",
    badge: "Green Port Intelligence",
    tagline: "Actionable ESG, shore power & emissions orchestration",
    description: "Dynamic energy management, diesel-to-electric equipment tracking, automated greenhouse gas emissions intelligence, Cold Ironing (shore power) optimization, and regulatory carbon compliance.",
    highlights: ["Berth-Level Emissions Profiling", "Shore Power Grid Load Balancing", "Fuel & Energy Consumption Benchmarking", "IMO CII & Regional ESG Reporting"],
    metrics: "Automated real-time Scope 1 & 2 tracking",
    color: "from-emerald-600/20 via-teal-500/10 to-transparent",
    border: "border-emerald-500/30",
    accent: "text-emerald-400"
  },
  {
    id: "workforce",
    icon: Users,
    title: "Workforce & Operational Safety AI",
    badge: "Human Capital AI",
    tagline: "Empowering frontline teams with intelligent assistance",
    description: "AI-assisted crew onboarding, video-based skill screening, dynamic shift and gang allocation, digital standard operating procedures (SOPs), and automated safety credential tracking.",
    highlights: ["Dynamic Gang & Shift Roster AI", "Augmented Mobile SOP Work Instructions", "Automated Skill & Safety Verification", "Fatigue & Heat Stress Preemption"],
    metrics: "Streamlined shift dispatch & safety audit",
    color: "from-violet-600/20 via-indigo-500/10 to-transparent",
    border: "border-violet-500/30",
    accent: "text-violet-400"
  },
  {
    id: "digitaltwin",
    icon: Layers,
    title: "3D Spatial Digital Twin & Simulation",
    badge: "Spatial Intelligence",
    tagline: "Living 3D replica of your port infrastructure & logistics",
    description: "High-fidelity interactive 3D operational visualization, real-time spatial physics, weather surge simulation, and CAPEX expansion scenario modeling before executing on-ground changes.",
    highlights: ["Interactive Real-Time 3D Yard Map", "Quay Cranes & Berth Physics Modeling", "Extreme Weather Surge Simulation", "CAPEX Layout Scenario Sandbox"],
    metrics: "Sub-second GIS & telemetry synchronisation",
    color: "from-sky-600/20 via-blue-600/10 to-transparent",
    border: "border-sky-500/30",
    accent: "text-sky-400"
  },
  {
    id: "genai",
    icon: Bot,
    title: "GenAI & Agentic Operations Assistant",
    badge: "Agentic AI",
    tagline: "Autonomous role-based terminal co-pilots",
    description: "Context-aware conversational co-pilots for Harbour Masters, Yard Planners, and Maintenance Directors that convert complex TOS data into instant operational decisions and automated reports.",
    highlights: ["Natural Language TOS & Sensor Querying", "Automated Daily Operations Summaries", "Dynamic Shift Handover Reporting", "Instant Incident Anomaly Explanations"],
    metrics: "Instant natural language intelligence",
    color: "from-purple-600/20 via-pink-500/10 to-transparent",
    border: "border-purple-500/30",
    accent: "text-purple-400"
  },
  {
    id: "integration",
    icon: Database,
    title: "Universal Data & Interop Engine",
    badge: "Open Interoperability",
    tagline: "Harmonizing legacy TOS, SCADA, IoT & enterprise ERPs",
    description: "Vendor-agnostic data fabric that unifies disparate terminal systems — Navis, COSMOS, CyberLogitec, Tideworks, SCADA, Gate OCR, AIS feeds, and ERPs — into a real-time data mesh.",
    highlights: ["Zero-Lock-in Connectors for Major TOS", "Industrial SCADA & Modbus / OPC-UA Ingestion", "High-Throughput Kafka Stream Processing", "Cyber-Hardened Enterprise Data Mesh"],
    metrics: "Connects with 100% legacy port systems",
    color: "from-teal-600/20 via-cyan-500/10 to-transparent",
    border: "border-teal-500/30",
    accent: "text-teal-400"
  }
];

const METRICS = [
  { value: "15-28%", label: "Quay & Berth Throughput Velocity", sub: "Optimized vessel turnaround cycles" },
  { value: "35%", label: "Gate & Yard Congestion Reduction", sub: "Real-time automated traffic balancing" },
  { value: "40%", label: "Unplanned Equipment Downtime Avoided", sub: "Predictive vibration & thermal AI" },
  { value: "100%", label: "OEM & Legacy TOS Interoperable", sub: "Navis, COSMOS, Tideworks, SCADA & IoT" }
];

const ARCHITECTURE_PILLARS = [
  {
    icon: Database,
    title: "1. Ingest & Unify",
    desc: "Seamless integration across TOS (Navis, COSMOS, Tideworks), Gate OCR, SCADA, AIS, weather buoys, CCTV feeds, and vibration IoT without disrupting ongoing terminal operations."
  },
  {
    icon: Cpu,
    title: "2. Analyze & Predict",
    desc: "Proprietary maritime AI models perform predictive maintenance, computer vision safety detection, dynamic crane allocation, and decarbonisation tracking in real time."
  },
  {
    icon: Layers,
    title: "3. Visualize & Automate",
    desc: "Live 3D Digital Twin environment paired with GenAI co-pilot agents provides executives and dispatchers with instant situational clarity and automated corrective workflows."
  }
];

const WHY_HARBORTWIN = [
  {
    icon: Zap,
    title: "Pre-Built Maritime Accelerators",
    desc: "Bypass multi-year custom software development cycles. HarborTwin deploys with modular, field-tested maritime AI models ready for instant terminal configuration."
  },
  {
    icon: ShieldCheck,
    title: "Zero Operational Downtime",
    desc: "Our non-invasive data ingestion layer sits alongside existing TOS, SCADA, and security infrastructure with zero interruption to live vessel or yard handling."
  },
  {
    icon: TrendingUp,
    title: "Rapid 8–16 Week Proof of Value",
    desc: "Validate tangible ROI, reduced turnaround delays, and asset health improvements on a selected core value stream before expanding terminal-wide."
  },
  {
    icon: Workflow,
    title: "OEM & Vendor-Neutral Architecture",
    desc: "Eliminate vendor lock-in. HarborTwin interfaces smoothly across multi-brand quay cranes, RTGs, AGVs, gate equipment, and third-party software suites."
  },
  {
    icon: BarChart3,
    title: "Modular Progressive Scalability",
    desc: "Scale function-by-function, asset-by-asset, or facility-by-facility across multiple regional terminals with enterprise-grade multi-tenant architecture."
  }
];

export default function HarborTwinOnePager() {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    facility: '',
    priorityFocus: 'Port & Terminal Operations Intelligence',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const payload = {
        ...formData,
        formType: 'harbortwin',
        submittedAt: new Date().toISOString(),
        pageUrl: typeof window !== 'undefined' ? window.location.href : 'https://uminato.com/harbortwin',
      };

      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;
      const targetEndpoint = scriptUrl || '/api/contact';

      const response = await fetch(targetEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || data.result === 'error' || data.status === 'error') {
        throw new Error(data.error || data.message || 'Failed to submit discovery request.');
      }

      setFormSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        facility: '',
        priorityFocus: 'Port & Terminal Operations Intelligence',
      });
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredCapabilities = filterCategory === 'all' 
    ? CAPABILITIES 
    : CAPABILITIES.filter(c => {
        if (filterCategory === 'ops') return c.id === 'ops' || c.id === 'vision' || c.id === 'digitaltwin';
        if (filterCategory === 'assets') return c.id === 'asset' || c.id === 'sustainability';
        if (filterCategory === 'ai') return c.id === 'genai' || c.id === 'workforce' || c.id === 'integration';
        return true;
      });

  return (
    <div className="w-full bg-[#050D1A] text-t1 min-h-screen selection:bg-sky-base selection:text-t-inv relative overflow-hidden">
      
      {/* ── Background Ambient Glows & Grid Pattern ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3158_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-sky-base/15 via-navy/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[35%] right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Top Corporate Hero Section ── */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 border-b border-bd-subtle/70">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header Tag / Badge */}
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-base/10 border border-sky-base/30 text-sky-light text-xs font-mono font-semibold uppercase tracking-widest backdrop-blur-md">
              <Sparkles size={14} className="text-sky-base animate-pulse" />
              <span>Next-Gen Maritime AI Platform</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-t3 border-l border-bd-default pl-3">
              <Radio size={12} className="text-emerald-400 animate-ping" />
              <span>Enterprise Ready v2026.1</span>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 md:mb-12">
            <div className="lg:col-span-7">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12] mb-4 md:mb-5">
                Intelligent Digital Twin &amp; AI for <span className="bg-gradient-to-r from-sky-base via-sky-light to-blue-400 bg-clip-text text-transparent">Ports &amp; Terminals</span>
              </h1>
              
              <p className="text-t2 font-body text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-7 max-w-2xl">
                HarborTwin™ unifies live terminal operational telemetry, predictive AI, computer vision, and interactive 3D spatial simulation into a centralized command intelligence engine.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-7 py-3.5 bg-sky-base hover:bg-sky-light text-t-inv font-display font-bold text-sm rounded-xl transition-all shadow-[0_0_30px_rgba(74,184,232,0.35)] hover:shadow-[0_0_40px_rgba(74,184,232,0.5)] flex items-center gap-2 group cursor-pointer"
                >
                  <Send size={15} />
                  <span>Schedule Executive Briefing</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-bg-card/80 hover:bg-bg-raised border border-bd-default hover:border-sky-base/50 text-t1 hover:text-white font-display font-semibold text-sm rounded-xl transition-all backdrop-blur-md flex items-center gap-2"
                >
                  <span>Request Technical Specs</span>
                </Link>
              </div>

              {/* Verified Features Checklist */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 pt-5 border-t border-bd-subtle text-xs font-body text-t2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-sky-base" />
                  <span>Non-Invasive TOS Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-sky-base" />
                  <span>8–16 Week Rapid Deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-sky-base" />
                  <span>Air-Gapped &amp; Cloud Secure</span>
                </div>
              </div>
            </div>

            {/* Visual Hero Dashboard Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-sky-base/40 via-bd-strong to-bd-subtle shadow-2xl overflow-hidden group">
                <div className="relative rounded-xl overflow-hidden bg-[#0A1529] border border-bd-default">
                  
                  {/* Top Mock Window Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2 bg-[#080F1E] border-b border-bd-subtle text-[11px] font-mono text-t3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      <span className="ml-2 text-t2">HarborTwin 3D Spatial Engine</span>
                    </div>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE TELEMETRY
                    </span>
                  </div>

                  {/* Terminal Image */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <Image
                      src="/assets/projects/harbortwin.png"
                      alt="HarborTwin Terminal Digital Twin Visualization"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-transparent opacity-75" />

                    {/* Floating Status Overlays */}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2">
                      <div className="p-2.5 bg-bg-surface/90 border border-sky-base/30 rounded-lg backdrop-blur-md flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="p-1 bg-sky-base/20 rounded-md text-sky-base">
                            <Activity size={14} />
                          </div>
                          <div>
                            <p className="text-[9px] font-mono uppercase text-t3">Active Quayside Telemetry</p>
                            <p className="text-[11px] font-display font-bold text-white leading-tight">4 Berths Synced • 12 STS Cranes</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-sky-light px-2 py-0.5 bg-sky-base/10 rounded border border-sky-base/20 shrink-0">
                          99.8% Eff.
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ── Enterprise KPI Impact Strip ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {METRICS.map((metric, i) => (
              <div 
                key={i} 
                className="bg-bg-card/70 border border-bd-subtle/90 hover:border-sky-base/40 rounded-xl p-6 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-base/5 rounded-full blur-xl group-hover:bg-sky-base/10 transition-colors" />
                <p className="font-display text-3xl md:text-4xl font-extrabold text-sky-base mb-1 tracking-tight">
                  {metric.value}
                </p>
                <h4 className="font-display font-bold text-sm text-t1 mb-1">
                  {metric.label}
                </h4>
                <p className="font-body text-xs text-t3">
                  {metric.sub}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section: Platform Architecture & Technology Core ── */}
      <section className="py-24 border-b border-bd-subtle/70 bg-[#080F1E]/80 relative">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-base/10 border border-sky-base/20 text-sky-light text-xs font-mono uppercase tracking-widest font-semibold mb-4">
              <Building2 size={13} />
              <span>Enterprise Architecture</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              The Modern Port Intelligence Stack
            </h2>
            <p className="text-t2 font-body text-base leading-relaxed">
              HarborTwin wraps around your existing port infrastructure without requiring costly hardware rip-and-replace, harmonizing siloed systems into an autonomous operational loop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARCHITECTURE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-bg-card border border-bd-default rounded-2xl p-8 relative flex flex-col justify-between hover:border-sky-base/40 transition-all duration-300 shadow-xl group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-bg-deep border border-bd-subtle text-sky-base flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-sky-base/40 transition-all">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-t2 font-body text-sm leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-bd-subtle/80 flex items-center gap-2 text-xs font-mono text-sky-base/80">
                    <span>LAYER 0{idx + 1} ARCHITECTURE</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Section: 8 Core Capability Modules (Full Showcase) ── */}
      <section className="py-24 border-b border-bd-subtle/70 relative">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          
          {/* Section Header with Category Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-base/10 border border-sky-base/20 text-sky-light text-xs font-mono uppercase tracking-widest font-semibold mb-3">
                <SlidersHorizontal size={13} />
                <span>Modular Capability Engine</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                8 Core Capability Areas
              </h2>
              <p className="text-t2 font-body text-sm sm:text-base max-w-xl">
                Configure individual modules or deploy the integrated suite tailored to your terminal’s specific operational bottlenecks.
              </p>
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-bg-surface/80 border border-bd-subtle rounded-xl backdrop-blur-sm self-start md:self-auto">
              {[
                { id: 'all', label: 'All 8 Capabilities' },
                { id: 'ops', label: 'Operations & Vision' },
                { id: 'assets', label: 'Assets & Green Tech' },
                { id: 'ai', label: 'GenAI & Integrations' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilterCategory(f.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold font-display transition-all cursor-pointer ${
                    filterCategory === f.id
                      ? 'bg-sky-base text-t-inv shadow-md'
                      : 'text-t2 hover:text-white hover:bg-bg-raised'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCapabilities.map((cap) => {
              const IconComponent = cap.icon;
              const isSelected = selectedCapability === cap.id;

              return (
                <div
                  key={cap.id}
                  onClick={() => setSelectedCapability(isSelected ? null : cap.id)}
                  className={`bg-gradient-to-b ${cap.color} bg-bg-card border ${cap.border} rounded-2xl p-6 transition-all duration-300 hover:border-sky-base hover:shadow-[0_0_30px_rgba(74,184,232,0.15)] cursor-pointer relative overflow-hidden group flex flex-col justify-between ${
                    isSelected ? 'ring-2 ring-sky-base shadow-[0_0_25px_rgba(74,184,232,0.25)]' : ''
                  }`}
                >
                  <div>
                    {/* Badge & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 bg-bg-deep/90 rounded-xl border border-bd-subtle text-sky-base group-hover:scale-110 group-hover:border-sky-base/50 transition-all">
                        <IconComponent size={22} />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-bg-deep/90 border border-bd-subtle rounded-full text-sky-light">
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-sky-light transition-colors">
                      {cap.title}
                    </h3>
                    <p className={`text-xs font-mono ${cap.accent} mb-3 font-medium`}>
                      {cap.tagline}
                    </p>
                    
                    <p className="text-t2 font-body text-xs leading-relaxed mb-6">
                      {cap.description}
                    </p>
                  </div>

                  <div>
                    {/* Capability Features Checklist */}
                    <div className="border-t border-bd-subtle/80 pt-4 mt-2">
                      <p className="text-[10px] font-mono text-sky-base/80 uppercase tracking-wider font-semibold mb-2">Key Highlights:</p>
                      <ul className="space-y-1.5 mb-4">
                        {cap.highlights.map((h, i) => (
                          <li key={i} className="text-[11px] font-body text-t2 flex items-start gap-1.5">
                            <span className="text-sky-base mt-0.5">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Performance Metric Tag */}
                      <div className="p-2 bg-bg-deep/70 border border-bd-subtle rounded-lg text-[11px] font-mono text-t1 flex items-center gap-1.5">
                        <TrendingUp size={13} className="text-emerald-400 shrink-0" />
                        <span className="truncate">{cap.metrics}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Section: Strategic Differentiators ("Why HarborTwin") ── */}
      <section className="py-24 border-b border-bd-subtle/70 bg-[#080F1E]/60 relative">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-base/10 border border-sky-base/20 text-sky-light text-xs font-mono uppercase tracking-widest font-semibold mb-3">
                <ShieldCheck size={13} />
                <span>Executive Differentiators</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                Why Global Terminals Choose HarborTwin
              </h2>
              <p className="text-t2 font-body text-base max-w-xl">
                Built from ground up specifically for maritime infrastructure, avoiding the risks and delays of general-purpose software frameworks.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-bg-surface hover:bg-sky-base hover:text-t-inv border border-bd-default rounded-xl text-xs font-bold font-display transition-all cursor-pointer"
            >
              <span>Request Capability Matrix</span>
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {WHY_HARBORTWIN.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-bg-card border border-bd-default rounded-2xl p-6 flex flex-col justify-between hover:border-sky-base/50 transition-all duration-300 hover:shadow-xl group"
                >
                  <div>
                    <div className="p-3 bg-bg-deep rounded-xl border border-bd-subtle w-fit text-sky-base mb-5 group-hover:scale-110 group-hover:border-sky-base/40 transition-transform">
                      <IconComp size={22} />
                    </div>
                    <h3 className="font-display font-bold text-base text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-t2 font-body text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── High-Impact Bottom Call to Action ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          
          <div className="bg-gradient-to-r from-bg-card via-bg-surface to-bg-card border border-sky-base/30 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-base/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="px-4 py-1.5 bg-sky-base/10 border border-sky-base/30 text-sky-light text-xs font-mono uppercase tracking-widest rounded-full inline-block font-semibold mb-6">
                Uminato Maritime Group &bull; Solution Discovery
              </span>
              
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Accelerate Your Port's Autonomous AI Transformation
              </h2>
              
              <p className="text-t2 font-body text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Schedule a confidential discovery workshop with our maritime AI architects to map high-ROI value streams and simulate your terminal layout.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-sky-base hover:bg-sky-light text-t-inv font-display font-bold text-sm rounded-xl transition-all shadow-[0_0_30px_rgba(74,184,232,0.4)] flex items-center gap-2 cursor-pointer"
                >
                  <Send size={16} />
                  <span>Book Executive Workshop</span>
                </button>
                
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-bg-raised border border-bd-default hover:border-sky-base/50 text-white hover:text-sky-light font-display font-bold text-sm rounded-xl transition-all"
                >
                  Contact Maritime Advisory
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Executive Discovery Modal ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B1628] border border-bd-strong rounded-2xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => { setIsModalOpen(false); setFormSubmitted(false); }}
              className="absolute top-4 right-4 text-t3 hover:text-white p-2 rounded-lg transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2 text-sky-base">
                  <Sparkles size={18} />
                  <span className="text-xs font-mono uppercase tracking-widest font-bold">HarborTwin Discovery</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Schedule Executive Session</h3>
                <p className="text-xs text-t2 mb-6">
                  Receive a custom capability mapping and proof-of-value blueprint for your port or terminal facility.
                </p>

                {errorMessage && (
                  <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                    {errorMessage}
                  </div>
                )}

                <form
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-mono text-t2 uppercase mb-1">
                      Full Name <span className="text-sky-base">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Captain Alex Morgan"
                      className="w-full bg-[#050D1A] border border-bd-subtle focus:border-sky-base rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-t2 uppercase mb-1">
                      Corporate Email <span className="text-sky-base">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex.morgan@portauthority.com"
                      className="w-full bg-[#050D1A] border border-bd-subtle focus:border-sky-base rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-t2 uppercase mb-1">
                      Port / Terminal Facility <span className="text-sky-base">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="facility"
                      value={formData.facility}
                      onChange={handleInputChange}
                      placeholder="e.g. Gateway Container Terminal"
                      className="w-full bg-[#050D1A] border border-bd-subtle focus:border-sky-base rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-t2 uppercase mb-1">Primary Priority Focus</label>
                    <select
                      name="priorityFocus"
                      value={formData.priorityFocus}
                      onChange={handleInputChange}
                      className="w-full bg-[#050D1A] border border-bd-subtle focus:border-sky-base rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Port & Terminal Operations Intelligence">Port &amp; Terminal Operations Intelligence</option>
                      <option value="Asset Reliability & Predictive Maintenance">Asset Reliability &amp; Predictive Maintenance</option>
                      <option value="AI Vision & CCTV Safety Analytics">AI Vision &amp; CCTV Safety Analytics</option>
                      <option value="Sustainability & Shore Power Decarbonization">Sustainability &amp; Shore Power Decarbonization</option>
                      <option value="3D Spatial Digital Twin & Simulation">3D Spatial Digital Twin &amp; Simulation</option>
                      <option value="GenAI & Agentic Operations">GenAI &amp; Agentic Operations</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-sky-base hover:bg-sky-light text-t-inv font-display font-bold text-sm rounded-lg transition-all shadow-[0_0_20px_rgba(74,184,232,0.35)] mt-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-t-inv" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <span>Submit Discovery Request</span>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-sky-base/20 border border-sky-base text-sky-base rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Request Confirmed</h3>
                <p className="text-sm text-t2 leading-relaxed mb-6">
                  Thank you. A Uminato Maritime AI solution architect will contact you within 24 hours to schedule your HarborTwin discovery workshop.
                </p>
                <button
                  onClick={() => { setIsModalOpen(false); setFormSubmitted(false); }}
                  className="px-6 py-2.5 bg-bg-raised border border-bd-default text-white text-xs font-bold rounded-lg hover:border-sky-base transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
