import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormDark from "@/components/forms/ContactFormDark";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = { title: "Contact" };

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">

      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-bg.jpg"
          alt="Coastal background"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(10,15,25,0.88) 0%, rgba(15,25,40,0.80) 50%, rgba(10,15,25,0.88) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site min-h-screen flex flex-col justify-center py-32 pt-40">

        {/* LUXRE logo */}
        <div className="mb-16">
          <Image
            src="/images/luxre-logo.png"
            alt="LUXRE Realty"
            width={160}
            height={54}
            className="object-contain"
          />
        </div>

        {/* Two-column layout with vertical divider */}
        <div className="grid lg:grid-cols-2 gap-0">

          {/* Left: Contact Details */}
          <div className="lg:pr-16 xl:pr-24 pb-16 lg:pb-0">
            <h1
              className="font-serif font-light text-white uppercase tracking-[0.15em] mb-12"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Contact Details
            </h1>

            <div className="space-y-8">

              {/* Name + DRE */}
              <p className="font-serif text-white tracking-[0.12em] uppercase" style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", fontWeight: 600 }}>
                {SITE_CONFIG.agentName} | {SITE_CONFIG.brokerageLicense}
              </p>

              {/* Phone */}
              <div>
                <p className="text-xs font-sans tracking-[0.2em] uppercase text-white/40 mb-2">Phone</p>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="font-sans text-white text-sm tracking-widest uppercase hover:text-[var(--color-gold)] transition-colors duration-300"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="text-xs font-sans tracking-[0.2em] uppercase text-white/40 mb-2">Email</p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-sans text-white text-sm tracking-widest uppercase hover:text-[var(--color-gold)] transition-colors duration-300"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              {/* Brokerage + office */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <p className="text-xs font-sans tracking-[0.2em] uppercase text-white/40">Brokerage</p>
                <p className="font-sans text-white text-sm tracking-widest uppercase">
                  {SITE_CONFIG.brokerageName}
                </p>

                <div>
                  <p className="text-xs font-sans tracking-[0.2em] uppercase text-white/40 mb-2">San Clemente</p>
                  <p className="font-sans text-white text-sm tracking-wide uppercase leading-relaxed">
                    222 Avenida Del Mar<br />
                    San Clemente, CA 92672
                  </p>
                </div>
              </div>

            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-12">
              {[
                { icon: <FacebookIcon />, href: "#", label: "Facebook" },
                { icon: <InstagramIcon />, href: SITE_CONFIG.instagram, label: "Instagram" },
                { icon: <LinkedInIcon />, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block absolute left-1/2 top-32 bottom-32 w-px bg-white/15" />

          {/* Right: Form */}
          <div className="lg:pl-16 xl:pl-24">
            <h2
              className="font-serif font-light text-white uppercase tracking-[0.15em] mb-12"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Submit a Message
            </h2>
            <ContactFormDark />
          </div>

        </div>
      </div>
    </main>
  );
}
