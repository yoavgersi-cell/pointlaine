import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";

/* ------------------------------------------------------------------ */
/*  HEADER — desktop nav + no-JS mobile menu (<details>)              */
/* ------------------------------------------------------------------ */
export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground"
          aria-label="Pointlaine home"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-orange" aria-hidden="true" />
          pointlaine
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Partner With Us
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </nav>

        <details className="group relative md:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-border [&::-webkit-details-marker]:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 group-open:hidden" strokeWidth={1.5} />
            <X className="hidden h-5 w-5 group-open:block" strokeWidth={1.5} />
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 top-12 w-60 rounded-xl border border-border bg-white p-2 shadow-lg"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-1 flex items-center justify-center gap-1.5 rounded-lg bg-foreground px-3 py-2.5 text-sm font-medium text-background"
            >
              Partner With Us
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
