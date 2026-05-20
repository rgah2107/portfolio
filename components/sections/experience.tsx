import { AnimatedSection } from "@/components/animated-section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <AnimatedSection
      id="experience"
      className="scroll-mt-20 border-t border-zinc-800/80 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest text-sky-400 uppercase">
          Experience
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-balance text-zinc-50 sm:text-4xl">
          8+ years building production software
        </p>
        <ol className="relative mt-12 space-y-0 border-l border-zinc-800 pl-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[calc(1rem+1px)] top-1.5 h-3 w-3 rounded-full border-2 border-sky-400 bg-zinc-950"
                aria-hidden
              />
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-100">{job.role}</h3>
                  <span className="text-sm text-zinc-500">{job.duration}</span>
                </div>
                <p className="mt-1 font-medium text-sky-400">{job.company}</p>
                <p className="text-sm text-zinc-500">{job.period}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-400">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
}
