import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { CONTACT_EMAIL, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Standards",
  description:
    "How Pointlaine researches, writes, reviews and updates content across its network — and how we keep editorial work independent of commercial relationships.",
  alternates: { canonical: "/editorial-standards" },
};

export default function EditorialStandardsPage() {
  return (
    <LegalPage
      eyebrow="Trust"
      title="Editorial Standards"
      intro="Readers come to our properties to make real decisions. These standards describe how we research, write, review and maintain content across the Pointlaine network."
    >
      <h2>Our mission</h2>
      <p>
        Our goal is simple: help people make better decisions online. Every article, comparison
        and tool we publish should leave a reader better informed than when they arrived.
      </p>

      <h2>Editorial independence</h2>
      <p>
        Pointlaine earns revenue through advertising and affiliate relationships (see our{" "}
        <a href="/disclosure">Advertising Disclosure</a>). Those relationships never determine
        what we write. Specifically:
      </p>
      <ul>
        <li>Partners cannot pay for a higher ranking, a better score or a favorable review.</li>
        <li>Partners do not review or approve our content before it is published.</li>
        <li>We cover and compare products whether or not we have a commercial relationship with the provider.</li>
        <li>Commercial and editorial decisions are made separately.</li>
      </ul>

      <h2>How we research</h2>
      <p>
        We base our content on primary sources wherever possible — official provider documentation,
        contract terms, pricing pages, regulatory filings, government data and recognized
        consumer-review platforms. Where we rank or score products, we use documented criteria
        that are applied consistently across every product in a category, and we explain those
        criteria on the relevant site.
      </p>

      <h2>Accuracy and review</h2>
      <ul>
        <li>Factual claims are checked against sources before publication.</li>
        <li>Pricing, plan details and other fast-changing information are reviewed on a regular schedule.</li>
        <li>Pages show when they were last updated, so readers can judge how current the information is.</li>
        <li>Content on health, finance and other sensitive topics is informational and is not a substitute for professional advice.</li>
      </ul>

      <h2 id="health">Health and telehealth content</h2>
      <p>
        Our telehealth coverage — including weight loss and GLP-1 medications, testosterone
        replacement therapy, hormone replacement therapy and erectile dysfunction treatment —
        is held to additional standards:
      </p>
      <ul>
        <li>Medical information is sourced from regulators, professional bodies and peer-reviewed research.</li>
        <li>We note when a treatment requires a prescription and evaluation by a licensed clinician.</li>
        <li>We do not describe compounded medications as FDA-approved, and we do not promise specific results.</li>
        <li>We describe common risks and side effects alongside potential benefits.</li>
        <li>Content is informational and never a substitute for advice from a qualified healthcare provider.</li>
      </ul>

      <h2 id="pet">Pet care content</h2>
      <p>
        Pet insurance, supplement and food coverage is based on policy documents, manufacturer
        information and veterinary sources. We explain coverage exclusions and waiting periods,
        and we encourage readers to involve their veterinarian in health and diet decisions.
      </p>

      <h2 id="corrections">Corrections</h2>
      <p>
        We work hard to be accurate, but mistakes happen. If you believe something on one of our
        properties is wrong or out of date, please{" "}
        <a href={mailto("Content correction")}>let us know</a> at {CONTACT_EMAIL}, including the
        page URL and what you believe is incorrect. We review every report and update content
        promptly when a correction is warranted.
      </p>

      <h2>Use of AI and automation</h2>
      <p>
        We may use software tools, including AI-assisted tools, to help with research, drafting
        and data processing. People on our team remain responsible for what we publish, and
        content is reviewed for accuracy before it goes live.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these standards? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
