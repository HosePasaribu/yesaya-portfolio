"use client";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile } from "@/data/content";
import { Mail, Phone, MapPin, Download, ArrowUpRight } from "lucide-react";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "HackerOne",
    value: `@${profile.hackeroneHandle}`,
    href: profile.hackerone,
    icon: ArrowUpRight,
  },
  {
    label: "LinkedIn",
    value: "in/yesayapasaribu",
    href: profile.linkedin,
    icon: ArrowUpRight,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    icon: Phone,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading index="07" subtitle="get_in_touch" title="Let's Work Together" />

        <Reveal>
          <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-10 text-center">
            <p className="mx-auto max-w-xl text-muted leading-relaxed">
              I'm currently{" "}
              <span className="text-neon">open to Penetration Tester, Red Team & AppSec roles</span>{" "}
              — onsite, remote, or relocation worldwide. If you need someone who finds
              the Critical bugs before attackers do, let's talk.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 font-mono text-xs text-muted">
              <MapPin className="h-3.5 w-3.5 text-neon" /> {profile.location} —{" "}
              {profile.availability}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="card-glow flex items-center gap-3 rounded-lg border border-border bg-surface/50 px-4 py-3"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-neon/30 bg-neon/5 text-neon">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wide text-muted">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm text-white">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded bg-neon px-6 py-3 font-mono text-sm font-semibold text-bg hover:shadow-neon transition-all"
              >
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a
                href={profile.cv}
                target="_blank"
                className="inline-flex items-center gap-2 rounded border border-border px-6 py-3 font-mono text-sm text-white hover:border-neon/50 hover:text-neon transition-all"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
