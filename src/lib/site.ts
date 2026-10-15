export const SITE_URL = "https://pointlaine.com";
export const CONTACT_EMAIL = "partner@pointlaine.com";

export const LEGAL_LAST_UPDATED = "October 15, 2026";

export const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#verticals", label: "Verticals" },
  { href: "/#partners", label: "For Partners" },
  { href: "/#standards", label: "Standards" },
];

export function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
