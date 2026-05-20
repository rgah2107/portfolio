import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="scroll-mt-20 border-t border-zinc-800/80 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest text-sky-400 uppercase">
          Projects
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-balance text-zinc-50 sm:text-4xl">
          Selected work
        </p>
        <p className="mt-4 max-w-2xl text-zinc-400">
          A snapshot of products and platforms I have helped design, build, and
          ship for clients and employers.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={`${project.company}-${project.title}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50"
            >
              <div className="relative h-44 overflow-hidden ">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title} at ${project.company}`}
                  fill
                  className="absolute z-0"
                />
                {/* <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title} at ${project.company}`}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                /> */}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium tracking-wide text-sky-400 uppercase">
                  {project.company}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
