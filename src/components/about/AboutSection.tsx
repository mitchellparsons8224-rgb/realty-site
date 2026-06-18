import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" style={{ backgroundColor: "#F5F4F1" }}>
      <div className="container-site py-24 lg:py-36">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-28 items-start">

          {/* ── Photo column ── */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto lg:mx-0" style={{ maxWidth: "440px" }}>
              {/* Main image */}
              <div
                className="relative overflow-hidden w-full"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="/images/mitchell.jpg"
                  alt={SITE_CONFIG.agentName}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 12%" }}
                  sizes="(max-width: 768px) 100vw, 440px"
                  priority
                />
                {/* Subtle bottom fade so it blends into the section bg */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{ background: "linear-gradient(to top, #F5F4F1 0%, transparent 100%)" }}
                />
              </div>

              {/* Decorative offset border */}
              <div
                className="absolute -bottom-3 -right-3 w-full pointer-events-none"
                style={{
                  aspectRatio: "3/4",
                  border: "1px solid var(--color-gold)",
                  opacity: 0.35,
                }}
              />
            </div>
          </ScrollReveal>

          {/* ── Text column ── */}
          <div className="flex flex-col gap-8 lg:pt-4">

            <ScrollReveal delay={80}>
              <div>
                <p className="label-accent mb-4">About Mitchell</p>
                <div className="divider-gold mb-7" />
                <h2
                  className="font-serif font-light text-charcoal"
                  style={{ fontSize: "clamp(1.9rem, 3vw, 2.6rem)", lineHeight: 1.1 }}
                >
                  A Trusted Advisor in<br />
                  <em>Every Transaction</em>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="space-y-5 font-sans text-stone-500 leading-relaxed" style={{ fontSize: "15px" }}>
                <p>
                  Born and raised in a small mountain town nestled in the Eastern Sierra Mountain
                  range, Mitchell brings a variety of experiences in the real estate industry. From
                  commercial acquisitions and asset management in big box industrial, to multifamily
                  and creative office, he is now settled in as a residential agent who provides a
                  plethora of knowledge that he brings to every transaction.
                </p>
                <p>
                  After graduating from the University of Southern California where he earned a
                  degree in Business Administration (studying Real Estate Finance), Mitchell is left
                  with strategic marketing techniques and an analytical outlook to provide the
                  absolute best opportunities for clients.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <blockquote
                className="font-serif font-light italic text-stone-600 pl-6 py-1"
                style={{
                  borderLeft: "2px solid var(--color-gold)",
                  fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
                  lineHeight: 1.75,
                }}
              >
                "What drew me to real estate wasn't the transaction side. It was the lifestyle
                side. Being from the mountains, I know that where you live shapes how you live —
                that feeling of walking into a place and knowing it's a fit. I wanted to help
                people find that."
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="space-y-5 font-sans text-stone-500 leading-relaxed" style={{ fontSize: "15px" }}>
                <p>
                  Today, Mitchell thrives as a real estate professional with a true love for
                  "home." He brings a friendly, personable, and persistent approach driven by a
                  client-first philosophy — dedicated to making each step of this life-changing
                  process as smooth and rewarding as possible.
                </p>
                <p>
                  When he isn't showing property or out in the community, Mitchell is enjoying
                  life by the beach in San Clemente — surfing, golfing, hiking, cooking, and
                  spending time with friends and family.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={360}>
              <div className="pt-2 flex items-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-sans text-sm font-medium tracking-widest uppercase text-white py-4 px-10 transition-all duration-300 hover:opacity-85"
                  style={{ backgroundColor: "var(--color-gold)" }}
                >
                  Get in Touch
                </Link>
                <div>
                  <p className="font-sans text-xs text-stone-400 tracking-wider uppercase">
                    {SITE_CONFIG.brokerageName}
                  </p>
                  <p className="font-sans text-xs text-stone-400 tracking-wider mt-0.5">
                    {SITE_CONFIG.brokerageLicense}
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
