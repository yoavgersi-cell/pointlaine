import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Search } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CategoryHubMockup, ProviderCardsMockup } from "@/components/comparison-mockup";
import { PartnerForm } from "@/components/partner-form";
import { PartnerShowcase } from "@/components/partner-showcase";
import { LogoStrip } from "@/components/logo-strip";
import { PARTNER_METRICS } from "@/lib/site";

const kicker = "text-xs font-semibold uppercase tracking-[0.16em] text-brand";
const h2 = "font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[2.75rem]";
const lead = "text-lg leading-relaxed text-muted-foreground";
const primaryBtn =
  "inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90";

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="overflow-hidden bg-paper pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-16 lg:grid-cols-[1fr_1.05fr] lg:pb-32 lg:pt-24">
        <div>
          <p className="font-display text-xl font-medium text-foreground/75">Helping people make better decisions online.</p>
          <h1 className="mt-4 font-display text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-[4.1rem]">
            Connecting high-intent consumers with the right brands.
          </h1>
          <p className={`mt-7 max-w-xl ${lead}`}>
            Pointlaine builds and operates content and comparison sites that help people research,
            compare and choose with confidence. Readers find us through search while they are deciding,
            and we introduce them to partners that fit what they need.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="#contact" className={primaryBtn}>
              Partner with us
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href="#advertisers"
              className="text-sm font-semibold text-foreground underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-brand"
            >
              How we work with brands
            </Link>
          </div>
        </div>
        <CategoryHubMockup />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  STATEMENT + STATS                                                 */
/* ------------------------------------------------------------------ */
const stats = PARTNER_METRICS.length
  ? PARTNER_METRICS
  : [
      { value: "4", label: "Owned & operated sites" },
      { value: "20+", label: "Active partners" },
      { value: "10", label: "Verticals" },
      { value: "100%", label: "Search & organic traffic" },
    ];

function Statement() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={h2}>Performance publishing, built on search.</h2>
          <p className={`mt-6 ${lead}`}>
            We reach people while they are actively researching a decision, and give them clear,
            well-sourced guidance. That earns their trust, and it sends our partners customers who already
            understand what they are signing up for.
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-line pt-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dd className="font-display text-5xl font-semibold tracking-tight text-brand tabular-nums sm:text-6xl">{s.value}</dd>
              <dt className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOR ADVERTISERS                                                   */
/* ------------------------------------------------------------------ */
const advertiserPoints = [
  "SEO and organic search only: no paid arbitrage, pop, push or incentivized traffic",
  "Your program terms followed: no brand bidding, unapproved coupons or altered creative",
  "Health content reviewed for medical accuracy, with real published prices",
  "Clear affiliate disclosures on every page, consistent with FTC guidance",
];

