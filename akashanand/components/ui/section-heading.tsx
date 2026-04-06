type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-xs sm:tracking-[0.35em]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)] sm:mt-4 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}
