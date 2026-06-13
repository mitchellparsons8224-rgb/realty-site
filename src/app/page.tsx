import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/about/AboutSection";
import FeaturedListings from "@/components/home/FeaturedListings";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* 1 — Hero */}
        <Hero videoSrc="/videos/hero.mp4" />

        {/* 2 — Properties */}
        <FeaturedListings />

        {/* 3 — About Me */}
        <AboutSection />

      </main>
      <Footer />
    </>
  );
}
