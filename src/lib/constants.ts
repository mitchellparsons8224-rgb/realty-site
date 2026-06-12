export const SITE_CONFIG = {
  agentName: "Mitchell Parsons",
  agentBrand: "MP Realty",
  agentTitle: "Licensed Real Estate Agent",
  brokerageName: "Your Brokerage Name",
  brokerageLicense: "CA DRE# 02193980",
  phone: "(555) 000-0000",
  email: "hello@mprealty.com",
  instagramHandle: "@mprealty",
  siteUrl: "https://mprealty.com",
  metaDescription:
    "Mitchell Parsons — Licensed real estate agent. Exceptional residential homes, expertly represented.",
} as const;

export const NAV_LEFT = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "My Story",     href: "/about" },
      { label: "Track Record", href: "/about#track-record" },
    ],
  },
  {
    label: "Properties",
    href: "/listings",
    children: [
      { label: "Active Listings", href: "/listings" },
      { label: "Sold",            href: "/listings?status=sold" },
    ],
  },
] as const;

export const NAV_RIGHT = [
  { label: "Home Valuation", href: "/valuation" },
  { label: "Let's Connect",  href: "/contact" },
] as const;
