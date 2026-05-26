import { Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { AnimatedSection } from "@/components/animated-section";
import { site } from "@/lib/data";

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="scroll-mt-20 border-t border-zinc-800/80 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest text-sky-400 uppercase">
          Contact
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-balance text-zinc-50 sm:text-4xl">
          Let&apos;s build something together
        </p>
        <p className="mt-4 max-w-xl text-lg text-zinc-400">
          Looking for a fullstack engineer for your next product, API work, or
          greenfield app? Reach out—I typically respond within 24 hours.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-4 text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            <Mail className="h-5 w-5 shrink-0 text-sky-400" aria-hidden />
            <span>{site.email}</span>
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-4 text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            <Phone className="h-5 w-5 shrink-0 text-sky-400" aria-hidden />
            <span>{site.phone}</span>
          </a>
          <span className="inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-4 text-zinc-400">
            <MapPin className="h-5 w-5 shrink-0 text-sky-400" aria-hidden />
            <span>{site.location}</span>
          </span>
        </div>

        <div className="mt-8 flex gap-6">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            <LinkedInIcon className="h-5 w-5" />
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            <GitHubIcon className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
