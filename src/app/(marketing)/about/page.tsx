import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description: "Mitchell Parsons — Eastern Sierra native, USC graduate, and licensed real estate agent at LUXRE Realty in San Clemente, CA. Bringing commercial and residential expertise to every transaction.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutSection />
    </main>
  );
}
