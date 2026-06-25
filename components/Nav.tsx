"use client";

import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#certs", label: "certs" },
  { href: "#skills", label: "skills" },
  { href: "#research", label: "research" },
  { href: "#writeups", label: "writeups" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono font-bold tracking-tight">
          <Terminal className="h-5 w-5 text-neon" />
          <span className="text-white">yesaya</span>
          <span className="text-neon animate-blink">_</span>
        </a>

        <div className="hidden md:flex items-center gap-7 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-neon transition-colors"
            >
              <span className="text-neon/50">/</span>
              {l.label}
            </a>
          ))}
          <a
            href="/assets/Yesaya-Pasaribu-CV.pdf"
            target="_blank"
            className="px-4 py-1.5 rounded border border-neon/40 text-neon hover:bg-neon/10 hover:shadow-neon-sm transition-all"
          >
            resume.pdf
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur border-b border-border px-5 py-4 flex flex-col gap-4 font-mono">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-neon"
            >
              <span className="text-neon/50">/</span>
              {l.label}
            </a>
          ))}
          <a
            href="/assets/Yesaya-Pasaribu-CV.pdf"
            target="_blank"
            className="text-neon"
          >
            resume.pdf →
          </a>
        </div>
      )}
    </header>
  );
}
