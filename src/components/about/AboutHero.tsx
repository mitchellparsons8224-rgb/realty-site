import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export default function AboutHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background — swap src for a real interior/property photo */}
      <div className="absolute inset-0">
        {/* TODO: replace gradient with a luxury interior photo:
            1. Drop photo into /public/images/about-bg.jpg
            2. Uncomment the Image tag below and remove the gradient div */}
        {/*
        <Image
          src="/images/about-bg.jpg"
          alt="Property interior"
          fill
          className="object-cover object-center"
          priority
        />
        */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, #2a2520 0%, #1a1a1a 40%, #0f1419 100%)",
          }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.32)" }} />

      {/* Centered name */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="font-serif font-light text-white text-center uppercase px-6"
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            letterSpacing: "0.18em",
            lineHeight: 1,
          }}
        >
          {SITE_CONFIG.agentName}
        </h1>
      </div>

      {/* Bottom-left: DRE */}
      <div className="absolute bottom-8 left-0 container-site">
        <p
          className="font-sans font-light uppercase"
          style={{ fontSize: "11px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)" }}
        >
          {SITE_CONFIG.brokerageLicense}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="relative overflow-hidden" style={{ width: "1px", height: "2.5rem", backgroundColor: "rgba(255,255,255,0.3)" }}>
          <div className="absolute top-0 left-0 w-full animate-scroll-line" style={{ backgroundColor: "rgba(255,255,255,0.9)" }} />
        </div>
      </div>

    </section>
  );
}
