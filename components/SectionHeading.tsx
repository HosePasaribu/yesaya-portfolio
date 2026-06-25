import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-sm text-neon mb-2">
        <span className="text-neon/50">{index}.</span> {subtitle}
      </p>
      <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-neon to-transparent" />
    </Reveal>
  );
}
