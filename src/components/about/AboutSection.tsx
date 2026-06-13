import Link from "next/link";
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
              className="w-full bg-stone-300 overflow-hidden"
              style={{ aspectRatio: "3/4", maxWidth: "480px" }}
            >
              {/* Replace src with your real headshot: /images/mitchell.jpg */}
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(160deg, #d6d3ce 0%, #b8b4ae 100%)",
                }}
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
            <p className="font-sans text-stone-500 leading-relaxed text-[15px] text-center lg:text-left max-w-xl">
              [Replace with your bio — who you are, your market expertise, and what drives you to deliver exceptional results for every client.]
            </p>

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
