"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle "falling code" matrix canvas, fixed behind everything.
 * Kept low-opacity so it reads as texture, not noise.
 */
export function MatrixBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    const fontSize = 14;
    const glyphs = "01<>/{}[]#$%&ABCDEF0123456789x!?".split("");

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -height);
    };
    resize();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let last = 0;
    const draw = (t: number) => {
      animationId = requestAnimationFrame(draw);
      if (t - last < 55) return; // throttle ~18fps for a calm effect
      last = t;

      ctx.fillStyle = "rgba(5, 7, 10, 0.12)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = glyphs[Math.floor(Math.random() * glyphs.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const lead = Math.random() > 0.985;
        ctx.fillStyle = lead ? "rgba(0,255,156,0.55)" : "rgba(0,255,156,0.12)";
        ctx.fillText(text, x, y);
        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    if (!reduce) animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-bg" />
      <canvas ref={ref} className="absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />
    </div>
  );
}
