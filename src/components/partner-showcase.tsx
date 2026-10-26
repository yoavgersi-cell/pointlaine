import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";

/* Mid-page showcase: copy on the left, the hero photo on the right with floating product cards.
 * The photo is read from public/hero.png at build time; until it exists a soft panel stands in. */
const HERO_FILE = path.join(process.cwd(), "public", "hero.png");

const features = ["Transparent pricing", "Verified reviews", "Expert insights", "Easy comparison"];

function FloatingCard({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-2xl border border-line bg-white/95 p-4 shadow-[0_24px_48px_-24px_rgba(35,33,30,0.3)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

export function PartnerShowcase() {
  const hasPhoto = fs.existsSync(HERO_FILE);

  return (
    <section className="overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">For brands & partners</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[2.75rem]">
            Connect with readers who are ready to choose.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We work with dozens of partners across 10 verticals. Our sites help people compare providers
            side by side, with real published prices, verified reviews and expert-reviewed content, so the
            customers we send already know why they picked you.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every placement is clearly disclosed and built to your program&apos;s rules.
          </p>
          <Link
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Become a partner
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#EFE9DE] to-[#E3ECE6]">
            {hasPhoto && (
              <Image
                src="/hero.png"
                alt="A person comparing providers on a laptop"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            )}
          </div>

          <FloatingCard className="-left-4 top-8 w-48 sm:-left-10">
            <p className="text-xs font-semibold">Top features</p>
            <ul className="mt-3 space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand">
                    <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </FloatingCard>

          <FloatingCard className="-right-3 top-1/2 w-44 -translate-y-1/2 sm:-right-8">
            <p className="text-xs font-semibold">Compare providers</p>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {["#C9D8F2", "#CDE6D7", "#F3E2BF"].map((c) => (
                <div key={c} className="rounded-lg border border-line p-1.5">
                  <span className="mx-auto block h-4 w-4 rounded" style={{ background: c }} />
                  <span className="mt-1.5 flex justify-center gap-px">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Star key={i} className="h-1.5 w-1.5 fill-[#E2B33C] text-[#E2B33C]" />
                    ))}
                  </span>
                  <span className="mt-1.5 block h-1.5 rounded-full bg-brand" />
                </div>
              ))}
            </div>
          </FloatingCard>

          <FloatingCard className="-bottom-5 left-6 flex items-center gap-5 sm:left-10">
            <div>
              <p className="font-display text-2xl font-semibold leading-none text-brand">10</p>
              <p className="mt-1 text-[11px] text-muted-foreground">Verticals</p>
            </div>
            <span className="h-8 w-px bg-line" />
            <div>
              <p className="font-display text-2xl font-semibold leading-none text-brand">Dozens</p>
              <p className="mt-1 text-[11px] text-muted-foreground">of active partners</p>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
}
