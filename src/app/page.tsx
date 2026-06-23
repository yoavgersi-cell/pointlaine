import {
  ArrowRight,
  Globe,
  BarChart3,
  Wrench,
  Handshake,
  Search,
  ArrowRightLeft,
  CheckCircle,
  Smartphone,
  Heart,
  Users,
  PawPrint,
  DollarSign,
  Sparkles,
  Mail,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  X (Twitter) icon — not in lucide                                  */
/* ------------------------------------------------------------------ */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  HEADER                                                            */
/* ------------------------------------------------------------------ */
function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="text-xl font-semibold tracking-tight text-foreground">
          pointlaine
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#what-we-build" className="hover:text-foreground transition-colors">
            What We Build
          </a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#industries" className="hover:text-foreground transition-colors">
            Industries
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Partner With Us
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
const networkStats = [
  {
    icon: Globe,
    value: "4",
    label: "Digital Properties",
    sub: "Live and growing",
  },
  {
    icon: Handshake,
    value: "18",
    label: "Active Partnerships",
    sub: "Across content and commerce",
  },
  {
    icon: BarChart3,
    value: "6",
    label: "Target Verticals",
    sub: "High-intent consumer categories",
  },
  {
    icon: Users,
    value: "",
    labelBold: "Consumer-Focused",
    label: "",
    sub: "Built for real decision-making",
  },
];

function GrowthChart() {
  return (
    <svg viewBox="0 0 560 120" fill="none" className="w-full h-auto">
      {/* Grid lines */}
      <line x1="0" y1="100" x2="560" y2="100" stroke="#e5e5e5" strokeWidth="1" />
      <line x1="0" y1="75" x2="560" y2="75" stroke="#f5f5f5" strokeWidth="1" />
      <line x1="0" y1="50" x2="560" y2="50" stroke="#f5f5f5" strokeWidth="1" />
      <line x1="0" y1="25" x2="560" y2="25" stroke="#f5f5f5" strokeWidth="1" />
      {/* Area fill */}
      <path
        d="M0 90 C40 88 80 85 120 78 C160 72 200 65 240 55 C280 50 320 48 360 42 C400 38 440 30 480 22 C510 16 540 12 560 8 L560 100 L0 100 Z"
        fill="url(#orangeGradient)"
      />
      {/* Line */}
      <path
        d="M0 90 C40 88 80 85 120 78 C160 72 200 65 240 55 C280 50 320 48 360 42 C400 38 440 30 480 22 C510 16 540 12 560 8"
        stroke="#F26522"
        strokeWidth="2"
        fill="none"
      />
      {/* End dot */}
      <circle cx="560" cy="8" r="4" fill="#F26522" />
      {/* Labels */}
      <text x="60" y="116" fontSize="11" fill="#a3a3a3" textAnchor="middle">May</text>
      <text x="170" y="116" fontSize="11" fill="#a3a3a3" textAnchor="middle">May</text>
      <text x="280" y="116" fontSize="11" fill="#a3a3a3" textAnchor="middle">Jun</text>
      <text x="390" y="116" fontSize="11" fill="#a3a3a3" textAnchor="middle">Jun</text>
      <text x="500" y="116" fontSize="11" fill="#a3a3a3" textAnchor="middle">Jun</text>
      <defs>
        <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F26522" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F26522" stopOpacity="0.01" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 pt-16">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left — text */}
          <div className="pt-4">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs text-muted-foreground opacity-0 animate-fade-in-up">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange" />
              Digital Publishing &amp; Online Media
            </div>

            <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem] opacity-0 animate-fade-in-up animate-delay-100">
              Helping People make better decisions online.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-in-up animate-delay-200">
              Pointlaine builds and operates digital properties that help consumers
              discover, compare and choose products and services with confidence.
            </p>
          </div>

          {/* Right — Network Overview card */}
          <div className="rounded-xl border border-border bg-white p-6 shadow-sm opacity-0 animate-fade-in-up animate-delay-200">
            <h3 className="text-lg font-semibold">Network Overview</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              A snapshot of our growing publishing network.
            </p>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-4 gap-4">
              {networkStats.map((stat, i) => (
                <div key={i}>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border">
                    <stat.icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                  </div>
                  {stat.value ? (
                    <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                  ) : (
                    <p className="text-base font-semibold leading-tight">{stat.labelBold}</p>
                  )}
                  {stat.label && (
                    <p className="text-xs font-medium text-foreground mt-0.5">{stat.label}</p>
                  )}
                  <p className="mt-1 text-xs text-muted-foreground leading-snug">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Growth chart */}
            <div className="mt-6 border-t border-border pt-5">
              <h4 className="text-sm font-semibold">Growth Momentum</h4>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Steady progress across our key metrics.
              </p>
              <div className="mt-4">
                <GrowthChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  WHO WE ARE                                                        */
/* ------------------------------------------------------------------ */
const aboutStats = [
  {
    icon: Globe,
    value: "Multiple",
    label: "Digital Properties",
    description: "Content-driven sites across key consumer categories.",
  },
  {
    icon: Users,
    value: "Millions",
    label: "Monthly Consumers",
    description:
      "Reaching consumers when they are researching and making decisions.",
  },
  {
    icon: BarChart3,
    value: "Data-Driven",
    label: "Decision Architecture",
    description:
      "Built on data, tested insights and a focus on consumer intent.",
  },
];

function WhoWeAre() {
  return (
    <section id="about" className="bg-secondary/50 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left — text */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-orange">
              Who We Are
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              A digital publishing company
              <br className="hidden sm:block" /> built for the modern web.
            </h2>

            {/* Orange accent bar */}
            <div className="mt-6 h-1 w-10 rounded-full bg-orange" />

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Pointlaine is a digital publishing and online media company focused
              on content, technology and consumer decision-making. We build,
              acquire and operate a growing portfolio of digital properties across
              high-intent consumer verticals — delivering the right information
              at the right moment to help people make confident choices.
            </p>
          </div>

          {/* Right — stat cards */}
          <div className="flex flex-col gap-4">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-white px-6 py-5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <stat.icon
                      className="h-5 w-5 text-foreground"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <span className="text-base font-semibold text-foreground">
                      {stat.value}
                    </span>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
                <div className="mt-4 border-t border-border pt-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  WHAT WE BUILD                                                     */
/* ------------------------------------------------------------------ */
const builds = [
  {
    icon: Globe,
    title: "Content Platforms",
    description:
      "Editorially-driven websites and digital properties that inform and guide consumers through complex purchasing decisions.",
  },
  {
    icon: BarChart3,
    title: "Comparison Experiences",
    description:
      "Structured comparison tools that let consumers evaluate products and services side-by-side with transparent, data-backed insights.",
  },
  {
    icon: Wrench,
    title: "Online Tools",
    description:
      "Interactive calculators, quizzes and recommendation engines that simplify decision-making across high-intent categories.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Deep integrations with brands, advertisers and publishers to create value across the consumer decision journey.",
  },
];

function WhatWeBuild() {
  return (
    <section id="what-we-build" className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-orange">
          What We Build
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Digital properties designed for impact.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {builds.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <item.icon
                  className="h-5 w-5 text-foreground"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HOW WE CREATE VALUE                                               */
/* ------------------------------------------------------------------ */
const steps = [
  {
    icon: Search,
    label: "Discover",
    description:
      "Consumers find our properties through organic search, referrals and direct traffic — arriving with intent and purpose.",
  },
  {
    icon: ArrowRightLeft,
    label: "Compare",
    description:
      "Our content, tools and comparison experiences provide clarity — surfacing the information people need to evaluate their options.",
  },
  {
    icon: CheckCircle,
    label: "Decide",
    description:
      "Armed with data-driven insights and trusted editorial guidance, consumers make confident, informed decisions.",
  },
];

function HowWeCreateValue() {
  return (
    <section id="how-it-works" className="bg-foreground py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[280px_1fr] lg:items-start">
          {/* Left heading */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-orange">
              How It Works
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              A clear path
              <br />
              from intent
              <br />
              to action.
            </h2>
          </div>

          {/* Right steps */}
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.label} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute right-0 top-7 hidden h-px w-full -translate-x-0 sm:block" style={{ left: "calc(50% + 28px)", width: "calc(100% - 56px + 2rem)" }}>
                    <div className="h-px w-full bg-white/20" />
                  </div>
                )}

                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <step.icon
                    className="h-5 w-5 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-[11px] font-medium uppercase tracking-widest text-white/40">
                  Step {i + 1}
                </span>
                <h3 className="mt-1.5 text-lg font-semibold text-white">
                  {step.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  INDUSTRIES                                                        */
/* ------------------------------------------------------------------ */
const industries = [
  {
    icon: Smartphone,
    label: "Consumer Technology",
    description: "VPNs, streaming, smart home, software and device reviews.",
  },
  {
    icon: Heart,
    label: "Lifestyle",
    description: "Health, wellness, travel, fitness and everyday essentials.",
  },
  {
    icon: Users,
    label: "Family",
    description: "Parenting, education, childcare and family planning.",
  },
  {
    icon: PawPrint,
    label: "Pet Care",
    description: "Pet food, insurance, health products and supplies.",
  },
  {
    icon: DollarSign,
    label: "Financial Services",
    description: "Insurance, banking, credit cards and personal finance.",
  },
  {
    icon: Sparkles,
    label: "Emerging Categories",
    description: "New verticals where consumer intent meets opportunity.",
  },
];

function Industries() {
  return (
    <section id="industries" className="bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-orange">
          Industries
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Operating across high-intent verticals.
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="group rounded-lg border border-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <ind.icon
                  className="h-5 w-5 text-foreground"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-base font-semibold">{ind.label}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                            */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <span className="text-xl font-semibold tracking-tight">
              pointlaine
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A digital publishing and online media company helping consumers
              discover, compare and make better decisions online.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <XIcon className="h-4 w-4" />
              </a>
              <a href="mailto:partner@pointlaine.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Company
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="#about" className="text-foreground hover:text-muted-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#industries" className="text-foreground hover:text-muted-foreground transition-colors">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Network
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="#what-we-build" className="text-foreground hover:text-muted-foreground transition-colors">
                    Our Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
                    Content Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
                    Advertise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Contact
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:partner@pointlaine.com"
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    partner@pointlaine.com
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
                    Partnership Inquiries
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Pointlaine. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhoWeAre />
        <WhatWeBuild />
        <HowWeCreateValue />
        <Industries />
      </main>
      <Footer />
    </>
  );
}
