"use client";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { skills } from "@/data/content";
import {
  Wrench,
  Bug,
  Smartphone,
  Code2,
  Cloud,
  Database,
} from "lucide-react";

const icons = [Wrench, Bug, Smartphone, Code2, Cloud, Database];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="03" subtitle="arsenal" title="Skills & Tooling" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.category} delay={i * 0.07}>
                <div className="card-glow h-full rounded-xl border border-border bg-card/60 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-neon/30 bg-neon/5 text-neon">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-mono text-sm font-semibold text-white">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-border bg-surface/60 px-2.5 py-1 font-mono text-xs text-muted hover:border-neon/40 hover:text-neon transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
