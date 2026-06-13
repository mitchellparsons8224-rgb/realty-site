import Image from "next/image";
import Link from "next/link";
import { LISTINGS } from "@/data/listings";

export default function FeaturedListings() {
  const featured = LISTINGS.filter((l) => l.status === "active");

  return (
    <section id="properties" style={{ backgroundColor: "var(--color-charcoal)" }}>
      <div className="container-site py-24 lg:py-36">

        {/* Section header */}
        <div className="flex items-end justify-between mb-14">
          <div className="flex items-center gap-5">
            <div className="w-1 h-12" style={{ backgroundColor: "var(--color-gold)" }} />
            <div>
              <p className="label-accent mb-1" style={{ color: "var(--color-gold)" }}>Featured</p>
              <h2
                className="font-serif font-semibold text-white uppercase tracking-[0.12em]"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                Properties
              </h2>
            </div>
          </div>
          <Link
            href="/listings"
            className="hidden sm:inline-flex items-center gap-3 font-sans text-xs font-medium tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-300"
          >
            View All
            <span className="w-8 h-px inline-block" style={{ backgroundColor: "var(--color-gold)" }} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((listing) => (
            <Link key={listing.id} href="/listings" className="group block">
              <div className="overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={listing.image}
                  alt={listing.address}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="font-sans text-xs font-medium tracking-widest uppercase px-3 py-1.5"
                    style={{ backgroundColor: "var(--color-gold)", color: "var(--color-charcoal)" }}
                  >
                    For Sale
                  </span>
                </div>
              </div>

              <div className="pt-5 pb-6 border-b border-white/10">
                <p className="font-serif text-white text-lg font-light group-hover:text-[var(--color-gold)] transition-colors duration-300">
                  {listing.address}
                </p>
                <p className="font-sans text-white/40 text-sm tracking-wide mt-1">{listing.city}</p>
                {(listing.beds || listing.price) && (
                  <div className="flex items-center gap-6 mt-3">
                    {listing.beds && (
                      <span className="font-sans text-white/50 text-xs tracking-widest uppercase">
                        {listing.beds} Bed · {listing.baths} Bath
                      </span>
                    )}
                    {listing.price && (
                      <span className="font-sans text-white/70 text-sm tracking-widest uppercase">
                        {listing.price}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
