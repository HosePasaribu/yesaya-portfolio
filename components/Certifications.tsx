"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { certifications, otherCerts } from "@/data/content";
import { BadgeCheck, X, Maximize2, Award } from "lucide-react";

export function Certifications() {
  const [active, setActive] = useState<null | (typeof certifications)[number]>(null);

  return (
    <section id="certs" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="02"
          subtitle="verified_credentials"
          title="Certifications"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.1}>
              <button
                onClick={() => setActive(c)}
                className="card-glow group block w-full text-left rounded-xl border border-border bg-card/60 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface scanlines">
                  <Image
                    src={c.image}
                    alt={c.full}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-bg/70 backdrop-blur px-2 py-1 text-[11px] font-mono text-neon">
                    <BadgeCheck className="h-3.5 w-3.5" /> verified
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded bg-bg/60 backdrop-blur px-2 py-1 text-[11px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="h-3 w-3" /> view certificate
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-2xl font-bold text-white">{c.name}</h3>
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: c.accent }}
                    />
                  </div>
                  <p className="mt-1 text-sm text-white/80">{c.full}</p>
                  <p className="mt-0.5 text-xs text-muted">
                    {c.issuer} · {c.date}
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{c.blurb}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Other credentials */}
        <Reveal delay={0.1}>
          <div className="mt-8 rounded-xl border border-border bg-card/40 p-5">
            <p className="font-mono text-sm text-neon mb-3 flex items-center gap-2">
              <Award className="h-4 w-4" /> additional_credentials
            </p>
            <div className="flex flex-wrap gap-2">
              {otherCerts.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-surface/60 px-3 py-1.5 text-sm text-muted"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/90 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-xl border border-neon/30 bg-card overflow-hidden shadow-neon"
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <p className="font-mono text-sm text-white">
                  <span className="text-neon">{active.name}</span> — {active.full}
                </p>
                <button
                  onClick={() => setActive(null)}
                  className="text-muted hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="relative bg-surface">
                <Image
                  src={active.image}
                  alt={active.full}
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
