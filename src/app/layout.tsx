import type { Metadata } from "next";
import { IBM_Plex_Mono, Schibsted_Grotesk, Source_Serif_4 } from "next/font/google";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";
import "./globals.css";

const grotesk = Schibsted_Grotesk({ variable: "--font-grotesk", subsets: ["latin"] });
const serif = Source_Serif_4({ variable: "--font-body-serif", subsets: ["latin"] });
const mono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

const description =
  "Pointlaine is an independent digital publisher helping people make better decisions online, with content and comparison sites across telehealth, pet care, home, finance and other consumer categories.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pointlaine — Digital Publishing & Online Media",
    template: "%s | Pointlaine",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Pointlaine",
    title: "Pointlaine — Digital Publishing & Online Media",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Pointlaine — Digital Publishing & Online Media",
    description,
  },
  other: {
    "fo-verify": "dffefb55-3f82-4d7d-8e62-f211d0134b8c",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pointlaine",
  url: SITE_URL,
  description,
  email: CONTACT_EMAIL,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "partnerships",
    email: CONTACT_EMAIL,
  },
  publishingPrinciples: `${SITE_URL}/editorial-standards`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${serif.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
