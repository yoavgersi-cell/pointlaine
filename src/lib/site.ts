export const SITE_URL = "https://pointlaine.com";
export const CONTACT_EMAIL = "partner@pointlaine.com";

export const LEGAL_LAST_UPDATED = "October 15, 2026";

export const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#what-we-build", label: "What We Build" },
  { href: "/#standards", label: "Our Standards" },
  { href: "/#industries", label: "Industries" },
];

export function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
