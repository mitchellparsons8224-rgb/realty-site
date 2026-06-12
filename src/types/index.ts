export interface Listing {
  slug: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  status: "Active" | "Pending" | "Sold";
  type: "Single Family" | "Condo" | "Multi-Family" | "Commercial" | "Land";
  beds: number;
  baths: number;
  sqft: number;
  lotSqft?: number;
  yearBuilt?: number;
  description: string;
  highlights: string[];
  images: string[];
  videoUrl?: string;
  listedDate: string;
  closedDate?: string;
  closedPrice?: number;
}

export interface Milestone {
  id: string;
  year: number;
  title: string;
  value?: string;
  description: string;
  category: "Volume" | "Transaction" | "Award" | "Certification";
}
