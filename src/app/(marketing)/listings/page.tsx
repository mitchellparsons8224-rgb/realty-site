import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Properties" };

const LISTINGS = [
  {
    id: 1,
    image: "/images/listing-1.jpg",
    status: "Active",
    address: "1212 S El Camino Real",
    city: "San Clemente, CA",
    beds: 4,
    baths: 3,
    price: "$1,000,000",
  },
  {
    id: 2,
    image: "/images/listing-2.jpg",
    status: "Active",
    address: "Address Coming Soon",
    city: "San Clemente, CA",
    beds: null,
    baths: null,
    price: null,
  },
];

export default function ListingsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="container-site py-40">

        {/* Header */}
        <div className="mb-16">
          <p className="label-accent mb-4" style={{ color: "var(--color-gold)" }}>Active</p>
          <div className="flex items-center gap-5">
            <div className="w-1 h-12" style={{ backgroundColor: "var(--color-gold)" }} />
            <h1
              className="font-serif font-semibold text-charcoal uppercase tracking-[0.12em]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Properties
            </h1>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LISTINGS.map((listing) => (
            <div key={listing.id} className="group">
              <div className="overflow-hidden relative bg-stone-200" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={listing.image}
                  alt={listing.address}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="font-sans text-xs font-medium tracking-widest uppercase px-3 py-1.5"
                    style={{ backgroundColor: "var(--color-gold)", color: "var(--color-charcoal)" }}
                  >
                    {listing.status}
                  </span>
                </div>
              </div>

              <div className="pt-5 pb-6 border-b border-stone-200">
                <p className="font-serif text-charcoal text-lg font-light">
                  {listing.address}
                </p>
                <p className="font-sans text-stone-400 text-sm tracking-wide mt-1">{listing.city}</p>
                {(listing.beds || listing.price) && (
                  <div className="flex items-center gap-6 mt-3">
                    {listing.beds && (
                      <span className="font-sans text-stone-400 text-xs tracking-widest uppercase">
                        {listing.beds} Bed · {listing.baths} Bath
                      </span>
                    )}
                    {listing.price && (
                      <span className="font-sans text-charcoal text-sm tracking-widest uppercase font-medium">
                        {listing.price}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
