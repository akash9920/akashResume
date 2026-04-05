type ExperienceCardProps = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: readonly string[];
  stack: readonly string[];
};

export function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
  highlights,
  stack,
}: ExperienceCardProps) {
  return (
    <article className="group relative rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-surface),var(--color-surface-muted))] p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)] sm:p-7">
      <div className="absolute -left-[2.15rem] top-9 hidden h-4 w-4 rounded-full border-4 border-[var(--color-bg)] bg-[var(--color-accent)] lg:block" />
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
            {company}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            {location}
          </p>
          <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
            {description}
          </p>
        </div>
        <span className="rounded-full border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/75 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
          {period}
        </span>
      </div>

      <ul className="mt-6 space-y-3">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-3 text-sm leading-7 text-[var(--color-text-muted)]"
          >
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/72 px-3 py-1.5 text-xs text-[var(--color-text-muted)] transition-colors duration-200 group-hover:border-[var(--color-accent)]/30 group-hover:text-[var(--color-text)]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
