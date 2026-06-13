import type { Metadata } from "next";
import Image from "next/image";
import ListingsClient from "./ListingsClient";

export const metadata: Metadata = { title: "Properties" };

export const LISTINGS = [
  {
    id: 1,
    image: "/images/listing-1.jpg",
    status: "For Sale",
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
    status: "For Sale",
    address: "Address Coming Soon",
    city: "San Clemente, CA",
    beds: null,
    baths: null,
    sqft: null,
    price: null,
    priceNum: 0,
  },
];

export default function ListingsPage() {
  return (
    <main style={{ backgroundColor: "var(--color-cream)" }}>

      {/* Hero with search */}
      <section className="relative h-72 md:h-96 w-full overflow-hidden">
        <Image
          src="/images/contact-bg.jpg"
          alt="Properties"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,15,25,0.55) 0%, rgba(10,15,25,0.75) 100%)" }}
        />

        {/* Search bar + filters */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-4">
          {/* Search input */}
          <div className="w-full max-w-2xl flex items-center bg-white" style={{ height: "52px" }}>
            <input
              type="text"
              placeholder="Search by address, city, community, zip..."
              className="flex-1 h-full px-5 font-sans text-sm text-charcoal placeholder:text-stone-400 focus:outline-none"
            />
            <button
              className="h-full px-5 flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--color-charcoal)" }}
              aria-label="Search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>

          {/* Filter strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["Active Listings", "0+ Beds", "0+ Baths", "Price", "High → Low"].map((label, i) => (
              <button
                key={label}
                className="font-sans text-xs font-medium tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-1.5"
              >
                {i > 0 && i < 3 && (
                  <span className="text-white/30">|</span>
                )}
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Listings grid */}
      <ListingsClient listings={LISTINGS} />

    </main>
  );
}
