import { Code2, Server, Database } from "lucide-react";
import { skillGroups } from "@/data/projects";
import Reveal from "./Reveal";

const iconMap = {
  frontend: Code2,
  backend: Server,
  database: Database,
} as const;

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <span className="font-mono text-sm text-gold">02 — stack</span>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          The tools I reach for{" "}
          <em className="font-serif italic text-gold">most</em>.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.label as keyof typeof iconMap];
          return (
            <Reveal key={group.label} delay={i * 120}>
              <div className="group h-full rounded-2xl border border-ink/10 bg-surface p-7 transition-colors duration-300 hover:border-gold/30">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 bg-surface-alt text-gold transition-colors group-hover:border-gold/30">
                    <Icon size={19} strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-xs text-ink-faint">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-medium capitalize text-ink">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-ink/10 px-3 py-1 font-body text-[13px] text-ink-soft transition-colors hover:border-gold/40 hover:text-ink"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
