# Ramon Alvarez — Portfolio

Personal portfolio website for **Ramon Alvarez**, a Fullstack Engineer building production web apps across React/Next.js frontends and NestJS/Python backends.

**Live site:** [https://portfolio-xi-lilac-16.vercel.app](https://portfolio-xi-lilac-16.vercel.app)

## About

A single-page marketing site built to showcase professional experience, skills, selected projects, education, and contact details. Content is driven from a central data file (`lib/data.ts`) so updates stay simple without touching layout code.

### Sections

- **Hero** — introduction and call-to-action
- **About** — summary, highlights, and competencies
- **Skills** — technical stack grouped by category
- **Experience** — work history timeline
- **Projects** — selected work with screenshots
- **Education** — degree, certifications, languages, and testimonial
- **Contact** — email, phone, location, and social links

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — scroll-in section animations (respects `prefers-reduced-motion`)
- [Lucide React](https://lucide.dev/) — icons

## Getting Started

Requires [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### Other Scripts

```bash
pnpm build   # production build
pnpm start   # run production server locally
pnpm lint    # ESLint
```

## Project Structure

```
app/                 # Next.js App Router (layout, page, styles)
components/          # UI components and page sections
lib/data.ts          # Site content (copy, links, projects, experience)
public/projects/     # Project screenshots
```

To update copy, links, or project images, edit `lib/data.ts` and add images under `public/projects/imgs/`.

## Deployment

The project is deployed on [Vercel](https://vercel.com) and connected to the GitHub repository. Pushes to `main` trigger automatic production deployments.

Manual deploy:

```bash
pnpm dlx vercel@latest --prod
```

## License

Private — all rights reserved.
