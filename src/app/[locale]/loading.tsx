export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="panel flex flex-col items-center gap-6 rounded-[2rem] px-10 py-12 text-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="loading-ring absolute inset-0 rounded-full border border-sky-300/40" />
          <div className="loading-ring absolute inset-2 rounded-full border border-sky-200/28 [animation-delay:0.22s]" />
          <div className="h-3 w-3 rounded-full bg-sky-200" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Loading</p>
          <p className="mt-2 text-lg text-foreground">Preparing the portfolio experience</p>
        </div>
      </div>
    </div>
  );
}
