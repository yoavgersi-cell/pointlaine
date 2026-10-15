import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL, mailto } from "@/lib/site";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Telehealth & Wellness", href: "/#verticals" },
      { label: "Pet Care", href: "/#verticals" },
      { label: "For Affiliate Programs", href: "/#partners" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Editorial Standards", href: "/editorial-standards" },
      { label: "Advertising Disclosure", href: "/disclosure" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Affiliate Partnerships", href: mailto("Affiliate partnership inquiry") },
      { label: "Advertise With Us", href: mailto("Advertising inquiry") },
      { label: "Sell Your Website", href: mailto("Website acquisition") },
      { label: "Report a Content Issue", href: mailto("Content correction") },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  FOOTER                                                            */
/* ------------------------------------------------------------------ */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
              <LogoMark />
              pointlaine
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              An independent digital publisher helping consumers make better
              decisions in telehealth and pet care.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-foreground hover:text-brand transition-colors"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {col.title}
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-foreground hover:text-muted-foreground transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Some properties in the Pointlaine network earn commissions or referral fees when
            readers click links or purchase products. This never affects our editorial
            assessments. <Link href="/disclosure" className="underline underline-offset-2 hover:text-foreground">Learn how we make money</Link>.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Pointlaine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
