export const SITE_URL = "https://pointlaine.com";
export const CONTACT_EMAIL = "partner@pointlaine.com";

export const LEGAL_LAST_UPDATED = "October 15, 2026";

export const NAV_LINKS = [
  { href: "/#about", label: "Readers" },
  { href: "/#verticals", label: "Verticals" },
  { href: "/#partners", label: "For Partners" },
  { href: "/#standards", label: "Standards" },
];

export function mailto(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

/*
 * Partner performance figures shown in the "For affiliate programs" section.
 * Only add numbers you can back up with tracking data if a partner asks.
 * The row stays hidden while this list is empty. Example:
 *   { value: "4m 10s", label: "Avg. time on comparison pages" },
 */
export const PARTNER_METRICS: { value: string; label: string }[] = [];
