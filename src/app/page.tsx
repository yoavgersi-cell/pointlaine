import Link from "next/link";
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
  ShieldCheck,
  Scale,
  Eye,
  Lock,
  RefreshCw,
  Megaphone,
  Building2,
  Check,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CONTACT_EMAIL, mailto } from "@/lib/site";

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
const networkStats = [
  { value: "4", label: "Digital properties", sub: "Live and growing" },
  { value: "18", label: "Active partnerships", sub: "Across content and commerce" },
  { value: "6", label: "Target verticals", sub: "High-intent consumer categories" },
];

const heroPromises = [
  "Editorial decisions are independent of commercial relationships",
  "Every commercial relationship is clearly disclosed",
  "Content is researched, fact-checked and kept up to date",
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 pt-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:items-center">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs text-muted-foreground opacity-0 animate-fade-in-up">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange" />
              Digital Publishing &amp; Online Media
            </div>

            <h1 className="text-[2.75rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem] opacity-0 animate-fade-in-up animate-delay-100">
              Helping people make better decisions online.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-in-up animate-delay-200">
              Pointlaine builds and operates independent digital properties that help
              consumers discover, compare and choose products and services with confidence.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row opacity-0 animate-fade-in-up animate-delay-300">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                href="#standards"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
                Our Standards
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8 opacity-0 animate-fade-in-up animate-delay-200">
            <h2 className="text-lg font-semibold">Network at a glance</h2>
            <dl className="mt-6 grid grid-cols-3 gap-4 border-b border-border pb-6">
              {networkStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</dd>
                  <dd className="mt-1 text-xs font-medium text-foreground">{stat.label}</dd>
                  <dd className="mt-0.5 text-xs leading-snug text-muted-foreground">{stat.sub}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-6 text-sm font-semibold">Our commitment to readers</h3>
            <ul className="mt-4 space-y-3">
              {heroPromises.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/10">
                    <Check className="h-3 w-3 text-orange" strokeWidth={2.5} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/editorial-standards"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-orange transition-colors"
            >
              Read our editorial standards
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  WHO WE ARE                                                        */
/* ------------------------------------------------------------------ */
const aboutPoints = [
  {
    icon: Globe,
    title: "We build and operate",
    description:
      "Content-driven websites across key consumer categories, run by our own team end to end — from research to publishing to maintenance.",
  },
  {
    icon: Users,
    title: "We serve readers first",
    description:
      "We reach consumers when they are actively researching a decision, and our job is to make that decision easier and better informed.",
  },
  {
    icon: BarChart3,
    title: "We work from data",
    description:
      "Rankings and recommendations are built on documented criteria, public data and hands-on research — not on who pays the most.",
  },
];

function WhoWeAre() {
  return (
    <section id="about" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-orange">Who We Are</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              A digital publishing company
              <br className="hidden sm:block" /> built for the modern web.
            </h2>
            <div className="mt-6 h-1 w-10 rounded-full bg-orange" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Pointlaine is a digital publishing and online media company focused on
              content, technology and consumer decision-making. We build, acquire and
              operate a growing portfolio of digital properties across high-intent consumer
              verticals — delivering the right information at the right moment to help
              people make confident choices.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Like most independent publishers, we&apos;re supported by advertising and
              affiliate partnerships. We&apos;re open about that, and we keep strict lines
              between our commercial and editorial work.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {aboutPoints.map((p) => (
              <div key={p.title} className="flex gap-5 rounded-xl border border-border bg-white p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <p.icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
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
      "Editorially-driven websites that inform and guide consumers through complex purchasing decisions.",
  },
  {
    icon: BarChart3,
    title: "Comparison Experiences",
    description:
      "Structured comparisons that let consumers evaluate products and services side by side, with transparent criteria.",
  },
  {
    icon: Wrench,
    title: "Online Tools",
    description:
      "Calculators, quizzes and recommendation tools that simplify decision-making across high-intent categories.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Integrations with brands, advertisers and publishers that create value across the consumer decision journey.",
  },
];

function WhatWeBuild() {
  return (
    <section id="what-we-build" className="scroll-mt-16 bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-orange">What We Build</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Digital properties designed to be genuinely useful.
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {builds.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange/10">
                <item.icon className="h-5 w-5 text-orange" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HOW IT WORKS                                                      */
/* ------------------------------------------------------------------ */
const steps = [
  {
    icon: Search,
    label: "Discover",
    description:
      "Consumers find our properties through search, referrals and direct visits — arriving with a real question to answer.",
  },
  {
    icon: ArrowRightLeft,
    label: "Compare",
    description:
      "Our content and comparison tools surface the information people need to evaluate their options clearly.",
  },
  {
    icon: CheckCircle,
    label: "Decide",
    description:
      "With well-sourced guidance and clear disclosures, consumers make confident, informed decisions.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[280px_1fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-orange">How It Works</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              A clear path from intent to action.
            </h2>
          </div>

          <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {steps.map((step, i) => (
              <li key={step.label} className="relative sm:text-center">
                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-7 hidden h-px bg-white/20 sm:block"
                    style={{ left: "calc(50% + 36px)", width: "calc(100% - 72px + 2rem)" }}
                  />
                )}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:mx-auto">
                  <step.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] font-medium uppercase tracking-widest text-white/50">Step {i + 1}</span>
                <h3 className="mt-1.5 text-lg font-semibold text-white">{step.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  STANDARDS — trust & credibility                                   */
/* ------------------------------------------------------------------ */
const standards = [
  {
    icon: Scale,
    title: "Editorial independence",
    description:
      "Partners can't buy a ranking, a review score or a recommendation. Our editorial team makes those calls on documented criteria.",
    href: "/editorial-standards",
    cta: "Editorial standards",
  },
  {
    icon: Eye,
    title: "Transparent monetization",
    description:
      "When we may earn a commission, we say so clearly — on the page, before the link, in plain language.",
    href: "/disclosure",
    cta: "Advertising disclosure",
  },
  {
    icon: RefreshCw,
    title: "Accuracy & corrections",
    description:
      "Content is fact-checked against primary sources, reviewed on a regular schedule, and corrected promptly when we get something wrong.",
    href: "/editorial-standards#corrections",
    cta: "Corrections policy",
  },
  {
    icon: Lock,
    title: "Respect for privacy",
    description:
      "We collect only what we need to run our sites, explain exactly how data is used, and make it easy to opt out.",
    href: "/privacy",
    cta: "Privacy policy",
  },
];

function Standards() {
  return (
    <section id="standards" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-orange">Our Standards</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Trust is the product. Here&apos;s how we earn it.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Readers rely on our properties for real decisions about money, health, home and
            family. These commitments apply to every site in the Pointlaine network.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {standards.map((s) => (
            <div key={s.title} className="flex flex-col rounded-xl border border-border bg-white p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <s.icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <Link
                href={s.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-orange transition-colors"
              >
                {s.cta}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  INDUSTRIES                                                        */
/* ------------------------------------------------------------------ */
const industries = [
  { icon: Smartphone, label: "Consumer Technology", description: "VPNs, streaming, smart home, software and devices." },
  { icon: Heart, label: "Lifestyle", description: "Health, wellness, travel, fitness and everyday essentials." },
  { icon: Users, label: "Family", description: "Parenting, education, childcare and family planning." },
  { icon: PawPrint, label: "Pet Care", description: "Pet food, insurance, health products and supplies." },
  { icon: DollarSign, label: "Financial Services", description: "Insurance, home warranties, banking and personal finance." },
  { icon: Sparkles, label: "Emerging Categories", description: "New verticals where consumer intent meets opportunity." },
];

function Industries() {
  return (
    <section id="industries" className="scroll-mt-16 bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-orange">Industries</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Operating across high-intent verticals.</h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div key={ind.label} className="flex items-start gap-4 rounded-xl border border-border bg-white p-6">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <ind.icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-semibold">{ind.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{ind.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT / PARTNER                                                 */
/* ------------------------------------------------------------------ */
const partnerPaths = [
  {
    icon: Megaphone,
    title: "Brands & advertisers",
    description: "Reach consumers in the research phase through clearly labeled placements and affiliate programs.",
    subject: "Advertising inquiry",
    cta: "Advertise with us",
  },
  {
    icon: Handshake,
    title: "Affiliate networks & programs",
    description: "Work with a compliant publisher that discloses relationships and drives qualified, high-intent traffic.",
    subject: "Partnership inquiry",
    cta: "Start a partnership",
  },
  {
    icon: Building2,
    title: "Website owners",
    description: "Thinking of selling a content site? We acquire and grow properties while preserving their quality.",
    subject: "Website acquisition",
    cta: "Talk about a sale",
  },
];

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-foreground px-6 py-14 sm:px-12 lg:py-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-orange">Partner With Us</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s build something useful together.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Every inquiry is read by a member of our team. Tell us a little about who you
              are and what you have in mind.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {partnerPaths.map((p) => (
              <a
                key={p.title}
                href={mailto(p.subject)}
                className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/25 hover:bg-white/10"
              >
                <p.icon className="h-5 w-5 text-orange" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{p.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  {p.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
                </span>
              </a>
            ))}
          </div>

          <p className="mt-10 text-sm text-white/60">
            Prefer to write directly?{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-white underline underline-offset-4 hover:text-orange">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <WhoWeAre />
        <WhatWeBuild />
        <HowItWorks />
        <Standards />
        <Industries />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
