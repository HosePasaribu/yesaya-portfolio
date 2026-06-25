import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted">
        <p>
          <span className="text-neon">©</span> {new Date().getFullYear()}{" "}
          {profile.name} — built with Next.js & Tailwind.
        </p>
        <p className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
          </span>
          systems operational
        </p>
      </div>
    </footer>
  );
}
