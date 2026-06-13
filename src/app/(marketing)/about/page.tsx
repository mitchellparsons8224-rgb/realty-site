import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutSection />
    </main>
  );
}
