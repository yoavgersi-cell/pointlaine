import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Advertising Disclosure",
  description:
    "How Pointlaine and its properties make money through advertising and affiliate partnerships, and how we keep that separate from editorial decisions.",
  alternates: { canonical: "/disclosure" },
};

export default function DisclosurePage() {
  return (
    <LegalPage
      eyebrow="Trust"
      title="Advertising Disclosure"
      intro="Our content is free to read. Here's exactly how we pay for it, and how we make sure that doesn't influence what we recommend."
    >
      <h2>How we make money</h2>
      <p>
        Pointlaine operates websites that are supported by advertising and affiliate partnerships.
        When you click certain links on our properties and then sign up for, or purchase, a
        product or service, we may receive a commission or referral fee from the provider. We may
        also display advertising.
      </p>
      <p>
        This comes at no additional cost to you. In some cases, partners give our readers access to
        exclusive discounts or offers.
      </p>

      <h2>What compensation can affect</h2>
      <p>
        Compensation may influence which products we choose to write about and where and how
        links or offers appear on a page (for example, the order in which offers are displayed
        within a clearly labeled advertising unit).
      </p>

      <h2>What compensation does not affect</h2>
      <ul>
        <li>Our editorial ratings, scores and written assessments.</li>
        <li>Whether we point out a product&apos;s drawbacks, complaints or limitations.</li>
        <li>The criteria we use to evaluate products.</li>
      </ul>
      <p>
        See our <a href="/editorial-standards">Editorial Standards</a> for more on how we keep
        editorial and commercial work separate.
      </p>

      <h2>How we label it</h2>
      <p>
        Pages that contain affiliate links carry a clear disclosure near the top of the page, and
        sponsored or advertising placements are labeled as such. We follow applicable guidance on
        endorsements and advertising, including the U.S. Federal Trade Commission&apos;s
        Endorsement Guides.
      </p>

      <h2>Not every option</h2>
      <p>
        Our properties do not cover every company or every product available in the market. We
        encourage readers to compare multiple sources before making a decision.
      </p>

      <h2>Questions</h2>
      <p>
        If you have questions about this disclosure, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
