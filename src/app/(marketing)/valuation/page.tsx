import type { Metadata } from "next";

export const metadata: Metadata = { title: "Home Valuation" };

export default function ValuationPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="container-site py-40">
        <p className="label-accent mb-4">Home Valuation</p>
        <div className="divider-gold mb-8" />
        <h1 className="font-serif font-light text-charcoal mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          What's Your Home Worth?
        </h1>
        <p className="font-sans text-stone-500 text-lg max-w-2xl">
          Valuation tool coming soon.
        </p>
      </div>
    </main>
  );
}
