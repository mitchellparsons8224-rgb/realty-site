import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

const STATS = [
  { value: "0+",   label: "Years of Experience" },
  { value: "$0M+", label: "Total Sales Volume" },
  { value: "0+",   label: "Happy Clients" },
  { value: "0+",   label: "Closed Deals" },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ backgroundColor: "#F5F4F1" }}>
      <div className="container-site py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: photo */}
          <div className="relative">
            <div
              className="w-full bg-stone-300 overflow-hidden relative"
              style={{ aspectRatio: "4/5", maxWidth: "480px" }}
            >
              <Image
                src="/images/mitchell.jpg"
                alt={SITE_CONFIG.agentName}
                fill
                className="object-cover"
                style={{ objectPosition: "50% 15%", transform: "scale(1.05)", transformOrigin: "top center" }}
                sizes="(max-width: 768px) 100vw, 480px"
                priority
              />
            </div>
            {/* Decorative offset border */}
            <div
              className="absolute -bottom-4 -right-4 w-full border border-[var(--color-gold)] pointer-events-none"
              style={{ aspectRatio: "3/4", maxWidth: "480px", opacity: 0.4 }}
            />
          </div>

          {/* Right: content */}
          <div className="flex flex-col gap-8">

            {/* Heading with gold left border */}
            <div className="flex items-center gap-5">
              <div className="w-1 self-stretch" style={{ backgroundColor: "var(--color-gold)" }} />
              <h2
                className="font-serif font-semibold text-charcoal uppercase tracking-[0.12em]"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                About Me
              </h2>
            </div>

            {/* Bio */}
            <div className="space-y-5 font-sans text-stone-500 leading-relaxed text-[15px] lg:text-left max-w-xl">
              <p>
                Born and raised in a small mountain town nestled in the Eastern Sierra Mountain range,
                Mitchell brings a variety of experiences in the real estate industry. From commercial
                acquisitions and asset management in big box industrial, to multifamily and creative
                office, he is now settled in as a residential agent who provides a plethora of knowledge
                that he brings to every transaction. Mitchell offers his clients a uniquely comprehensive
                and seamless real estate experience.
              </p>
              <p>
                After graduating from the University of Southern California where he earned a degree in
                Business Administration (studying Real Estate Finance), Mitchell is left with strategic
                marketing techniques and an analytical outlook to provide the absolute best opportunities
                for clients.
              </p>

              {/* Pull quote */}
              <blockquote
                className="border-l-2 pl-5 py-1 font-serif font-light italic text-stone-600"
                style={{ borderColor: "var(--color-gold)", fontSize: "clamp(1rem, 1.5vw, 1.1rem)", lineHeight: 1.7 }}
              >
                "What drew me to real estate wasn't the transaction side. It was the lifestyle side.
                Being from the mountains, I know that where you live shapes how you live. That feeling
                of walking into a place and knowing it's a fit. Being proud of where you wake up,
                confident in the life you're living, genuinely happy with how your days unfold.
                I wanted to help people find that."
              </blockquote>

              <p>
                Today, Mitchell thrives as a real estate professional with a true love for "home." He
                brings a friendly, personable, and persistent approach driven by a client-first
                philosophy. Mitchell is dedicated to making each step of this life-changing process as
                smooth and rewarding as possible.
              </p>
              <p>
                When Mitchell isn't showing property or out in the community, he is enjoying life by
                the beach in San Clemente, surfing, golfing, hiking, cooking, and spending time with
                friends and family.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-stone-200">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                  <span
                    className="font-serif font-semibold text-charcoal"
                    style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs text-stone-400 tracking-wide leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-sans text-sm font-medium tracking-widest uppercase text-white py-4 px-10 transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "var(--color-gold)" }}
            >
              Contact Me
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
