"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: string;
  prefix?: string;
  suffix?: string;
}) {
  const target = parseInt(value, 10);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || isNaN(target)) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {isNaN(target) ? value : n}
      {suffix}
    </span>
  );
}
