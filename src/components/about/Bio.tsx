import { SITE_CONFIG } from "@/lib/constants";

export default function Bio() {
  return (
    <section style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="container-site py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo */}
          <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden">
            {/* Replace with your actual headshot: <img src="/images/mitchell.jpg" /> */}
            <div
              className="absolute inset-0 flex items-end p-8"
              style={{ background: "linear-gradient(to top, rgba(28,28,30,0.6) 0%, transparent 60%)" }}
            >
              <div>
                <p className="font-serif text-white text-2xl font-light">{SITE_CONFIG.agentName}</p>
                <p className="label-accent mt-1" style={{ color: "var(--color-gold-light)" }}>
                  {SITE_CONFIG.agentTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="label-accent mb-4">About Me</p>
            <div className="divider-gold mb-8" />

            <h2
              className="font-serif font-light text-charcoal mb-8"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
            >
              A Trusted Advisor in{" "}
              <em>Every Transaction</em>
            </h2>

            <div className="space-y-5 font-sans text-stone-500 leading-relaxed text-[15px]">
              <p>
                [Replace this with your personal bio — who you are, where you're from, and what drew you to real estate.]
              </p>
              <p>
                [Your approach to working with clients — what sets you apart from other agents in your market.]
              </p>
              <p>
                [Any personal details that build connection — family, hobbies, community involvement, local expertise.]
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-stone-200">
              <p className="font-sans text-sm text-stone-400 tracking-wide">
                {SITE_CONFIG.brokerageName} &nbsp;·&nbsp; {SITE_CONFIG.brokerageLicense}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
