import type { Metadata } from "next";
import Link from "next/link";
import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>

      {/* Full-screen hero */}
      <AboutHero />

      {/* About Me section — scrolls in seamlessly */}
      <AboutSection />

      {/* Contact strip */}
      <section style={{ backgroundColor: "var(--color-charcoal)" }}>
        <div className="container-site py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>
              <p className="label-accent mb-3" style={{ color: "var(--color-gold)" }}>Get In Touch</p>
              <h3
                className="font-serif font-light text-white"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
              >
                Ready to find your place?
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                <Phone size={15} strokeWidth={1.5} className="text-[var(--color-gold)]" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                <Mail size={15} strokeWidth={1.5} className="text-[var(--color-gold)]" />
                {SITE_CONFIG.email}
              </a>
              <Link
                href="/contact"
                className="font-sans text-xs font-medium tracking-widest uppercase text-charcoal px-8 py-3.5 transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                Send a Message
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