function Advertisers() {
  return (
    <section id="advertisers" className="scroll-mt-16 bg-stone">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_1fr] lg:py-32">
        <div className="order-2 lg:order-1">
          <ProviderCardsMockup />
        </div>
        <div className="order-1 lg:order-2">
          <p className={kicker}>For advertisers & affiliate programs</p>
          <h2 className={`mt-4 ${h2}`}>Be there when they compare.</h2>
          <p className={`mt-6 ${lead}`}>
            Our readers arrive mid-decision, comparing prices, eligibility and fine print. We put your brand
            in front of them with accurate, compliant content, so the customers we send are ready to act
            and more likely to stay.
          </p>
          <ul className="mt-8 space-y-3.5">
            {advertiserPoints.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] leading-relaxed">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                  <Check className="h-3 w-3 text-brand" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link href="#contact" className={`mt-10 ${primaryBtn}`}>
            Reach high-intent consumers
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  READER INTENT                                                     */
/* ------------------------------------------------------------------ */
const exampleQueries = [
  "glp-1 weight loss program cost without insurance",
  "online trt clinic that includes lab testing",
  "pet insurance for senior dogs with pre-existing conditions",
  "is a home warranty worth it for an older house",
  "best telehealth hrt for menopause",
  "fresh cat food subscription vs dry food",
];

function Intent() {
  return (
    <section id="readers" className="scroll-mt-16 bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32 [&>*]:min-w-0">
        <div>
          <p className={kicker}>Our readers</p>
          <h2 className={`mt-4 ${h2}`}>People who arrive already deciding.</h2>
          <p className={`mt-6 ${lead}`}>
            We don&apos;t buy traffic. Every reader reaches a Pointlaine site from a search engine or by
            coming back on their own. By the time they click through to a partner, they have read how the
            product works, what it costs and who it is for.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6 sm:p-7">
          <p className="text-sm font-semibold">Searches our content is built to answer</p>
          <ul className="mt-5 space-y-2.5">
            {exampleQueries.map((q) => (
              <li key={q} className="flex items-start gap-3 rounded-full bg-paper px-4 py-2.5 text-sm">
                <Search className="mt-[3px] h-3.5 w-3.5 shrink-0 text-muted-foreground" strokeWidth={2} />
                <span className="min-w-0">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  VERTICALS                                                         */
/* ------------------------------------------------------------------ */
const verticals = [
  { name: "Telehealth", items: ["Weight loss & GLP-1", "TRT", "HRT & menopause", "ED", "Hair growth", "Online therapy"] },
  { name: "Insurance", items: ["Pet insurance", "Home warranties & protection plans", "Personal insurance"] },
  { name: "Consumer services", items: ["Dog & cat food", "Pet supplements", "Home services", "Subscriptions & everyday services"] },
];

function Verticals() {
  return (
    <section id="verticals" className="scroll-mt-16 border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <p className={`text-center ${kicker}`}>Our verticals</p>
        <h2 className={`mx-auto mt-4 max-w-2xl text-center ${h2}`}>10 verticals where research comes before buying.</h2>
        <div className="mt-16 grid gap-y-10 md:grid-cols-3">
          {verticals.map((v, i) => (
            <div key={v.name} className={`md:border-l md:border-line md:px-10 ${i === 0 ? "md:border-l-0 md:pl-0" : ""}`}>
              <h3 className="font-display text-xl font-semibold uppercase tracking-[0.04em]">{v.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {v.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-14 text-center text-sm text-muted-foreground">
          Three core areas, 10 verticals in total. New categories are added as we build and acquire properties.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PROCESS                                                           */
/* ------------------------------------------------------------------ */
const onboarding = [
  ["Introduction", "We share our sites, traffic sources and audience with your team."],
  ["Compliance review", "We agree on approved claims, creative and brand rules before launch."],
  ["Launch", "Placements go live with tracking and disclosures in place."],
  ["Review", "We go over lead quality and performance with you every month."],
];

function Process() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <div className="max-w-2xl">
          <p className={kicker}>Working together</p>
          <h2 className={`mt-4 ${h2}`}>How a new program goes live.</h2>
        </div>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {onboarding.map(([title, body], i) => (
            <li key={title} className="rounded-2xl border border-line bg-white p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft font-display text-sm font-semibold text-brand">
                {i + 1}
              </span>
              <p className="mt-5 font-display text-lg font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
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
  ["Editorial standards", "How we research, review and correct content, including health-specific rules.", "/editorial-standards"],
  ["Advertising disclosure", "How we make money and what compensation can and cannot affect.", "/disclosure"],
  ["Privacy policy", "What we collect, why, and the choices readers have.", "/privacy"],
  ["Terms of use", "The terms that govern use of our sites.", "/terms"],
];

function Standards() {
  return (
    <section id="standards" className="scroll-mt-16 bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.3fr] lg:py-28">
        <div>
          <p className={kicker}>Trust & standards</p>
          <h2 className={`mt-4 ${h2}`}>Partners can&apos;t buy a ranking.</h2>
          <p className={`mt-6 ${lead}`}>
            Our policies apply to every site in the network. We publish them so readers and partners can hold
            us to them.
          </p>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {standards.map(([title, body, href]) => (
            <li key={href}>
              <Link href={href} className="group flex items-start justify-between gap-6 py-5">
                <span>
                  <span className="block font-display text-lg font-semibold group-hover:text-brand">{title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{body}</span>
                </span>
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  strokeWidth={2}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT FORM                                                      */
/* ------------------------------------------------------------------ */
function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-stone">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className={h2}>Let&apos;s grow together.</h2>
          <p className={lead}>
            Tell us who you are and we&apos;ll get back to you about working together. A person on our team
            reads every message.
          </p>
        </div>
        <div className="mt-10">
          <PartnerForm />
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Prefer the details?{" "}
          <Link href="/contact" className="font-semibold text-foreground underline underline-offset-4 hover:text-brand">
            See our contact page
          </Link>
          .
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
        <LogoStrip />
        <Statement />
        <Advertisers />
        <Intent />
        <PartnerShowcase />
        <Verticals />
        <Process />
        <Standards />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
