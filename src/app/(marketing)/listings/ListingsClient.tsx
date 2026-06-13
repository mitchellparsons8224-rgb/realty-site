"use client";

import { useState, useRef, useEffect } from "react";
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

type Filters = {
  status: "active" | "sold" | "all";
  minBeds: number;
  minBaths: number;
  sort: "high" | "low" | "none";
};

const ChevronIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function Dropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { label: string; value: string | number }[];
  value: string | number;
  onChange: (v: string | number) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 font-sans text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
          open ? "text-white" : "text-white/70 hover:text-white"
        }`}
      >
        {selected?.label ?? label}
        <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <ChevronIcon />
        </span>
      </button>

      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-xl z-30 min-w-[160px] py-1"
          style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.18)" }}
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className="w-full flex items-center justify-between px-5 py-2.5 font-sans text-xs tracking-widest uppercase text-left hover:bg-stone-50 transition-colors duration-150"
              style={{ color: opt.value === value ? "var(--color-gold)" : "var(--color-charcoal)" }}
            >
              {opt.label}
              {opt.value === value && <CheckIcon />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ListingsClient({ listings }: { listings: Listing[] }) {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Filters>({
    status: "active",
    minBeds: 0,
    minBaths: 0,
    sort: "high",
  });

  function set<K extends keyof Filters>(key: K, val: Filters[K]) {
    setFilters((f) => ({ ...f, [key]: val }));
  }

  const filtered = listings
    .filter((l) => {
      if (filters.status !== "all" && l.status !== filters.status) return false;
      if (filters.minBeds > 0 && (l.beds ?? 0) < filters.minBeds) return false;
      if (filters.minBaths > 0 && (l.baths ?? 0) < filters.minBaths) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (!l.address.toLowerCase().includes(q) && !l.city.toLowerCase().includes(q)) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (filters.sort === "high") return b.priceNum - a.priceNum;
      if (filters.sort === "low") return a.priceNum - b.priceNum;
      return 0;
    });

  return (
    <main style={{ backgroundColor: "var(--color-cream)" }}>

      {/* Hero with search + filter bar */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(260px, 38vh, 420px)" }}>
        <Image
          src="/images/contact-bg.jpg"
          alt="Properties"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,15,25,0.55) 0%, rgba(10,15,25,0.78) 100%)" }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 gap-6 px-4">

          {/* Search */}
          <div className="w-full max-w-2xl flex items-center bg-white" style={{ height: "52px" }}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by address, city, community, zip..."
              className="flex-1 h-full px-5 font-sans text-sm text-charcoal placeholder:text-stone-400 focus:outline-none"
            />
            <div className="h-full px-5 flex items-center justify-center" style={{ backgroundColor: "var(--color-charcoal)" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>

          {/* Filter strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">

            <Dropdown
              label="Active Listings"
              value={filters.status}
              onChange={(v) => set("status", v as Filters["status"])}
              options={[
                { label: "Active Listings", value: "active" },
                { label: "Sold", value: "sold" },
                { label: "All", value: "all" },
              ]}
            />

            <span className="text-white/20 text-xs">|</span>

            <Dropdown
              label="0+ Beds"
              value={filters.minBeds}
              onChange={(v) => set("minBeds", v as number)}
              options={[0, 1, 2, 3, 4, 5].map((n) => ({ label: `${n}+ Beds`, value: n }))}
            />

            <span className="text-white/20 text-xs">|</span>

            <Dropdown
              label="0+ Baths"
              value={filters.minBaths}
              onChange={(v) => set("minBaths", v as number)}
              options={[0, 1, 2, 3, 4, 5].map((n) => ({ label: `${n}+ Baths`, value: n }))}
            />

            <span className="text-white/20 text-xs hidden sm:block">|</span>

            <Dropdown
              label="Price"
              value={filters.sort}
              onChange={(v) => set("sort", v as Filters["sort"])}
              options={[
                { label: "High → Low", value: "high" },
                { label: "Low → High", value: "low" },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Grid */}
      <div className="container-site py-16 pb-24">
        {filtered.length === 0 ? (
          <p className="font-sans text-stone-400 text-sm tracking-wide text-center py-24">
            No listings match your filters.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filtered.map((listing) => (
              <div key={listing.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-stone-200" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={listing.image}
                    alt={listing.address}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-3"
                    style={{ backgroundColor: "rgba(10,14,20,0.82)" }}
                  >
                    <span className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-white">
                      For Sale
                    </span>
                  </div>
                </div>

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
                        <span className="font-sans text-charcoal text-sm tracking-widest uppercase font-medium ml-auto">
                          {listing.price}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </main>
  );
}
