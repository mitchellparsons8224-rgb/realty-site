import { STATS } from "@/data/milestones";

export default function StatsBar() {
  return (
    <section className="border-y border-stone-200" style={{ backgroundColor: "var(--color-charcoal)" }}>
      <div className="container-site py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <span
                className="font-serif font-light text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {stat.value}
              </span>
              <span className="label-accent" style={{ color: "var(--color-gold)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
