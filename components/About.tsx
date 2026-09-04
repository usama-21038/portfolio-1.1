import Reveal from "./Reveal";

const stats = [
  { value: "05", label: "projects built end-to-end" },
  { value: "02", label: "live in production" },
  { value: "10+", label: "technologies across the stack" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
          <div>
            <span className="font-mono text-sm text-gold">01 — about</span>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              A developer who likes{" "}
              <em className="font-serif italic text-gold">finishing</em>{" "}
              things.
            </h2>
          </div>
          <div className="space-y-5 font-body text-base leading-relaxed text-ink-soft">
            <p>
              I&apos;m Usama Bin Hasan, a full-stack developer who works
              comfortably on both sides of the stack — designing the database
              schema and API on one day, polishing a React interface on the
              next.
            </p>
            <p>
              Most of what I build starts as a real, slightly messy problem —
              finding a parking spot, booking a clinic appointment, keeping
              inventory straight — and ends as a working system with an API, a
              database, and an interface someone can actually use without a
              manual.
            </p>
            <p>
              I care about the parts that don&apos;t show up in a screenshot:
              clean data models, predictable API responses, and code the next
              person (often future me) can read without a headache.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-8 py-8">
              <dt className="order-2 mt-2 font-body text-sm text-ink-soft">
                {stat.label}
              </dt>
              <dd className="font-display text-4xl font-medium text-ink">
                {stat.value}
                <span className="text-gold">.</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
