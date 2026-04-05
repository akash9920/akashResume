export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-6">
      <div className="flex items-center gap-4 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 shadow-[var(--shadow-soft)]">
        <span className="h-3 w-3 animate-pulse rounded-full bg-[var(--color-accent)]" />
        <p className="text-sm text-[var(--color-text-muted)]">
          Loading portfolio experience...
        </p>
      </div>
    </div>
  );
}
