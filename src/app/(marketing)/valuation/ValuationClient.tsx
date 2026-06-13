"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import AddressAutocomplete from "@/components/ui/AddressAutocomplete";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

type ModalState = "idle" | "open" | "submitted";

export default function ValuationClient() {
  const [address, setAddress] = useState("");
  const [modal, setModal] = useState<ModalState>("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!address.trim()) {
      inputRef.current?.focus();
      return;
    }
    setModal("open");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Required";
    if (!form.phone.trim()) next.phone = "Required";
    if (!form.email.trim()) next.email = "Required";
    if (Object.keys(next).length) { setErrors(next); return; }
    setModal("submitted");
  }

  return (
    <>
      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "92vh" }}>
        <Image
          src="/images/valuation-bg.jpg"
          alt="Luxury home"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(5,10,20,0.65) 0%, rgba(5,10,20,0.45) 60%, rgba(5,10,20,0.70) 100%)" }}
        />

        {/* Content */}
        <div className="relative z-10 container-site flex flex-col justify-center h-full pt-40 pb-24">

          {/* Label */}
          <p
            className="font-serif font-light text-white/80 mb-4 tracking-widest"
            style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)" }}
          >
            Home Valuation
          </p>

          {/* Headline */}
          <h1
            className="font-serif font-light text-white uppercase mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              letterSpacing: "0.06em",
              lineHeight: 1.1,
              maxWidth: "700px",
            }}
          >
            How much is your home worth?
          </h1>

          {/* Checkmarks */}
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 mb-12">
            {["Instant property valuation", "Expert advice", "Sell for more"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/80">
                <span style={{ color: "var(--color-gold)" }}><CheckIcon /></span>
                <span className="font-sans text-sm tracking-wide">{item}</span>
              </div>
            ))}
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="w-full max-w-3xl">
            <div className="flex items-stretch bg-white relative" style={{ height: "64px" }}>
              <div className="flex items-center pl-5 text-stone-400 shrink-0">
                <PinIcon />
              </div>
              <AddressAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={(val) => { setAddress(val); }}
                placeholder="Enter your home address..."
                inputClassName="flex-1 h-full px-4 font-sans text-sm text-charcoal placeholder:text-stone-400 focus:outline-none bg-transparent"
              />
              <button
                type="submit"
                className="h-full px-8 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-charcoal border-l border-stone-200 hover:bg-[var(--color-gold)] hover:text-white hover:border-[var(--color-gold)] transition-all duration-300 whitespace-nowrap shrink-0"
              >
                Get a Free Home Valuation
              </button>
            </div>
          </form>

        </div>
      </section>

      {/* Modal */}
      {modal !== "idle" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(10,14,20,0.75)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget && modal !== "submitted") setModal("idle"); }}
        >
          <div className="relative bg-white w-full max-w-md p-10" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.3)" }}>

            {/* Close */}
            {modal !== "submitted" && (
              <button
                onClick={() => setModal("idle")}
                className="absolute top-5 right-5 text-stone-400 hover:text-charcoal transition-colors"
                aria-label="Close"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}

            {modal === "submitted" ? (
              /* Success */
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "var(--color-gold)" }}>
                  <CheckIcon />
                </div>
                <h2 className="font-serif text-2xl font-light text-charcoal mb-3">Request Received</h2>
                <p className="font-sans text-sm text-stone-500 leading-relaxed mb-2">
                  I'll prepare a personalized valuation for
                </p>
                <p className="font-serif text-base text-charcoal font-medium mb-6">{address}</p>
                <p className="font-sans text-xs text-stone-400 leading-relaxed">
                  Expect to hear from me within one business day at the contact details provided.
                </p>
                <button
                  onClick={() => { setModal("idle"); setAddress(""); setForm({ name: "", phone: "", email: "" }); }}
                  className="mt-8 font-sans text-xs tracking-widest uppercase text-white px-8 py-3 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--color-charcoal)" }}
                >
                  Done
                </button>
              </div>
            ) : (
              /* Form */
              <>
                <div className="mb-8">
                  <p className="label-accent mb-2" style={{ color: "var(--color-gold)" }}>Almost there</p>
                  <h2 className="font-serif text-2xl font-light text-charcoal leading-tight">
                    Where should I send your valuation?
                  </h2>
                  <p className="font-sans text-sm text-stone-400 mt-2 leading-relaxed">
                    <span className="text-charcoal font-medium">{address}</span>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {(["name", "phone", "email"] as const).map((field) => (
                    <div key={field}>
                      <label className="block text-xs font-sans tracking-[0.15em] uppercase text-stone-400 mb-1.5 capitalize">
                        {field}
                      </label>
                      <input
                        type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                        value={form[field]}
                        onChange={(e) => { setForm((f) => ({ ...f, [field]: e.target.value })); setErrors((err) => ({ ...err, [field]: "" })); }}
                        placeholder={field === "name" ? "Your full name" : field === "phone" ? "(555) 000-0000" : "your@email.com"}
                        className="w-full border-b border-stone-200 py-2.5 font-sans text-sm text-charcoal placeholder:text-stone-300 focus:outline-none focus:border-charcoal transition-colors duration-200"
                      />
                      {errors[field] && (
                        <p className="text-xs text-red-400 mt-1">{errors[field]}</p>
                      )}
                    </div>
                  ))}

                  <p className="font-sans text-xs text-stone-400 leading-relaxed pt-1">
                    I agree to be contacted by {SITE_CONFIG.agentName} via call, email, and text for real estate services. To opt out, you can reply 'stop' at any time or reply 'help' for assistance. Message and data rates may apply. Message frequency may vary.{" "}
                    <a href="https://shawn-abrahamian.luxrerealty.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="underline hover:text-charcoal transition-colors duration-200">Privacy Policy</a>.
                  </p>

                  <button
                    type="submit"
                    className="w-full font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white py-4 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "var(--color-charcoal)" }}
                  >
                    Get My Valuation
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
