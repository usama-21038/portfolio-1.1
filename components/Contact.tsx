import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-surface px-8 py-20 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-gold/[0.08] blur-[100px]"
          />

          <div className="relative">
            <span className="font-mono text-sm text-gold">04 — contact</span>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Have a project in mind?{" "}
              <em className="font-serif italic text-gold">Let&apos;s build it.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-md font-body leading-relaxed text-ink-soft">
              Open to full-time roles, freelance work, and interesting problems
              in general. Reach out through any of these.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:shihabhasib777@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-medium text-ink-dark transition-colors hover:bg-gold-soft"
              >
                <Mail size={16} />
                Send an email
              </a>
              <a
                href="https://github.com/usama-21038"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 font-body text-sm text-ink transition-colors hover:border-gold/40 hover:bg-ink/5"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/usama-bin-hasan-5680263a5/"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 font-body text-sm text-ink transition-colors hover:border-gold/40 hover:bg-ink/5"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
