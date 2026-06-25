"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Shield, MapPin } from "lucide-react";
import { profile } from "@/data/content";

const roles = [
  "Penetration Tester",
  "Bug Bounty Hunter",
  "Red Team Operator",
  "AppSec Researcher",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = deleting ? 45 : 90;
    const timer = setTimeout(() => {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === current) setTimeout(() => setDeleting(true), 1400);
      else if (deleting && next === "") {
        setDeleting(false);
        setI((v) => v + 1);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, i, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center w-full">
        {/* Left: intro */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-3 py-1 text-xs font-mono text-neon mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            Available for hire — Worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-4xl sm:text-6xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-white">Yesaya</span>
            <br />
            <span className="gradient-text text-glow">Pasaribu</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 font-mono text-lg sm:text-2xl text-muted"
          >
            <span className="text-neon">$</span> whoami →{" "}
            <span className="text-white">{typed}</span>
            <span className="text-neon animate-blink">▋</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-muted/90 leading-relaxed"
          >
            OSCP · CEH · CRTOM certified offensive security researcher specializing in{" "}
            <span className="text-white">web, Android & API</span> security. Verified on{" "}
            <span className="text-neon">HackerOne</span> and the{" "}
            <span className="text-neon">Google VRP</span> with Critical findings —
            SQLi, IDOR/BOLA & RCE — on production systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#research"
              className="group inline-flex items-center gap-2 rounded bg-neon px-5 py-3 font-mono text-sm font-semibold text-bg hover:shadow-neon transition-all"
            >
              <Shield className="h-4 w-4" />
              View Research
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded border border-border px-5 py-3 font-mono text-sm text-white hover:border-neon/50 hover:text-neon transition-all"
            >
              Get in touch
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted font-mono">
              <MapPin className="h-4 w-4 text-neon/70" />
              {profile.location}
            </span>
          </motion.div>
        </div>

        {/* Right: terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative"
        >
          <div className="rounded-xl border border-border bg-card/80 backdrop-blur shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border bg-surface/80 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-crit/80" />
              <span className="h-3 w-3 rounded-full bg-high/80" />
              <span className="h-3 w-3 rounded-full bg-neon/80" />
              <span className="ml-3 font-mono text-xs text-muted">
                yesaya@kali: ~/recon
              </span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-relaxed space-y-1.5">
              <p className="text-muted"><span className="text-neon">➜</span> ~ whoami</p>
              <p className="text-white">yesaya_pasaribu</p>
              <p className="text-muted"><span className="text-neon">➜</span> ~ cat profile.json</p>
              <pre className="text-white/90 whitespace-pre-wrap">{`{
  "role":   "Penetration Tester",
  "certs":  ["OSCP","CEH","CRTOM"],
  "h1_rep": 1157,
  "h1_rank":"#1 private program",
  "google": "VRP verified",
  "focus":  ["web","android","api"]
}`}</pre>
              <p className="text-muted"><span className="text-neon">➜</span> ~ ./scan --target prod</p>
              <p>
                <span className="text-crit">[CRITICAL]</span>{" "}
                <span className="text-white/80">SQLi · IDOR · BOLA · RCE</span>
              </p>
              <p className="text-neon">
                [+] 15+ orgs disclosed · 0 false positives<span className="animate-blink">▋</span>
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-px rounded-xl ring-1 ring-neon/10" />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted hover:text-neon transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 animate-float" />
      </a>
    </section>
  );
}
