import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LEGAL_LAST_UPDATED } from "@/lib/site";

/* Shared shell for policy / standards pages. */
export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1 bg-white pt-16">
        <div className="border-b border-border bg-secondary/50">
          <div className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
              Back to home
            </Link>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-brand">{eyebrow}</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
            <p className="mt-6 text-xs text-muted-foreground">Last updated: {LEGAL_LAST_UPDATED}</p>
          </div>
        </div>
        <article className="prose-legal mx-auto max-w-3xl px-6 py-16">{children}</article>
      </main>
      <SiteFooter />
    </>
  );
}
