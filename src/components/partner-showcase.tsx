import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* Mid-page showcase: copy on the left, the hero photo on the right with a floating stats card.
 * The photo is read from public/hero.png at build time; until it exists a soft panel stands in. */
const HERO_FILE = path.join(process.cwd(), "public", "hero.png");

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

        <div className="relative mx-auto w-full max-w-[600px]">
          {hasPhoto ? (
            <Image
              src="/hero.png"
              alt="A person comparing providers on a laptop"
              width={1328}
              height={1184}
              sizes="(min-width: 1024px) 600px, 100vw"
              className="h-auto w-full"
            />
          ) : (
            <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-[#EFE9DE] to-[#E3ECE6]" />
          )}

          <FloatingCard className="-bottom-10 left-0 flex items-center gap-5 sm:-left-4">
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
