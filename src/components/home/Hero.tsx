import { SITE_CONFIG } from "@/lib/constants";

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
}

export default function Hero({ videoSrc, imageSrc }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      {videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          poster={imageSrc}
        />
      ) : (
        <div className="absolute inset-0">
          {imageSrc ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${imageSrc})` }}
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #2c2c2e 0%, #3a3535 40%, #1c1c1e 100%)",
              }}
            />
          )}
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.38)" }} />

      {/* Centered name + title */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
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

      {/* Bottom-left: license */}
      <div className="absolute bottom-8 left-0 container-site">
        <p
          className="font-sans font-light uppercase"
          style={{ fontSize: "11px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)" }}
        >
          {SITE_CONFIG.brokerageLicense}
        </p>
      </div>

      {/* Bottom-center: scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="relative overflow-hidden" style={{ width: "1px", height: "2.5rem", backgroundColor: "rgba(255,255,255,0.3)" }}>
          <div
            className="absolute top-0 left-0 w-full animate-scroll-line"
            style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
          />
        </div>
      </div>

    </section>
  );
}
