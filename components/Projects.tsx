import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const featured = project.featured;

  return (
    <Reveal delay={index * 80} className={featured ? "sm:col-span-2" : ""}>
      <article
        className={`group h-full overflow-hidden rounded-2xl border border-ink/10 bg-surface transition-all duration-300 hover:border-gold/30 hover:shadow-[0_20px_60px_-20px_rgba(217,178,106,0.15)] ${
          featured ? "sm:grid sm:grid-cols-2" : ""
        }`}
      >
        <div
          className={`relative overflow-hidden ${
            featured ? "min-h-[220px]" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.title} interface preview`}
            fill
            sizes={featured ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 640px) 50vw, 100vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent"
          />
          <span
            className={`absolute left-4 top-4 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md ${
              project.status === "Live"
                ? "border-emerald-400/30 bg-paper/60 text-emerald-300"
                : "border-ink/20 bg-paper/60 text-ink-soft"
            }`}
          >
            {project.status}
          </span>
        </div>

        <div className="flex flex-col p-6 sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-medium tracking-tight text-ink">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
            />
          </div>
          <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
            {project.description}
          </p>
          <ul className={`mt-5 flex flex-wrap gap-2 ${featured ? "mt-auto pt-5" : ""}`}>
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-ink/10 px-2.5 py-1 font-mono text-xs text-ink-soft transition-colors group-hover:border-gold/25"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <span className="font-mono text-sm text-gold">03 — projects</span>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          A few things I&apos;ve{" "}
          <em className="font-serif italic text-gold">shipped</em>.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
