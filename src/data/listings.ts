export type Listing = {
  id: number;
  image: string;
  status: "active" | "sold";
  address: string;
  city: string;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  price: string | null;
  priceNum: number;
};

export const LISTINGS: Listing[] = [
  {
    id: 1,
    image: "/images/listing-1.jpg",
    status: "active",
    address: "1212 S El Camino Real",
    city: "San Clemente, CA",
    beds: 4,
    baths: 3,
    sqft: null,
    price: "$1,000,000",
    priceNum: 1000000,
  },
  {
    id: 2,
    image: "/images/listing-2.jpg",
    status: "active",
    address: "Address Coming Soon",
    city: "San Clemente, CA",
    beds: null,
    baths: null,
    sqft: null,
    price: null,
    priceNum: 0,
  },
];
