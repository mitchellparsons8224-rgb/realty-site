export const SITE_CONFIG = {
  agentName: "Mitchell Parsons",
  agentBrand: "MP Realty",
  agentTitle: "Licensed Real Estate Agent",
  brokerageName: "LUXRE Realty",
  brokerageLicense: "CA DRE# 02193980",
  phone: "(760) 914-0231",
  email: "mitchellparsonsrealty@gmail.com",
  instagram: "https://instagram.com/mprealty",
  linkedin: "https://linkedin.com/in/mparsons04",
  siteUrl: "https://mitchellparsonsrealty.com",
  metaDescription:
    "Mitchell Parsons — Licensed real estate agent. Exceptional residential homes, expertly represented.",
} as const;

export const NAV_LEFT = [
  {
    label: "About",
    href: "/about",
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
  { label: "Contact",        href: "/contact" },
] as const;
