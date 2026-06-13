import type { Metadata } from "next";
import AboutSection from "@/components/about/AboutSection";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="pt-24">
      <AboutSection />
    </main>
  );
}
