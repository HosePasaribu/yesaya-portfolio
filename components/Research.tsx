"use client";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { bugBounty, featured } from "@/data/content";
import {
  ExternalLink,
  Trophy,
  Globe,
  Smartphone,
  ShieldAlert,
  Lock,
} from "lucide-react";

function SevBadge({ sev }: { sev: string }) {
  const crit = sev === "CRITICAL";
  return (
    <span
      className={`shrink-0 rounded px-2 py-0.5 font-mono text-[10px] font-bold tracking-wide ${
        crit
          ? "bg-crit/15 text-crit border border-crit/40"
          : "bg-high/15 text-high border border-high/40"
      }`}
    >
      {sev}
    </span>
  );
}

function FindingRow({
  f,
}: {
  f: { sev: string; title: string; desc: string; cwe: string; owasp: string };
}) {
  return (
    <div className="group flex gap-3 rounded-lg border border-border bg-surface/40 p-3.5 hover:border-neon/30 transition-colors">
      <SevBadge sev={f.sev} />
      <div className="min-w-0">
        <p className="font-mono text-sm font-semibold text-white">{f.title}</p>
        <p className="mt-0.5 text-sm text-muted leading-relaxed">{f.desc}</p>
        <div className="mt-1.5 flex flex-wrap gap-2 font-mono text-[10px] text-muted">
          <span className="rounded bg-bg/60 px-1.5 py-0.5 border border-border">{f.cwe}</span>
          <span className="rounded bg-bg/60 px-1.5 py-0.5 border border-border">OWASP {f.owasp}</span>
        </div>
      </div>
    </div>
  );
}

export function Research() {
  return (
    <section id="research" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="04"
          subtitle="offensive_security"
          title="Security Research & Bug Bounty"
        />

        {/* Programs */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {bugBounty.map((b, i) => (
            <Reveal key={b.program} delay={i * 0.1}>
              <div className="card-glow h-full rounded-xl border border-border bg-card/60 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      {i === 0 ? (
                        <Trophy className="h-5 w-5 text-neon" />
                      ) : (
                        <ShieldAlert className="h-5 w-5 text-cyan-glow" />
                      )}
                      <h3 className="font-mono text-xl font-bold text-white">
                        {b.program}
                      </h3>
                    </div>
                    <p className="mt-1 font-mono text-sm text-neon">{b.handle}</p>
                  </div>
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-neon"
                    aria-label={`Open ${b.program}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-1 text-xs text-muted font-mono">{b.period}</p>

                <ul className="mt-4 space-y-2.5">
                  {b.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 rounded-lg border border-border bg-surface/50 px-3 py-2">
                  <p className="font-mono text-[11px] text-muted">
                    <span className="text-neon">focus:</span> {b.focus}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Featured engagement */}
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-crit/25 bg-gradient-to-br from-card to-surface p-6 sm:p-8">
            <div className="absolute top-0 right-0 h-40 w-40 bg-crit/10 blur-3xl rounded-full" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-crit/40 bg-crit/10 px-3 py-1 font-mono text-xs text-crit">
                  ◆ FEATURED ENGAGEMENT
                </span>
                <span className="font-mono text-xs text-muted">{featured.period}</span>
              </div>
              <h3 className="mt-4 font-mono text-2xl sm:text-3xl font-bold text-white">
                {featured.title}
              </h3>
              <p className="mt-1 text-muted">{featured.scope}</p>

              <div className="mt-6 grid lg:grid-cols-2 gap-6">
                <div>
                  <p className="mb-3 flex items-center gap-2 font-mono text-sm text-neon">
                    <Globe className="h-4 w-4" /> Web Application Findings
                  </p>
                  <div className="space-y-2.5">
                    {featured.web.map((f) => (
                      <FindingRow key={f.title} f={f} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 flex items-center gap-2 font-mono text-sm text-neon">
                    <Smartphone className="h-4 w-4" /> Android Findings (e-Care)
                  </p>
                  <div className="space-y-2.5">
                    {featured.mobile.map((f) => (
                      <FindingRow key={f.title} f={f} />
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3 rounded-lg border border-border bg-bg/40 p-4">
                    <Lock className="h-5 w-5 shrink-0 text-neon/70" />
                    <p className="text-xs text-muted leading-relaxed">{featured.note}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
