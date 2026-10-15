import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CONTACT_EMAIL, PARTNER_METRICS, mailto } from "@/lib/site";

/* Shared rail layout: a narrow label column on the left, content on the right. */
function Section({
  id,
  label,
  children,
  className = "",
}: {
  id?: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-16 border-t border-line ${className}`}>
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[200px_1fr] lg:gap-16 lg:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground lg:sticky lg:top-28 lg:self-start">
          {label}
        </p>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO + TRAFFIC PROFILE                                            */
/* ------------------------------------------------------------------ */
const trafficProfile: [string, string][] = [
  ["Acquisition", "SEO and organic search"],
  ["Paid, incentivized, pop or push", "None"],
  ["Reader intent", "Comparing providers before buying"],
  ["Verticals", "Telehealth, pet care, home & more"],
  ["Sites", "4 owned and operated"],
  ["Active partnerships", "18"],
];

function Hero() {
  return (
    <section className="pt-16">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16 lg:pb-28 lg:pt-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">
            Independent digital publisher
          </p>
          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-[4.4rem]">
            We help people make better decisions online.
          </h1>
          <p className="mt-7 max-w-xl font-serif text-xl leading-relaxed text-muted-foreground">
            Pointlaine owns and operates content and comparison sites across consumer
            categories, from telehealth to pet care. Readers find us through search while they
            are deciding, and we send them to partners ready to act.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="#partners"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
            >
              Work with us
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href="/editorial-standards"
              className="text-sm font-semibold text-foreground underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-brand"
            >
              Read our editorial standards
            </Link>
          </div>
        </div>

        <aside aria-labelledby="profile-title" className="rounded-lg bg-ink p-7 text-paper sm:p-8">
          <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-4">
            <h2 id="profile-title" className="text-base font-semibold">Traffic profile</h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50">Network-wide</span>
          </div>
          <dl className="divide-y divide-white/10">
            {trafficProfile.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[1fr_auto] gap-6 py-3.5 text-sm">
                <dt className="text-paper/60">{k}</dt>
                <dd className="text-right font-medium tabular-nums">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  INTENT — the searches readers arrive with                         */
/* ------------------------------------------------------------------ */
const exampleQueries = [
  "glp-1 weight loss program cost without insurance",
  "online trt clinic that includes lab testing",
  "best telehealth hrt for menopause",
  "is a home warranty worth it for an older house",
  "pet insurance for senior dogs with pre-existing conditions",
  "fresh cat food subscription vs dry food",
  "best budgeting app that syncs with my bank",
  "joint supplement for large breed dogs vet recommended",
];

function Intent() {
  return (
    <Section id="about" label="Who our readers are">
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
        People who arrive already deciding.
      </h2>
      <div className="mt-8 grid gap-12 lg:grid-cols-2 [&>*]:min-w-0">
        <div className="max-w-xl space-y-5 font-serif text-lg leading-relaxed text-muted-foreground">
          <p>
            We don&apos;t buy traffic. Every reader on a Pointlaine property got there from a
            search engine or by coming back on their own. They are comparing costs, checking
            eligibility, and reading the fine print, which is the last step before they sign up.
          </p>
          <p>
            That is why our referrals tend to convert and stay. Readers who have already read
            how a program works, what it costs and who it is for are less likely to cancel or ask
            for a refund.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">The kind of searches our content is built to answer</p>
          <ul className="mt-4 space-y-2.5">
            {exampleQueries.map((q) => (
              <li
                key={q}
                className="flex items-start gap-3 rounded-md border border-line bg-white px-4 py-2.5 font-mono text-[13px] text-foreground"
              >
                <Search className="mt-[3px] h-3.5 w-3.5 shrink-0 text-muted-foreground" strokeWidth={2} />
                <span className="min-w-0">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  VERTICALS                                                         */
/* ------------------------------------------------------------------ */
const verticals = [
  {
    name: "Telehealth",
    lede: "Guides and provider comparisons for people considering online care.",
    categories: [
      ["Weight loss & GLP-1", "Medical weight-loss programs, costs, eligibility"],
      ["TRT", "Testosterone therapy providers, labs, monitoring"],
      ["HRT & menopause", "Hormone therapy and perimenopause care"],
      ["ED", "Treatment options and online prescribers"],
    ],
  },
  {
    name: "Pet care",
    lede: "Practical, research-backed help for dog and cat owners.",
    categories: [
      ["Pet insurance", "Coverage, exclusions, waiting periods, claims"],
      ["Pet supplements", "Joint, skin, digestive and calming"],
      ["Dog food", "Fresh, subscription and traditional"],
      ["Cat food", "Wet, dry and fresh options"],
    ],
  },
];

const moreCategories = [
  ["Home & home services", "Home warranties, home services and protection plans"],
  ["Personal finance & insurance", "Insurance, banking and everyday money decisions"],
  ["Consumer technology", "Software, subscriptions, streaming and smart home"],
  ["Lifestyle & family", "Wellness, travel, parenting and everyday essentials"],
];

function Verticals() {
  return (
    <Section id="verticals" label="What we cover">
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
        Consumer categories where research comes before buying.
      </h2>
      <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground">
        We go where people need clear, trustworthy information before they commit. Telehealth
        and pet care are two of our largest areas today, alongside a growing set of other
        categories.
      </p>
      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10">
        {verticals.map((v) => (
          <div key={v.name}>
            <h3 className="border-b-2 border-ink pb-3 text-xl font-semibold">{v.name}</h3>
            <p className="mt-4 font-serif text-base leading-relaxed text-muted-foreground">{v.lede}</p>
            <dl className="mt-5 divide-y divide-line border-y border-line">
              {v.categories.map(([name, note]) => (
                <div key={name} className="grid gap-1 py-3.5 sm:grid-cols-[170px_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold">{name}</dt>
                  <dd className="text-sm text-muted-foreground">{note}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <div className="mt-14">
        <h3 className="border-b-2 border-ink pb-3 text-xl font-semibold">Also covering</h3>
        <dl className="grid divide-y divide-line border-b border-line sm:grid-cols-2 sm:divide-y-0">
          {moreCategories.map(([name, note]) => (
            <div key={name} className="py-4 sm:border-b sm:border-line sm:pr-8">
              <dt className="text-sm font-semibold">{name}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{note}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-sm text-muted-foreground">
          New categories are added as we build and acquire properties.
        </p>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOR PARTNERS                                                      */
/* ------------------------------------------------------------------ */
const commitments = [
  {
    title: "Search traffic only",
    body: "No paid media arbitrage, incentivized clicks, pop-unders, push notifications, email blasts or cookie stuffing. If a reader clicks your link, they meant to.",
  },
  {
    title: "Your program terms, followed",
    body: "We don't bid on your brand terms, run unapproved coupons or alter your creative. Approved claims stay approved claims.",
  },
  {
    title: "Health-claim compliance",
    body: "In regulated categories like telehealth: no promised results, no calling compounded drugs FDA-approved, and a clear prescription and clinician note on every page.",
  },
  {
    title: "Disclosure on every page",
    body: "Affiliate relationships are disclosed above the first link, in plain language, consistent with FTC guidance.",
  },
];

const onboarding = [
  ["Introduction", "We share our sites, traffic sources and audience with your team."],
  ["Compliance review", "We agree approved claims, creative and brand rules before launch."],
  ["Launch", "Placements go live with tracking and disclosures in place."],
  ["Review", "We go over lead quality and performance with you each month."],
];

function Partners() {
  return (
    <section id="partners" className="scroll-mt-16 bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[200px_1fr] lg:gap-16 lg:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-paper/50 lg:sticky lg:top-28 lg:self-start">
          For affiliate programs
        </p>
        <div className="min-w-0">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
            Quality traffic, and a publisher your compliance team can approve.
          </h2>

          {PARTNER_METRICS.length > 0 && (
            <dl className="mt-12 grid grid-cols-2 gap-8 border-y border-white/15 py-8 md:grid-cols-4">
              {PARTNER_METRICS.map((m) => (
                <div key={m.label}>
                  <dd className="text-4xl font-semibold tabular-nums tracking-tight">{m.value}</dd>
                  <dt className="mt-2 text-sm text-paper/60">{m.label}</dt>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {commitments.map((c) => (
              <div key={c.title} className="border-t border-white/15 pt-5">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 font-serif text-base leading-relaxed text-paper/70">{c.body}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-20 text-lg font-semibold">How a new program goes live</h3>
          <ol className="mt-6 grid gap-px overflow-hidden rounded-lg bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {onboarding.map(([title, body], i) => (
              <li key={title} className="bg-ink p-6">
                <span className="font-mono text-xs text-brand-light">Step {i + 1}</span>
                <p className="mt-3 font-semibold">{title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-paper/65">{body}</p>
              </li>
            ))}
          </ol>

          <a
            href={mailto("Affiliate partnership inquiry")}
            className="mt-12 inline-flex items-center gap-2 rounded-md bg-paper px-5 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Request our partner overview
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
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
    <Section id="standards" label="Our standards">
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
        Partners can&apos;t buy a ranking. Everything else is written down.
      </h2>
      <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground">
        Readers trust us with decisions about their money, health, home and pets. These policies apply
        to every site in the network, and we publish them so partners and readers can hold us
        to them.
      </p>
      <ul className="mt-10 divide-y divide-line border-y border-line">
        {standards.map(([title, body, href]) => (
          <li key={href}>
            <Link href={href} className="group grid items-center gap-2 py-5 sm:grid-cols-[240px_1fr_auto] sm:gap-8">
              <span className="font-semibold group-hover:text-brand">{title}</span>
              <span className="text-sm text-muted-foreground">{body}</span>
              <ArrowUpRight className="hidden h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand sm:block" strokeWidth={2} />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                           */
/* ------------------------------------------------------------------ */
const contactLines = [
  ["Affiliate programs and networks", "Affiliate partnership inquiry"],
  ["Brands and advertisers", "Advertising inquiry"],
  ["Selling a content or comparison site", "Website acquisition"],
];

function Contact() {
  return (
    <Section id="contact" label="Contact">
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
        Talk to the team.
      </h2>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mt-6 inline-block break-all text-2xl font-semibold text-brand underline decoration-2 underline-offset-[6px] hover:decoration-ink sm:text-4xl"
      >
        {CONTACT_EMAIL}
      </a>
      <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
        A person on our team reads every message. Include your program or company name and what
        you have in mind.
      </p>
      <ul className="mt-10 grid gap-3 sm:grid-cols-3">
        {contactLines.map(([label, subject]) => (
          <li key={label}>
            <a
              href={mailto(subject)}
              className="flex h-full items-center justify-between gap-4 rounded-md border border-line bg-white px-5 py-4 text-sm font-semibold transition-colors hover:border-ink"
            >
              {label}
              <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} />
            </a>
          </li>
        ))}
      </ul>
    </Section>
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
        <Intent />
        <Verticals />
        <Partners />
        <Standards />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
