/** Decorative gradients for the hero — lives on `main` so they are not clipped by section boundaries. */
export function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(110vh,900px)]"
      aria-hidden
    >
      <div className="absolute -top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] translate-y-1/4 rounded-full bg-violet-500/10 blur-3xl" />
    </div>
  );
}
