import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pointlaine collects, uses and protects information, and the choices you have.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains what information Pointlaine collects when you visit pointlaine.com, how we use it, and the choices you have."
    >
      <h2>Information we collect</h2>
      <p><strong>Information you give us.</strong> If you email us, we receive your name, email address and anything else you choose to include in your message.</p>
      <p>
        <strong>Information collected automatically.</strong> Like most websites, our servers and
        service providers may automatically record technical information such as your IP address,
        browser type, device type, referring page, pages visited and the date and time of your
        visit. We may use cookies and similar technologies for this purpose.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To operate, secure and improve our websites.</li>
        <li>To respond to inquiries and communicate with partners.</li>
        <li>To understand, in aggregate, how visitors use our sites.</li>
        <li>To attribute referrals to affiliate partners, where applicable.</li>
        <li>To comply with legal obligations and enforce our terms.</li>
      </ul>

      <h2>Cookies and analytics</h2>
      <p>
        We and our service providers may use cookies, pixels and similar technologies for
        analytics and, on some properties, for affiliate attribution and advertising. You can
        control or delete cookies through your browser settings. Blocking some cookies may affect
        how parts of a site work.
      </p>

      <h2>How we share information</h2>
      <p>We share information only as needed to run our business, including with:</p>
      <ul>
        <li>Service providers that host, secure and analyze our websites on our behalf.</li>
        <li>Affiliate partners and networks, limited to what is needed to attribute a referral.</li>
        <li>Authorities, when required by law or to protect our rights and users.</li>
        <li>A successor entity, in connection with a merger, acquisition or sale of assets.</li>
      </ul>

      <h2>Data retention and security</h2>
      <p>
        We keep information only as long as needed for the purposes above, and use reasonable
        technical and organizational measures to protect it. No method of transmission or storage
        is completely secure.
      </p>

      <h2>Your rights and choices</h2>
      <p>
        Depending on where you live — including the European Economic Area, the United Kingdom
        and certain U.S. states such as California — you may have the right to access, correct,
        delete or obtain a copy of your personal information, to object to or restrict certain
        processing, and to opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal
        information or targeted advertising. To make a request, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will not discriminate against
        you for exercising these rights.
      </p>

      <h2>Children</h2>
      <p>Our websites are not directed to children under 13, and we do not knowingly collect personal information from them.</p>

      <h2>Other properties and third-party sites</h2>
      <p>
        Each property in the Pointlaine network may publish its own privacy policy, which applies
        to that site. Our sites link to third-party websites whose privacy practices we do not
        control; please review their policies.
      </p>

      <h2>Changes</h2>
      <p>We may update this policy from time to time. The &quot;last updated&quot; date above shows when it last changed.</p>

      <h2>Contact</h2>
      <p>Questions about privacy? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    </LegalPage>
  );
}
