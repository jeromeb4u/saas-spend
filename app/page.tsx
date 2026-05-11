"use client";

import {
  CreditCard,
  Calendar,
  Ghost,
  Users,
  Bell,
  FileText,
  ArrowRight,
  Menu,
  X,
  TrendingUp,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

// ─── NavBar ───────────────────────────────────────────────────────────────────
function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-[#2563eb]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#2563eb" />
            <path d="M7 17L12 12L17 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 7L12 12L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          SaaSSpend
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors">Pricing</a>
          <a href="#" className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors">Login</a>
          <a href="#pricing" className="text-sm bg-[#2563eb] text-white px-4 py-2 rounded-lg hover:bg-[#1d4ed8] transition-colors font-medium">
            Start Free
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-[#0f172a]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#e2e8f0] px-4 py-4 flex flex-col gap-4">
          <a href="#features" className="text-sm text-[#64748b]" onClick={() => setOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-sm text-[#64748b]" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#pricing" className="text-sm text-[#64748b]" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#" className="text-sm text-[#64748b]" onClick={() => setOpen(false)}>Login</a>
          <a href="#pricing" className="text-sm bg-[#2563eb] text-white px-4 py-2 rounded-lg text-center font-medium" onClick={() => setOpen(false)}>
            Start Free
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="py-20 md:py-28 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563eb] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <Sparkles size={14} />
          Built for teams under 50 people
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight mb-6">
          Know what you&apos;re actually paying for your SaaS
        </h1>
        <p className="text-lg md:text-xl text-[#64748b] mb-10 max-w-2xl mx-auto">
          Track renewals, kill zombie subscriptions, and stop overspending — without the enterprise price tag. $19/month. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-[#2563eb] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#1d4ed8] hover:shadow-lg hover:scale-[1.02] transition-all">
            Start Free
            <ArrowRight size={18} />
          </a>
          <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 border border-[#e2e8f0] text-[#0f172a] px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            See how it works
          </a>
        </div>
        <p className="text-sm text-[#64748b]">No credit card required · Setup in 5 minutes · Cancel anytime</p>
      </div>
    </section>
  );
}

// ─── Dashboard Preview ───────────────────────────────────────────────────────
function DashboardPreview() {
  const renewals = [
    { name: "Figma", date: "Jun 12", amount: "$15" },
    { name: "Notion", date: "Jun 18", amount: "$48" },
    { name: "Slack", date: "Jun 24", amount: "$25" },
  ];

  const zombies = [
    { name: "InVision", lastLogin: "94 days ago" },
    { name: "Miro", lastLogin: "102 days ago" },
    { name: "Abstract", lastLogin: "121 days ago" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-[#64748b] mb-2">Dashboard Preview</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">Your entire SaaS stack, at a glance</h2>
        </div>

        {/* Mock Dashboard */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
          {/* Dashboard Top Bar */}
          <div className="bg-[#f8fafc] border-b border-[#e2e8f0] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#dc2626]" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            </div>
            <span className="text-xs text-[#64748b] font-medium">SaaSSpend Dashboard · May 2026</span>
            <div className="w-16" />
          </div>

          {/* Dashboard Body */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Spend */}
            <div className="md:col-span-1 flex flex-col gap-4">
              <div className="bg-[#f8fafc] rounded-xl p-5 border border-[#e2e8f0]">
                <p className="text-xs text-[#64748b] uppercase tracking-widest mb-1">Total Spend</p>
                <p className="text-4xl font-bold text-[#0f172a]">$4,218</p>
                <div className="flex items-center gap-1 mt-2 text-[#22c55e] text-sm">
                  <TrendingUp size={14} />
                  <span>+3% vs last month</span>
                </div>
              </div>
              <div className="bg-[#f8fafc] rounded-xl p-5 border border-[#e2e8f0]">
                <p className="text-xs text-[#64748b] uppercase tracking-widest mb-1">Active Subscriptions</p>
                <p className="text-4xl font-bold text-[#0f172a]">38</p>
                <div className="flex items-center gap-1 mt-2 text-[#64748b] text-sm">
                  <span>Across 5 cards</span>
                </div>
              </div>
            </div>

            {/* Renewal Timeline */}
            <div className="md:col-span-1 bg-[#f8fafc] rounded-xl p-5 border border-[#e2e8f0]">
              <p className="text-xs text-[#64748b] uppercase tracking-widest mb-3">Upcoming Renewals</p>
              <div className="flex flex-col gap-3">
                {renewals.map((r) => (
                  <div key={r.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#f59e0b]" />
                      <span className="text-sm font-medium text-[#0f172a]">{r.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-[#0f172a]">{r.amount}</span>
                      <span className="text-xs text-[#64748b] ml-2">{r.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#e2e8f0]">
                <p className="text-xs text-[#64748b]">Next renewal in <span className="text-[#f59e0b] font-semibold">4 days</span></p>
              </div>
            </div>

            {/* Zombie Apps */}
            <div className="md:col-span-1 bg-red-50 rounded-xl p-5 border border-[#fca5a5]">
              <div className="flex items-center gap-2 mb-3">
                <Ghost size={14} className="text-[#dc2626]" />
                <p className="text-xs text-[#dc2626] uppercase tracking-widest font-semibold">Zombie App Alerts</p>
              </div>
              <div className="flex flex-col gap-3">
                {zombies.map((z) => (
                  <div key={z.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#0f172a]">{z.name}</span>
                    <span className="text-xs text-[#dc2626] font-semibold">{z.lastLogin}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#fca5a5]">
                <p className="text-xs text-[#dc2626]">Potential savings: <span className="font-bold">$340/mo</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features Grid ──────────────────────────────────────────────────────────
const features = [
  {
    icon: CreditCard,
    title: "Card Feed Sync",
    desc: "Automatically import charges from your card statement. No manual entry needed.",
    color: "text-[#2563eb]",
    bg: "bg-blue-50",
  },
  {
    icon: Calendar,
    title: "Renewal Calendar",
    desc: "Never get surprised by a renewal again. See every upcoming charge on one timeline.",
    color: "text-[#f59e0b]",
    bg: "bg-amber-50",
  },
  {
    icon: Ghost,
    title: "Zombie App Detection",
    desc: "We flag apps nobody's logged into in 90 days. Easy wins for cutting subscriptions.",
    color: "text-[#dc2626]",
    bg: "bg-red-50",
  },
  {
    icon: Users,
    title: "Per-Seat Utilization",
    desc: "See who's actually using each tool. Spot seats being paid for but never opened.",
    color: "text-[#8b5cf6]",
    bg: "bg-violet-50",
  },
  {
    icon: Bell,
    title: "Budget Alerts",
    desc: "Get warned when you're heading toward an overspend. Set limits per category or total.",
    color: "text-[#059669]",
    bg: "bg-emerald-50",
  },
  {
    icon: FileText,
    title: "Export for Finance",
    desc: "CSV export ready for your finance team. Categorized, dated, and exportable.",
    color: "text-[#64748b]",
    bg: "bg-gray-100",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-[#64748b] mb-2">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">Everything you need, nothing you don&apos;t</h2>
          <p className="text-[#64748b] max-w-xl mx-auto">No enterprise complexity. Just the tools small teams actually need to stop overpaying.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0] hover:shadow-md hover:border-[#cbd5e1] transition-all">
              <div className={`w-10 h-10 ${f.bg} rounded-lg flex items-center justify-center mb-4`}>
                <f.icon size={20} className={f.color} />
              </div>
              <h3 className="font-semibold text-[#0f172a] mb-2">{f.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ────────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Connect your card",
    desc: "Link your credit or debit card. We read the transaction feed — no bank login required.",
  },
  {
    num: "02",
    title: "See all charges",
    desc: "We categorize and display every SaaS subscription in one clean dashboard.",
  },
  {
    num: "03",
    title: "Set alerts",
    desc: "Choose renewal warnings (30, 14, 7 days out) and monthly budget limits.",
  },
  {
    num: "04",
    title: "Stop the waste",
    desc: "Cancel what you don&apos;t need. Track what you do. Save thousands per year.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-[#64748b] mb-2">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">Up and running in 5 minutes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-[#e2e8f0] -translate-x-1/2" />
              )}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-[#2563eb] rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  {s.num}
                </div>
                <h3 className="font-semibold text-[#0f172a]">{s.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ───────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { value: "1,200+", label: "teams tracking $14M+ in SaaS spend" },
    { value: "$840", label: "average yearly savings by killing zombie apps" },
    { value: "5 min", label: "setup time — no IT department needed" },
  ];

  return (
    <section className="py-16 px-4 bg-[#0f172a]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s) => (
          <div key={s.value} className="text-center">
            <p className="text-3xl font-bold text-white mb-2">{s.value}</p>
            <p className="text-sm text-[#94a3b8]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      "We were paying for 12 tools nobody on the team used. SaaSSpend caught them all in week one.",
    name: "Priya S.",
    role: "Ops Lead, 22-person startup",
  },
  {
    quote:
      "Finally, something that doesn't need an IT department. We saved $2,400 in the first month.",
    name: "Marcus T.",
    role: "Founder, 15-person agency",
  },
  {
    quote:
      "The renewal calendar alone is worth the price. No more surprise charges.",
    name: "Anika R.",
    role: "Head of Operations, 35-person fintech",
  },
];

function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-[#64748b] mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">Teams love SaaSSpend</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#f8fafc] rounded-xl p-6 border border-[#e2e8f0]">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#f59e0b">
                    <path d="M8 0l2.4 4.9 5.4.8-3.9 3.8.9 5.4L8 12.3 3.2 15l.9-5.4L.2 5.7l5.4-.8L8 0z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#0f172a] mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-[#0f172a]">{t.name}</p>
                <p className="text-xs text-[#64748b]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
const plans = [
  {
    name: "Starter",
    price: "19",
    desc: "Perfect for solo founders and tiny teams getting started.",
    features: [
      "1 connected card",
      "20 subscriptions",
      "Renewal alerts",
      "Zombie app detection",
      "CSV export",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Team",
    price: "49",
    desc: "For growing teams that need full visibility across all seats.",
    features: [
      "5 connected cards",
      "Unlimited subscriptions",
      "All Starter features",
      "Per-seat utilization tracking",
      "Priority support",
    ],
    cta: "Start Free",
    highlight: true,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-[#64748b] mb-2">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">Simple, honest pricing</h2>
          <p className="text-[#64748b]">No hidden fees. No surprise bills. Cancel anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border ${
                p.highlight
                  ? "bg-[#0f172a] border-[#0f172a] text-white"
                  : "bg-white border-[#e2e8f0]"
              }`}
            >
              {p.highlight && (
                <span className="inline-block bg-[#2563eb] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className={`text-lg font-bold ${p.highlight ? "text-white" : "text-[#0f172a]"}`}>
                {p.name}
              </h3>
              <div className="flex items-baseline gap-1 mt-4 mb-2">
                <span className={`text-5xl font-bold ${p.highlight ? "text-white" : "text-[#0f172a]"}`}>
                  ${p.price}
                </span>
                <span className={`text-sm ${p.highlight ? "text-[#94a3b8]" : "text-[#64748b]"}`}>/month</span>
              </div>
              <p className={`text-sm mb-6 ${p.highlight ? "text-[#94a3b8]" : "text-[#64748b]"}`}>
                {p.desc}
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle size={16} className={p.highlight ? "text-[#2563eb]" : "text-[#2563eb]"} />
                    <span className={`text-sm ${p.highlight ? "text-[#e2e8f0]" : "text-[#64748b]"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block text-center w-full py-3 rounded-lg font-semibold transition-all ${
                  p.highlight
                    ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
                    : "bg-[#f8fafc] text-[#0f172a] border border-[#e2e8f0] hover:bg-gray-100"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ──────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="py-20 px-4 bg-[#2563eb]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to stop overpaying for SaaS?
        </h2>
        <p className="text-blue-100 mb-8">Start free today. No credit card required.</p>
        <a
          href="#pricing"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#2563eb] px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 hover:scale-[1.02] transition-all"
        >
          Get Started Free
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0f172a] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="6" fill="#2563eb" />
                <path d="M7 17L12 12L17 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 7L12 12L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              SaaSSpend
            </a>
            <p className="text-sm text-[#64748b] mt-2">Know what you&apos;re actually paying for your SaaS.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {["Features", "Pricing", "About", "Blog", "Privacy", "Terms"].map((link) => (
              <a key={link} href="#" className="text-sm text-[#64748b] hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#1e293b]">
          <p className="text-xs text-[#64748b]">&copy; 2026 SaaSSpend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <NavBar />
      <Hero />
      <DashboardPreview />
      <Features />
      <HowItWorks />
      <StatsBar />
      <Testimonials />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  );
}
