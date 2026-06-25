import { competencies } from "@/data/content";

export function Marquee() {
  const items = [...competencies, ...competencies];
  return (
    <div className="relative border-y border-border bg-surface/40 py-4 overflow-hidden fade-edges">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {items.map((c, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-mono text-sm text-muted"
          >
            {c}
            <span className="text-neon">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
