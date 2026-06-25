"use client";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { experience, education, awards, languages } from "@/data/content";
import { Briefcase, GraduationCap, Trophy, Languages } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="06"
          subtitle="career_log"
          title="Experience & Education"
        />

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10">
          {/* Timeline */}
          <div>
            <p className="mb-6 flex items-center gap-2 font-mono text-sm text-neon">
              <Briefcase className="h-4 w-4" /> professional_experience
            </p>
            <div className="relative border-l border-border pl-6 space-y-8">
              {experience.map((e, i) => (
                <Reveal key={e.role + e.org} delay={i * 0.06}>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full border border-neon/50 bg-bg">
                      <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                    </span>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="font-semibold text-white">{e.role}</h3>
                      <span className="font-mono text-xs text-muted">{e.period}</span>
                    </div>
                    <p className="text-sm text-neon/80">{e.org}</p>
                    <ul className="mt-2 space-y-1.5">
                      {e.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-2 text-sm text-muted leading-relaxed"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar: education, awards, languages */}
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-xl border border-border bg-card/60 p-5">
                <p className="mb-3 flex items-center gap-2 font-mono text-sm text-neon">
                  <GraduationCap className="h-4 w-4" /> education
                </p>
                <h3 className="font-semibold text-white">{education.degree}</h3>
                <p className="text-sm text-neon/80">{education.school}</p>
                <p className="font-mono text-xs text-muted">{education.period}</p>
                <ul className="mt-3 space-y-1.5">
                  {education.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-xl border border-border bg-card/60 p-5">
                <p className="mb-3 flex items-center gap-2 font-mono text-sm text-neon">
                  <Trophy className="h-4 w-4" /> awards
                </p>
                <div className="space-y-3">
                  {awards.map((a) => (
                    <div key={a.title}>
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-sm font-semibold text-white">{a.title}</h4>
                        <span className="font-mono text-[11px] text-muted">{a.period}</span>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">{a.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-xl border border-border bg-card/60 p-5">
                <p className="mb-3 flex items-center gap-2 font-mono text-sm text-neon">
                  <Languages className="h-4 w-4" /> languages
                </p>
                <div className="space-y-2">
                  {languages.map((l) => (
                    <div key={l.name} className="flex items-center justify-between text-sm">
                      <span className="text-white">{l.name}</span>
                      <span className="text-muted">{l.level}</span>
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
