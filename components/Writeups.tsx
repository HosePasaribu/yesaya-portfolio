"use client";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { writeups } from "@/data/content";
import { FileText, Lock, Clock } from "lucide-react";

export function Writeups() {
  return (
    <section id="writeups" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="05" subtitle="knowledge_base" title="Write-ups" />

        <div className="grid sm:grid-cols-2 gap-5">
          {writeups.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <article className="card-glow h-full rounded-xl border border-border bg-card/60 p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-neon">
                    <FileText className="h-4 w-4" />
                  </span>
                  <span
                    className={`rounded px-2 py-0.5 font-mono text-[10px] font-bold border ${
                      w.sev === "CRITICAL"
                        ? "text-crit border-crit/40 bg-crit/10"
                        : "text-high border-high/40 bg-high/10"
                    }`}
                  >
                    {w.sev}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-white leading-snug">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{w.summary}</p>
                <div className="mt-4 flex items-center justify-between font-mono text-xs text-muted">
                  <span className="text-neon/80">{w.tag}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {w.read}
                  </span>
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-muted/80">
                  <Lock className="h-3.5 w-3.5 text-neon/60" /> Disclosed under NDA
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center font-mono text-sm text-muted">
            {/* honest note */}
            <span className="text-neon/60">{"//"}</span> Detailed technical write-ups
            published responsibly after disclosure & remediation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
