import { MILESTONES } from "@/data/milestones";

const categoryColors: Record<string, string> = {
  Volume:        "var(--color-gold)",
  Transaction:   "var(--color-gold)",
  Award:         "var(--color-gold)",
  Certification: "var(--color-gold)",
};

export default function TrackRecord() {
  return (
    <section style={{ backgroundColor: "#F4F1EC" }}>
      <div className="container-site py-24 lg:py-32">
        <div className="max-w-2xl mb-16">
          <p className="label-accent mb-4">Track Record</p>
          <div className="divider-gold mb-8" />
          <h2
            className="font-serif font-light text-charcoal"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
          >
            Results That Speak <em>for Themselves</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MILESTONES.map((m) => (
            <div
              key={m.id}
              className="bg-white p-8 border border-stone-100"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-xs font-sans font-medium uppercase tracking-widest"
                  style={{ color: categoryColors[m.category] }}
                >
                  {m.category}
                </span>
                <span className="text-xs font-sans text-stone-300">{m.year}</span>
              </div>

              {m.value && (
                <p
                  className="font-serif font-light text-charcoal mb-2"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
                >
                  {m.value}
                </p>
              )}

              <p className="font-sans font-medium text-charcoal text-sm mb-2">{m.title}</p>
              <p className="font-sans text-stone-400 text-sm leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
