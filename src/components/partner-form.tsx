"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/site";

/* No backend: the form opens the visitor's email app with the details filled in. */
export function PartnerForm() {
  const [opened, setOpened] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = `Partnership inquiry from ${company || name}`;
    const body = `Name: ${name}\nCompany URL: ${company}\nEmail: ${email}\n\nWhat we have in mind:\n`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  const field =
    "h-12 w-full rounded-lg border border-line bg-white px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-white p-3 shadow-sm">
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
        <label className="sr-only" htmlFor="pf-name">Full name</label>
        <input id="pf-name" name="name" required placeholder="Full name *" className={field} autoComplete="name" />
        <label className="sr-only" htmlFor="pf-company">Company URL</label>
        <input id="pf-company" name="company" required placeholder="Company URL *" className={field} autoComplete="url" />
        <label className="sr-only" htmlFor="pf-email">Work email</label>
        <input id="pf-email" name="email" type="email" required placeholder="Work email *" className={field} autoComplete="email" />
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
      {opened && (
        <p className="px-2 pb-1 pt-3 text-xs text-muted-foreground">
          Your email app should open with these details. If it didn&apos;t, write to {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}
