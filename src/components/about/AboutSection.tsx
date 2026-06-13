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
              style={{ aspectRatio: "3/4", maxWidth: "480px" }}
            >
              <Image
                src="/images/mitchell.jpg"
                alt={SITE_CONFIG.agentName}
                fill
                className="object-cover object-top"
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
            <div className="space-y-4 font-sans text-stone-500 leading-relaxed text-[15px] lg:text-left max-w-xl">
              <p>As a Mammoth Lakes native, I grew up with the Eastern Sierra as my backyard—and that sense of place has shaped everything about how I approach real estate. After earning my degree with honors from USC's Marshall School of Business, I brought that same drive and attention to detail into the industry, earning my license in 2022.</p>
              <p>Whether I'm on the mountain snowboarding, hiking a new trail, catching a wave, or traveling somewhere new, I'm always drawn back to the people and places that make a community feel like home. That perspective—of someone who genuinely loves where they live—is what I bring to every client relationship.</p>
              <p>Real estate isn't just about finding a property. It's about finding your place in the world, and I'm here to help make that happen.</p>
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
