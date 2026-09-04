import { marqueeItems } from "@/data/projects";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-ink/5 py-4"
    >
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint"
          >
            {item}
            <span className="text-gold/60">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}
