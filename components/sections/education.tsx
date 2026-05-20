import { AnimatedSection } from "@/components/animated-section";
import {
  certifications,
  education,
  languages,
  testimonial,
} from "@/lib/data";

export function Education() {
  return (
    <AnimatedSection
      id="education"
      className="scroll-mt-20 border-t border-zinc-800/80 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest text-sky-400 uppercase">
          Education &amp; Credentials
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-balance text-zinc-50 sm:text-4xl">
          Background that supports the craft
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h3 className="font-semibold text-zinc-100">{education.degree}</h3>
            <p className="mt-1 text-sky-400">
              {education.school} ({education.year})
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              <span className="font-medium text-zinc-300">Thesis: </span>
              {education.thesis}
            </p>
          </div>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <h3 className="font-semibold text-zinc-100">{cert.name}</h3>
                {"detail" in cert && cert.detail && (
                  <p className="mt-1 text-sm text-zinc-400">{cert.detail}</p>
                )}
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-sky-400 transition-colors hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                  Verify certificate →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-6 py-4 text-center"
            >
              <p className="font-semibold text-zinc-100">{lang.name}</p>
              <p className="text-sm text-zinc-500">{lang.level}</p>
            </div>
          ))}
        </div>

        <blockquote className="mt-12 rounded-xl border border-sky-500/20 bg-sky-500/5 p-8">
          <p className="text-lg leading-relaxed text-zinc-300 italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="mt-4 text-sm text-zinc-500">
            — {testimonial.author}
            <span className="block text-zinc-600">{testimonial.note}</span>
          </footer>
        </blockquote>
      </div>
    </AnimatedSection>
  );
}
