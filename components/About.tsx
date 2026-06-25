"use client";

import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { profile, stats, competencies } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="01" subtitle="who_am_i" title="About" />

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          {/* Photo */}
          <Reveal>
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <div className="relative rounded-xl overflow-hidden border border-border scanlines">
                <Image
                  src="/assets/foto.jpg"
                  alt="Yesaya Pasaribu"
                  width={520}
                  height={680}
                  className="w-full object-cover grayscale-[0.2] contrast-[1.05]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 rounded-lg border border-neon/30 bg-card px-3 py-2 font-mono text-xs shadow-neon-sm">
                <span className="text-neon">OSCP</span> ·{" "}
                <span className="text-high">CEH</span> ·{" "}
                <span className="text-crit">CRTOM</span>
              </div>
              <div className="pointer-events-none absolute -top-3 -left-3 h-12 w-12 border-l-2 border-t-2 border-neon/50" />
            </div>
          </Reveal>

          {/* Bio */}
          <div>
            <Reveal>
              <p className="text-muted leading-relaxed">{profile.summary}</p>
              <p className="mt-4 text-muted leading-relaxed">
                Fluent in the OWASP Web & Mobile Top 10, with end-to-end reporting
                from PoC to CVSS scoring and remediation. Cum Laude graduate, Top 3%
                of 830. Seeking{" "}
                <span className="text-white">Penetration Tester, Red Team, or AppSec</span>{" "}
                roles — onsite or remote.
              </p>
            </Reveal>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className="card-glow rounded-lg border border-border bg-card/60 p-4 text-center">
                    <div className="font-mono text-3xl font-bold gradient-text">
                      <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-wide text-muted">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Competencies */}
            <Reveal delay={0.1}>
              <div className="mt-8">
                <p className="font-mono text-sm text-neon mb-3">// core_competencies</p>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {competencies.map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm text-muted">
                      <CheckCircle2 className="h-4 w-4 text-neon/70 shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
