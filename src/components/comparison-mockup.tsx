import { ArrowRight, ArrowUpRight, Cat, Check, Dna, Dog, Droplet, Dumbbell, HeartPulse, MessageCircleHeart, PawPrint, Scale, ShieldCheck, ShieldPlus, Sprout, Stethoscope } from "lucide-react";

/*
 * Illustrative product shots modelled on our comparison sites, drawn in CSS.
 * Provider names and prices are left as placeholders on purpose.
 */
function Bar({ w, className = "" }: { w: string; className?: string }) {
  return <span className={`block h-2 rounded-full bg-[#E7E3DA] ${className}`} style={{ width: w }} />;
}

function Frame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_60px_-30px_rgba(35,33,30,0.25)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E7E3DA]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E7E3DA]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E7E3DA]" />
        <span className="ml-3 h-5 flex-1 rounded-md bg-paper" />
      </div>
      {children}
    </div>
  );
}

const categories = [
  { icon: Scale, label: "Weight Loss" },
  { icon: Dumbbell, label: "TRT" },
  { icon: Droplet, label: "HRT" },
  { icon: Sprout, label: "Hair Growth" },
  { icon: MessageCircleHeart, label: "Online Therapy" },
  { icon: HeartPulse, label: "ED Treatment" },
];

const petCategories = [
  { icon: Dog, label: "Fresh Dog Food", links: ["Compare services", "Reviews"] },
  { icon: Cat, label: "Fresh Cat Food", links: ["Compare services", "Reviews"] },
  { icon: ShieldPlus, label: "Pet Insurance", links: ["Compare plans", "Reviews"] },
  { icon: Dna, label: "Dog DNA Tests", links: ["Compare tests", "Reviews"] },
];

/* Pet care hub, modelled on our pet comparison site. */
function PetHubWindow({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      <div className="bg-gradient-to-b from-[#F6EAD3] to-white px-5 pb-6 pt-7 text-center sm:px-7">
        <p
          className="text-xl font-bold leading-tight text-[#1F4D33] sm:text-[1.6rem]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Everything your pet deserves, compared honestly
        </p>
        <div className="mx-auto mt-3 max-w-[280px] space-y-1.5">
          <Bar w="100%" />
          <Bar w="65%" className="mx-auto" />
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-2.5 text-left">
          {petCategories.map((c) => (
            <li key={c.label} className="flex items-center gap-3 rounded-xl border border-line bg-white p-3">
              <c.icon className="h-5 w-5 shrink-0 text-[#1F4D33]" strokeWidth={1.6} />
              <div className="min-w-0">
                <p className="text-xs font-semibold">{c.label}</p>
                <p className="mt-0.5 truncate text-[10px] text-muted-foreground">{c.links.join(" · ")}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}

/* Health hub, modelled on our telehealth comparison site. */
function HealthHubWindow({ className = "" }: { className?: string }) {
  return (
    <Frame className={className}>
      <div className="bg-gradient-to-b from-[#EEF3F8] to-white px-5 pb-6 pt-7 text-center sm:px-8">
        <p className="font-display text-xl font-semibold leading-tight sm:text-2xl">
          Compare the best health &amp; wellness services
        </p>
        <div className="mx-auto mt-3 max-w-[300px] space-y-1.5">
          <Bar w="100%" />
          <Bar w="70%" className="mx-auto" />
        </div>
        <p className="mt-4 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-brand" strokeWidth={2} />
          Reviewed for medical accuracy · How we review
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-2.5 text-left sm:grid-cols-3">
          {categories.map((c) => (
            <li key={c.label} className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-3 py-3">
              <c.icon className="h-4 w-4 shrink-0 text-[#2D6FA8]" strokeWidth={1.75} />
              <span className="text-xs font-semibold">{c.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}

function Tag({ icon: Icon, label, className }: { icon: typeof PawPrint; label: string; className: string }) {
  return (
    <span
      className={`absolute z-20 inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-semibold shadow-[0_10px_24px_-12px_rgba(35,33,30,0.35)] ${className}`}
    >
      <Icon className="h-3.5 w-3.5 text-brand" strokeWidth={2} />
      {label}
    </span>
  );
}

/* Hero: two of our sites stacked like a deck. Hovering fans the back window out. */
export function CategoryHubMockup() {
  return (
    <div className="group relative mx-auto w-full max-w-[600px]" aria-hidden="true">
      <div className="absolute right-0 top-0 w-[80%] origin-bottom-left rotate-[3deg] transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-3 motion-safe:group-hover:translate-x-2 motion-safe:group-hover:rotate-[5deg]">
        <PetHubWindow />
        <Tag icon={PawPrint} label="Pet care" className="-top-3 right-6" />
      </div>
      <div className="relative z-10 mt-[172px] w-[88%] -rotate-[1.5deg] transition-transform duration-500 ease-out sm:mt-[182px] motion-safe:group-hover:translate-y-1 motion-safe:group-hover:-rotate-[2.5deg]">
        <HealthHubWindow />
        <Tag icon={Stethoscope} label="Telehealth" className="-top-3 left-6" />
      </div>
      <div className="absolute -bottom-6 -left-3 z-20 hidden rounded-xl border border-line bg-white px-4 py-3 shadow-[0_20px_40px_-20px_rgba(35,33,30,0.3)] sm:block lg:-left-8">
        <p className="text-[11px] text-muted-foreground">Advertising disclosure</p>
        <p className="text-xs font-semibold">Shown above the first link</p>
      </div>
    </div>
  );
}

const providers = [
  { score: "9.8", tint: "#DDE6F0" },
  { score: "9.7", tint: "#E6E1F0" },
  { score: "9.6", tint: "#E1EDE6" },
];

/* Advertiser section: "top-rated providers" cards with scores and CTAs. */
export function ProviderCardsMockup() {
  return (
    <div className="mx-auto w-full max-w-[600px]" aria-hidden="true">
      <Frame>
        <div className="bg-[#F7F7F5] p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2D6FA8]">Weight loss</p>
          <div className="mt-1 flex items-end justify-between gap-4">
            <p className="font-display text-lg font-semibold">Top-rated providers</p>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2D6FA8]">
              See all <ArrowRight className="h-3 w-3" />
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {providers.map((p, i) => (
              <div key={p.score} className={`rounded-xl border border-line bg-white p-3.5 ${i === 2 ? "hidden sm:block" : ""}`}>
                <div className="flex items-start justify-between gap-2">
                  <span className="mt-1 h-5 w-16 rounded-md" style={{ background: p.tint }} />
                  <span className="rounded-md bg-[#12466F] px-1.5 py-1 text-center leading-none text-white">
                    <span className="block text-[13px] font-semibold">{p.score}</span>
                    <span className="block text-[8px] opacity-80">/ 10</span>
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  {["90%", "75%", "85%"].map((w) => (
                    <li key={w} className="flex items-center gap-1.5">
                      <Check className="h-3 w-3 shrink-0 text-brand" strokeWidth={3} />
                      <Bar w={w} />
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[10px] text-muted-foreground">From <span className="font-semibold text-foreground">$—</span>/month</p>
                <span className="mt-2 flex items-center justify-center gap-1 rounded-lg bg-[#12466F] py-2 text-[10px] font-semibold text-white">
                  Visit site <ArrowUpRight className="h-3 w-3" />
                </span>
                <span className="mt-1.5 block text-center text-[10px] font-semibold text-[#2D6FA8]">Read review</span>
              </div>
            ))}
          </div>
        </div>
      </Frame>
    </div>
  );
}
