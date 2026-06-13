import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/about/AboutSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* 1 — Hero */}
        <Hero />

        {/* 2 — Properties */}
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
            <p className="font-sans text-stone-400 text-sm max-w-lg leading-relaxed mb-10">
              Featured listings coming soon. Check back to browse active properties.
            </p>
            <Link
              href="/listings"
              className="inline-flex items-center gap-3 font-sans text-xs font-medium tracking-widest uppercase text-white/60 hover:text-white transition-colors duration-300"
            >
              View All Listings
              <span className="w-8 h-px" style={{ backgroundColor: "var(--color-gold)" }} />
            </Link>
          </div>
        </section>

        {/* 3 — About Me */}
        <AboutSection />

      </main>
      <Footer />
    </>
  );
}
