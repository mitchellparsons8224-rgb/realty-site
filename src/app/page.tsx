import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/about/AboutSection";
import ContactForm from "@/components/forms/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — full screen */}
        <Hero />

        {/* About — scrolls into view */}
        <AboutSection />

        {/* Properties teaser — placeholder until listings are built */}
        <section id="properties" style={{ backgroundColor: "var(--color-charcoal)" }}>
          <div className="container-site py-24 lg:py-36">
            <div className="flex items-center gap-5 mb-12">
              <div className="w-1 h-12" style={{ backgroundColor: "var(--color-gold)" }} />
              <h2
                className="font-serif font-semibold text-white uppercase tracking-[0.12em]"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                Properties
              </h2>
            </div>
            <p className="font-sans text-stone-400 text-sm max-w-lg leading-relaxed">
              Featured listings coming soon. Check back to browse active properties.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ backgroundColor: "var(--color-cream)" }}>
          <div className="container-site py-24 lg:py-36">
            <div className="flex items-center gap-5 mb-16">
              <div className="w-1 h-12" style={{ backgroundColor: "var(--color-gold)" }} />
              <h2
                className="font-serif font-semibold text-charcoal uppercase tracking-[0.12em]"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                Contact
              </h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
              <div className="lg:col-span-2 space-y-6">
                <p className="font-sans text-stone-500 text-sm leading-relaxed">
                  Ready to buy, sell, or explore your options? I'll get back to you within one business day.
                </p>
                <div className="space-y-4">
                  <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-stone-200 flex items-center justify-center text-charcoal group-hover:border-[var(--color-gold)] group-hover:text-[var(--color-gold)] transition-all duration-300">
                      <Phone size={15} strokeWidth={1.5} />
                    </div>
                    <span className="font-sans text-sm text-charcoal group-hover:text-[var(--color-gold)] transition-colors duration-300">{SITE_CONFIG.phone}</span>
                  </a>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-stone-200 flex items-center justify-center text-charcoal group-hover:border-[var(--color-gold)] group-hover:text-[var(--color-gold)] transition-all duration-300">
                      <Mail size={15} strokeWidth={1.5} />
                    </div>
                    <span className="font-sans text-sm text-charcoal group-hover:text-[var(--color-gold)] transition-colors duration-300">{SITE_CONFIG.email}</span>
                  </a>
                </div>
                <div className="pt-6 border-t border-stone-200">
                  <p className="font-sans text-xs text-stone-400">{SITE_CONFIG.brokerageLicense}</p>
                </div>
              </div>
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
