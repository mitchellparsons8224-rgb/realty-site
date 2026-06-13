"use client";

import Image from "next/image";

type Listing = {
  id: number;
  image: string;
  status: string;
  address: string;
  city: string;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  price: string | null;
  priceNum: number;
};

export default function ListingsClient({ listings }: { listings: Listing[] }) {
  return (
    <div className="container-site py-16 pb-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {listings.map((listing) => (
          <div key={listing.id} className="group cursor-pointer">

            {/* Photo with FOR SALE bar */}
            <div className="relative overflow-hidden bg-stone-200" style={{ aspectRatio: "4/3" }}>
              <Image
                src={listing.image}
                alt={listing.address}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Bottom status bar — matches reference exactly */}
              <div
                className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-3"
                style={{ backgroundColor: "rgba(10,14,20,0.82)" }}
              >
                <span className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-white">
                  {listing.status}
                </span>
              </div>
            </div>

            {/* Card details */}
            <div className="pt-5">
              <p
                className="font-serif text-charcoal font-light group-hover:text-[var(--color-gold)] transition-colors duration-300"
                style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)" }}
              >
                {listing.address}
              </p>
              <p className="font-sans text-stone-400 text-sm tracking-wide mt-1">{listing.city}</p>

              {(listing.beds || listing.price) && (
                <div className="flex items-center gap-5 mt-3 pt-3 border-t border-stone-200">
                  {listing.beds && (
                    <span className="font-sans text-stone-400 text-xs tracking-widest uppercase">
                      {listing.beds} Bed · {listing.baths} Bath
                    </span>
                  )}
                  {listing.price && (
                    <span
                      className="font-sans text-charcoal text-sm tracking-widest uppercase font-medium ml-auto"
                    >
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
  );
}
