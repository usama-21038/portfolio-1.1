"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const typedLine =
  'role: "Full Stack Developer", stack: ["Next.js", "TypeScript", "PostgreSQL"]';

export default function Hero() {
  const [visibleChars, setVisibleChars] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (visibleChars >= typedLine.length) {
      setDone(true);
      return;
    }
    const timeout = setTimeout(() => setVisibleChars((c) => c + 1), 22);
    return () => clearTimeout(timeout);
  }, [visibleChars]);

  return (
    <section id="top" className="bg-grid relative overflow-hidden px-6 pb-24 pt-36 sm:pt-44">
      {/* Soft radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper to-transparent"
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-surface/70 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-gold" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="font-mono text-xs text-ink-soft">
              Available for new projects
            </span>
          </div>

          <h1 className="mt-7 font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
            I build web apps that hold up under{" "}
            <em className="font-serif italic text-gold">real users</em>, not
            just demos.
          </h1>

          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-ink-soft">
            Full-stack developer working across React, Next.js, and Express —
            from database schema to the pixels people actually click on.
          </p>

          <div className="mt-7 max-w-lg rounded-xl border border-ink/10 bg-surface/80 px-4 py-3 font-mono text-xs leading-relaxed text-gold-soft sm:text-sm">
            <span className="mr-2 text-ink-faint">$</span>
            {typedLine.slice(0, visibleChars)}
            {!done && <span className="animate-blink text-ink-soft">▍</span>}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-medium text-ink-dark transition-all hover:bg-gold-soft"
            >
              See my projects
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <div className="flex items-center gap-1 text-ink-soft">
              <a
                href="https://github.com/usama-21038"
                aria-label="GitHub"
                className="rounded-full p-2.5 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <Github size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/usama-bin-hasan-5680263a5/"
                aria-label="LinkedIn"
                className="rounded-full p-2.5 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <Linkedin size={19} />
              </a>
              <a
                href="mailto:shihabhasib@gmail.com"
                aria-label="Email"
                className="rounded-full p-2.5 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] border border-gold/20"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-ink/10">
            {/*
              Swap this file to update your photo:
              put a new image at /public/profile.jpg (same filename),
              or change the src below to a different path.
            */}
            <Image
              src="/profile.jpg"
              alt="Usama Bin Hasan"
              width={480}
              height={600}
              priority
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-paper/40 via-transparent to-transparent"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-4 py-2.5 font-mono text-xs text-ink shadow-lg shadow-black/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            open to work
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="relative mx-auto mt-20 flex w-fit items-center gap-2 font-mono text-xs text-ink-faint transition-colors hover:text-ink-soft"
      >
        scroll <ArrowDown size={14} />
      </a>
    </section>
  );
}
