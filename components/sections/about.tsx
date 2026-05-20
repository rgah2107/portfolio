import { AnimatedSection } from "@/components/animated-section";
import { about, competencies } from "@/lib/data";

export function About() {
  return (
    <AnimatedSection id="about" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest text-sky-400 uppercase">
          About
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-balance text-zinc-50 sm:text-4xl">
          Turning complex requirements into polished products
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
          {about.summary}
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {about.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-zinc-300"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-2">
          {competencies.map((c) => (
            <span
              key={c}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-300"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
