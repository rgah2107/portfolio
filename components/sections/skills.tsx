import { AnimatedSection } from "@/components/animated-section";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <AnimatedSection id="skills" className="scroll-mt-20 border-t border-zinc-800/80 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest text-sky-400 uppercase">
          Skills
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-balance text-zinc-50 sm:text-4xl">
          Technologies I work with daily
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <h3 className="font-semibold text-zinc-100">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block rounded-md bg-zinc-800 px-2.5 py-1 text-sm text-zinc-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
