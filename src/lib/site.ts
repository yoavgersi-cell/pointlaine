export const SITE_URL = "https://pointlaine.com";
export const CONTACT_EMAIL = "partner@pointlaine.com";

export const LEGAL_LAST_UPDATED = "October 15, 2026";

export const NAV_LINKS = [
  { href: "/#advertisers", label: "Advertisers" },
  { href: "/#readers", label: "Our Readers" },
  { href: "/#verticals", label: "Verticals" },
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

/*
 * Business identity shown on /contact. Payoneer and affiliate networks check this
 * page against your account details, so the address must match your Payoneer
 * profile exactly. Empty fields are not shown.
 */
export const BUSINESS = {
  legalName: "",
  ownerName: "",
  ownerTitle: "Founder",
  phone: "",
  addressLines: [] as string[],
  registrationNumber: "",
};
