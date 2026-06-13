import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = { title: "Contact" };

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const contactLinks = [
  {
    icon: <Phone size={15} strokeWidth={1.5} />,
    label: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: <Mail size={15} strokeWidth={1.5} />,
    label: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    href: SITE_CONFIG.linkedin,
    external: true,
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    href: SITE_CONFIG.instagram,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="pt-24" style={{ backgroundColor: "var(--color-cream)" }}>

      {/* Page header */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-charcoal)" }}
      >
        <div className="container-site">
          <div className="flex items-center gap-5 mb-6">
            <div className="w-1 h-12" style={{ backgroundColor: "var(--color-gold)" }} />
            <h1
              className="font-serif font-semibold text-white uppercase tracking-[0.12em]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Contact
            </h1>
          </div>
          <p className="font-sans text-stone-400 text-sm max-w-lg leading-relaxed">
            Ready to buy, sell, or just explore your options? Reach out and I'll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="container-site py-24 lg:py-32">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">

            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <p className="label-accent mb-6">Get In Touch</p>
                <div className="space-y-4">
                  {contactLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 group transition-colors duration-300 hover:text-[var(--color-gold)]"
                    >
                      <div
                        className="w-10 h-10 flex items-center justify-center border border-stone-200 text-charcoal group-hover:border-[var(--color-gold)] group-hover:text-[var(--color-gold)] transition-all duration-300"
                      >
                        {link.icon}
                      </div>
                      <span className="font-sans text-sm text-charcoal group-hover:text-[var(--color-gold)] transition-colors duration-300">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-stone-200">
                <p className="font-sans text-xs text-stone-400 leading-relaxed">
                  {SITE_CONFIG.brokerageName}<br />
                  {SITE_CONFIG.brokerageLicense}
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
