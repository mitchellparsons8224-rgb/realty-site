import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description: "Privacy policy and terms of service for Mitchell Parsons Realty.",
};

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="container-site py-40 max-w-3xl">

        <p className="label-accent mb-4" style={{ color: "var(--color-gold)" }}>Legal</p>
        <h1
          className="font-serif font-light text-charcoal uppercase tracking-[0.1em] mb-16"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
        >
          Privacy Policy &amp; Terms
        </h1>

        <div className="space-y-12 font-sans text-stone-500 text-sm leading-relaxed">

          <section>
            <h2 className="font-serif text-charcoal text-lg font-light mb-4 uppercase tracking-widest">Contact &amp; Communications</h2>
            <p>
              By submitting any form on this website, you agree to be contacted by {SITE_CONFIG.agentName} |{" "}
              {SITE_CONFIG.brokerageName} via phone call, email, and text message for real estate services. To opt out,
              you may reply 'STOP' to any text message at any time, reply 'HELP' for assistance, or click the
              unsubscribe link in any email. Message and data rates may apply. Message frequency may vary.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-lg font-light mb-4 uppercase tracking-widest">Information We Collect</h2>
            <p>
              We collect information you provide directly, including your name, email address, phone number, and any
              property details you submit through our contact, valuation, or inquiry forms. This information is used
              solely to respond to your real estate inquiries and is never sold to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-lg font-light mb-4 uppercase tracking-widest">Disclaimer</h2>
            <p>
              {SITE_CONFIG.brokerageName} is a real estate brokerage licensed by the State of California. All
              information presented on this website is intended for informational purposes only and is compiled from
              sources deemed reliable but has not been independently verified. All measurements and square footage are
              approximate. If your property is currently listed for sale, this is not a solicitation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-charcoal text-lg font-light mb-4 uppercase tracking-widest">Contact</h2>
            <p>
              For questions regarding this privacy policy, contact us at{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-charcoal underline hover:text-[var(--color-gold)] transition-colors duration-200"
              >
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
