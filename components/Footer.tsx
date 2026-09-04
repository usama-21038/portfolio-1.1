import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/5">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <a
            href="#top"
            className="font-display text-lg font-medium tracking-tight text-ink"
          >
            USAMA<span className="text-gold">.</span>
          </a>

          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 text-ink-soft">
            <a
              href="https://github.com/usama-21038"
              aria-label="GitHub"
              className="rounded-full p-2 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/usama-bin-hasan-5680263a5/"
              aria-label="LinkedIn"
              className="rounded-full p-2 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:shihabhasib777@gmail.com"
              aria-label="Email"
              className="rounded-full p-2 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-ink/5 pt-6 font-mono text-xs text-ink-faint sm:flex-row">
          <span>© {new Date().getFullYear()} Usama Bin Hasan</span>
          <span>Built with Next.js &amp; TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
