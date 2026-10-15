import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of pointlaine.com.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="By accessing or using pointlaine.com, you agree to these terms. If you don't agree, please don't use the site."
    >
      <h2>Use of the site</h2>
      <p>
        You may use this site for lawful, personal and informational purposes. You agree not to
        misuse the site, interfere with its operation, attempt to access it by automated means in
        a way that places an unreasonable load on it, or use it to infringe the rights of others.
      </p>

      <h2>Informational content only</h2>
      <p>
        Content on this site and across the Pointlaine network is provided for general
        informational purposes. It is not financial, legal, medical, insurance or other
        professional advice. Product details, pricing and availability change frequently; always
        confirm information directly with the provider before making a decision.
      </p>

      <h2>Third-party links and offers</h2>
      <p>
        Our sites link to third-party websites, products and services. We are not responsible for
        their content, terms, privacy practices or performance. Any transaction you enter into
        with a third party is solely between you and that party. See our{" "}
        <a href="/disclosure">Advertising Disclosure</a> for how we may be compensated.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The site and its content, including text, graphics, logos and design, are owned by
        Pointlaine or its licensors and protected by intellectual property laws. You may not copy,
        reproduce or distribute content without our prior written permission, except as permitted
        by law. Third-party trademarks belong to their respective owners.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        The site is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of
        any kind, express or implied, including warranties of accuracy, merchantability, fitness
        for a particular purpose and non-infringement.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Pointlaine will not be liable for any indirect,
        incidental, special, consequential or punitive damages, or any loss arising from your use
        of, or reliance on, the site or any third-party product or service.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. Continued use of the site after changes take
        effect means you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </LegalPage>
  );
}
