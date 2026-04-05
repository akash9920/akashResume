"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)] px-6">
      <div className="max-w-lg rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-soft)]">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Something went wrong
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          The portfolio hit an unexpected issue.
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
          {error.message || "Please try refreshing the page."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
