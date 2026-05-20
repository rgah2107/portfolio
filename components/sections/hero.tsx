import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center px-6 py-24">
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <p className="mb-4 text-sm font-medium tracking-widest text-sky-400 uppercase">
          Available for freelance &amp; contract work
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance text-zinc-50 sm:text-5xl lg:text-6xl">
          {site.name}
        </h1>
        <p className="mt-2 text-xl text-sky-400 sm:text-2xl">{site.title}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 text-pretty">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-sky-500 px-8 text-sm font-semibold text-zinc-950 transition-colors hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            Start a Project
          </a>
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 px-8 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            View Work
          </a>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <a
            href={`mailto:${site.email}`}
            className="text-zinc-500 transition-colors hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" aria-hidden />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 transition-colors hover:text-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6 motion-safe:animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
