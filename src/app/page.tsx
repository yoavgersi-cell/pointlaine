import Link from "next/link";
import {
  ArrowRight,
  Globe,
  BarChart3,
  Wrench,
  Handshake,
  ShieldCheck,
  Scale,
  Eye,
  Lock,
  RefreshCw,
  Megaphone,
  Building2,
  Check,
  Stethoscope,
  PawPrint,
  Search,
  FileCheck2,
  LineChart,
  UserRound,
  Ban,
  ClipboardCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CONTACT_EMAIL, mailto } from "@/lib/site";

const eyebrow = "mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand";

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
const networkStats = [
  { value: "4", label: "Digital properties" },
  { value: "18", label: "Active partnerships" },
  { value: "2", label: "Core verticals" },
];

const heroFocus = [
  "Weight loss & GLP-1",
  "TRT",
  "HRT & menopause",
  "ED",
  "Pet insurance",
  "Pet supplements",
  "Dog & cat food",
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-16 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 70% 30%, #000 20%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/30 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80 opacity-0 animate-fade-in-up">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-light" strokeWidth={2} />
              Independent publisher · Telehealth &amp; Pet Care
            </div>

            <h1 className="text-[2.6rem] font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-[4rem] opacity-0 animate-fade-in-up animate-delay-100">
              Helping people make better health and pet care decisions.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 opacity-0 animate-fade-in-up animate-delay-200">
              Pointlaine builds and operates content and comparison properties in
              telehealth and pet care — connecting consumers who are actively researching
              with the providers best suited to them, under clear editorial and compliance
              standards.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row opacity-0 animate-fade-in-up animate-delay-300">
              <Link
                href="#partners"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
              >
                For Affiliate Programs
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                href="#standards"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Our Standards
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8 opacity-0 animate-fade-in-up animate-delay-200">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">Network at a glance</h2>
            <dl className="mt-6 grid grid-cols-3 gap-4 border-b border-white/10 pb-6">
              {networkStats.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-4xl font-semibold tracking-tight">{stat.value}</dd>
                  <dt className="mt-1 text-xs text-white/60">{stat.label}</dt>
                </div>
              ))}
            </dl>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-white/60">Categories we cover</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {heroFocus.map((c) => (
                <li key={c} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/85">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TRUST STRIP                                                       */
/* ------------------------------------------------------------------ */
const trustPoints = [
  { icon: FileCheck2, label: "FTC-aligned disclosures" },
  { icon: Search, label: "Content-led, organic traffic" },
  { icon: Scale, label: "Editorial independence" },
  { icon: Lock, label: "Privacy-first operations" },
];

function TrustStrip() {
  return (
    <section aria-label="Commitments" className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-5 px-6 py-8 lg:grid-cols-4">
        {trustPoints.map((t) => (
          <div key={t.label} className="flex items-center gap-3 text-sm font-medium text-foreground">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft">
              <t.icon className="h-4 w-4 text-brand" strokeWidth={1.75} />
            </span>
            {t.label}
          </div>
        ))}
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
    title: "We own and operate our properties",
    description:
      "Every site in our network is built, written and maintained by our own team — research, publishing, compliance and partner management under one roof.",
  },
  {
    icon: UserRound,
    title: "We serve readers first",
    description:
      "We reach people while they're actively researching a decision. Our job is to make that decision clearer — which is also what makes the traffic valuable to partners.",
  },
  {
    icon: BarChart3,
    title: "We work from evidence",
    description:
      "Comparisons are built on documented criteria, provider documentation and primary sources — never on who pays the most.",
  },
];

