import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BUSINESS, CONTACT_EMAIL, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Pointlaine: business details, email, phone and address.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const rows: [string, React.ReactNode][] = [
    ["Company", BUSINESS.legalName || "Pointlaine"],
    ...(BUSINESS.registrationNumber ? [["Registration no.", BUSINESS.registrationNumber] as [string, string]] : []),
    ...(BUSINESS.ownerName
      ? [["Owner", `${BUSINESS.ownerName}${BUSINESS.ownerTitle ? `, ${BUSINESS.ownerTitle}` : ""}`] as [string, string]]
      : []),
    [
      "Email",
      <a key="e" href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline underline-offset-4">
        {CONTACT_EMAIL}
      </a>,
    ],
    ...(BUSINESS.phone
      ? [
          [
            "Phone",
            <a key="p" href={`tel:${BUSINESS.phone.replace(/[^+\d]/g, "")}`} className="text-brand underline underline-offset-4">
              {BUSINESS.phone}
            </a>,
          ] as [string, React.ReactNode],
        ]
      : []),
    ...(BUSINESS.addressLines.length
      ? [
          [
            "Address",
            <address key="a" className="not-italic">
              {BUSINESS.addressLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </address>,
          ] as [string, React.ReactNode],
        ]
      : []),
    ["Website", "pointlaine.com"],
  ];

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 pt-16">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">Get in touch with Pointlaine</h1>
          <p className="mt-5 font-serif text-lg leading-relaxed text-muted-foreground">
            Pointlaine is a digital publishing and online media company. We own and operate content
            and comparison websites and work with affiliate programs, networks and advertisers.
          </p>

          <dl className="mt-12 divide-y divide-line border-y border-line">
            {rows.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                <dt className="text-sm text-muted-foreground">{k}</dt>
                <dd className="text-base font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {[
              ["Affiliate partnerships", "Affiliate partnership inquiry"],
              ["Advertising", "Advertising inquiry"],
              ["Content corrections", "Content correction"],
            ].map(([label, subject]) => (
              <a
                key={label}
                href={mailto(subject)}
                className="rounded-md border border-line bg-white px-5 py-4 text-sm font-semibold transition-colors hover:border-ink"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
