import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const RealtorIcon = () => (
  <svg width="28" height="34" viewBox="0 0 28 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0L0 6v10c0 9.5 6 18.4 14 22 8-3.6 14-12.5 14-22V6L14 0zm0 3.2l11 5.1v8.5c0 7.9-5 15.3-11 18.4C8 32.1 3 24.7 3 16.8V8.3l11-5.1z"/>
    <path d="M8 10h5.5c2.5 0 4.5 2 4.5 4.5 0 1.8-1 3.3-2.6 4L18 24h-3l-2.3-5H11v5H8V10zm3 2.5v4h2.5c1.1 0 2-.9 2-2s-.9-2-2-2H11z"/>
  </svg>
);

const EqualHousingIcon = () => (
  <svg width="28" height="34" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2L2 14h4v20h10v-8h4v8h10V14h4L18 2zm0 3.2L32 15.8h-2V32h-8v-8h-8v8H6V15.8H4L18 5.2z"/>
    <path d="M10 19h16v2H10zm0 4h16v2H10z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-charcoal)" }}>

      {/* Agent contact row */}
      <div className="container-site py-14 border-b border-white/10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Name */}
          <div className="text-center lg:text-left">
            <p
              className="font-serif font-light text-white uppercase tracking-[0.2em]"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
            >
              {SITE_CONFIG.agentName}
            </p>
            <p className="font-sans text-xs text-white/40 tracking-[0.15em] uppercase mt-1">
              {SITE_CONFIG.brokerageLicense}
            </p>
          </div>

          {/* Contact + CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide"
            >
              {SITE_CONFIG.phone}
            </a>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide"
            >
              {SITE_CONFIG.email}
            </a>
            <Link
              href="/contact"
              className="font-sans text-xs font-medium tracking-widest uppercase px-7 py-3 border border-white/30 text-white/70 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

        </div>
      </div>

      {/* Brokerage compliance row */}
      <div className="container-site py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* LUXRE logo */}
          <Image
            src="/images/luxre-logo.png"
            alt="LUXRE Realty"
            width={100}
            height={34}
            className="object-contain opacity-90"
          />

          {/* Disclaimer */}
          <p className="font-sans text-white/30 text-center lg:text-left max-w-2xl leading-relaxed" style={{ fontSize: "11px" }}>
            LUXRE Realty, Inc. | CA DRE# 01897290. All information is deemed reliable but not guaranteed and should be independently reviewed and verified. All measurements and square footage are approximate. If your property is currently listed for sale this is not a solicitation.
          </p>

          {/* Compliance logos */}
          <div className="flex items-center gap-4 text-white/30 shrink-0">
            <RealtorIcon />
            <EqualHousingIcon />
          </div>

        </div>
      </div>

    </footer>
  );
}