function WhoWeAre() {
  return (
    <section id="about" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className={eyebrow}>Who We Are</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]">
              A focused digital publisher, built for trust.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Pointlaine is a digital publishing and online media company. We build, acquire
              and operate content and comparison properties in two categories where good
              information matters most: <strong className="font-semibold text-foreground">telehealth</strong> and{" "}
              <strong className="font-semibold text-foreground">pet care</strong>.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Like most independent publishers, we&apos;re supported by affiliate and
              advertising partnerships. We&apos;re open about that, and we keep strict lines
              between commercial relationships and editorial judgment.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {aboutPoints.map((p) => (
              <div key={p.title} className="flex gap-5 rounded-2xl border border-border bg-white p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
                  <p.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
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
/*  VERTICALS                                                         */
/* ------------------------------------------------------------------ */
const verticals = [
  {
    icon: Stethoscope,
    name: "Telehealth & Wellness",
    summary:
      "Plain-language guides and provider comparisons for people considering online care — covering how treatments work, what they cost, who they're for, and what to ask a clinician.",
    categories: [
      { name: "Weight loss & GLP-1", note: "Medical weight-loss programs, GLP-1 options, costs and eligibility" },
      { name: "TRT", note: "Testosterone replacement therapy providers, testing and monitoring" },
      { name: "HRT & menopause", note: "Hormone therapy for menopause and perimenopause care" },
      { name: "ED", note: "Erectile dysfunction treatment options and online providers" },
    ],
    footnote:
      "Health content is informational, sourced from regulators and peer-reviewed research, and always points readers to a licensed clinician.",
  },
  {
    icon: PawPrint,
    name: "Pet Care",
    summary:
      "Practical, research-backed help for dog and cat owners — from protecting against vet bills to choosing what goes in the bowl.",
    categories: [
      { name: "Pet insurance", note: "Plan comparisons, coverage, exclusions and claim experience" },
      { name: "Pet supplements", note: "Joint, skin, digestive and calming supplements" },
      { name: "Dog food", note: "Fresh, subscription and traditional dog food" },
      { name: "Cat food", note: "Wet, dry and fresh cat food options" },
    ],
    footnote:
      "Pet content draws on veterinary sources and manufacturer documentation, and encourages readers to involve their vet.",
  },
];

function Verticals() {
  return (
    <section id="verticals" className="scroll-mt-16 bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className={eyebrow}>Our Verticals</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Two categories. Deep expertise in each.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We deliberately focus on high-consideration categories where readers do real
            research before they buy — and where accuracy and compliance matter.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {verticals.map((v) => (
            <article key={v.name} className="flex flex-col rounded-2xl border border-border bg-white p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink">
                  <v.icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{v.name}</h3>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{v.summary}</p>

              <ul className="mt-6 divide-y divide-border border-y border-border">
                {v.categories.map((c) => (
                  <li key={c.name} className="flex items-start gap-3 py-3.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2.25} />
                    <div>
                      <p className="text-sm font-semibold">{c.name}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{c.note}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{v.footnote}</p>
            </article>
          ))}
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
    description: "In-depth guides that explain options, costs and trade-offs in plain language.",
  },
  {
    icon: BarChart3,
    title: "Comparison Experiences",
    description: "Side-by-side provider and product comparisons built on transparent criteria.",
  },
  {
    icon: Wrench,
    title: "Decision Tools",
    description: "Quizzes and calculators that help readers narrow down what fits their situation.",
  },
  {
    icon: Handshake,
    title: "Partner Integrations",
    description: "Offer placements, tracking and landing experiences built to each program's rules.",
  },
];

function WhatWeBuild() {
  return (
    <section id="what-we-build" className="scroll-mt-16 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className={eyebrow}>What We Build</p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Properties designed to be genuinely useful.
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {builds.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-white p-6">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft">
                <item.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
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
/*  FOR AFFILIATE PROGRAMS                                            */
/* ------------------------------------------------------------------ */
const partnerReasons = [
  {
    icon: Search,
    title: "High-intent, content-led traffic",
    description:
      "Readers reach us through search and editorial content while comparing options — not through incentivized, pop-up or misleading placements.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance built in",
    description:
      "Clear affiliate disclosures, no unapproved health claims, and creative used only as each program allows. Health content avoids diagnosis and promises of results.",
  },
  {
    icon: Ban,
    title: "We respect program terms",
    description:
      "We follow each program's rules on brand-term bidding, coupon usage, trademarks and approved messaging — and we ask when something is unclear.",
  },
  {
    icon: LineChart,
    title: "Ongoing optimization",
    description:
      "We review performance with partners regularly and improve placements, content and landing flows to lift conversion quality, not just volume.",
  },
];

const partnerSteps = [
  { title: "Introduction", description: "We share our properties, traffic sources and audience with your team." },
  { title: "Compliance review", description: "We align on approved claims, creative and brand guidelines before launch." },
  { title: "Launch", description: "Placements go live with proper tracking and disclosures in place." },
  { title: "Optimize", description: "Regular check-ins on performance, quality and new opportunities." },
];

function Partners() {
  return (
    <section id="partners" className="scroll-mt-16 bg-ink py-24 text-white lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-light">For Affiliate Programs</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A publishing partner you can put your brand next to.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Telehealth and pet care programs hold their partners to a high bar. So do we.
            Here&apos;s what working with Pointlaine looks like.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {partnerReasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <r.icon className="h-5 w-5 text-brand-light" strokeWidth={1.75} />
              <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{r.description}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-20 text-sm font-semibold uppercase tracking-[0.14em] text-white/60">How we onboard a new program</h3>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnerSteps.map((s, i) => (
            <li key={s.title} className="border-t border-white/15 pt-5">
              <span className="text-xs font-semibold tabular-nums text-brand-light">0{i + 1}</span>
              <p className="mt-2 text-base font-semibold">{s.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  STANDARDS                                                         */
/* ------------------------------------------------------------------ */
const standards = [
  {
    icon: Scale,
    title: "Editorial independence",
    description:
      "Partners can't buy a ranking, a score or a recommendation. Editorial calls are made on documented criteria.",
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
      "Content is checked against primary sources, reviewed on a schedule, and corrected promptly when we get something wrong.",
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
          <p className={eyebrow}>Our Standards</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Trust is the product. Here&apos;s how we earn it.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Readers rely on our properties for decisions about their health and their pets.
            These commitments apply to every site in the Pointlaine network.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {standards.map((s) => (
            <div key={s.title} className="flex flex-col rounded-2xl border border-border bg-white p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft">
                  <s.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <Link
                href={s.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline underline-offset-4"
              >
                {s.cta}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                           */
/* ------------------------------------------------------------------ */
const partnerPaths = [
  {
    icon: Handshake,
    title: "Affiliate programs & networks",
    description: "Telehealth or pet care program looking for a compliant, content-led publisher.",
    subject: "Affiliate partnership inquiry",
    cta: "Start a partnership",
  },
  {
    icon: Megaphone,
    title: "Brands & advertisers",
    description: "Reach readers in the research phase through clearly labeled placements.",
    subject: "Advertising inquiry",
    cta: "Advertise with us",
  },
  {
    icon: Building2,
    title: "Website owners",
    description: "Own a health or pet content site? We acquire and grow quality properties.",
    subject: "Website acquisition",
    cta: "Talk about a sale",
  },
];

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className={eyebrow}>Partner With Us</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s talk about working together.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every inquiry is read by a member of our team. Tell us about your program or
            brand and what you have in mind.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {partnerPaths.map((p) => (
            <a
              key={p.title}
              href={mailto(p.subject)}
              className="group flex flex-col rounded-2xl border border-border bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg"
            >
              <p.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
              <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                {p.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Prefer to write directly?{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-foreground underline underline-offset-4 hover:text-brand">
            {CONTACT_EMAIL}
          </a>
        </p>
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
        <TrustStrip />
        <WhoWeAre />
        <Verticals />
        <WhatWeBuild />
        <Partners />
        <Standards />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
