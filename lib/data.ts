export const site = {
  name: "Ramon Alvarez",
  title: "Fullstack Engineer",
  tagline:
    "I build production web applications end-to-end—React/Next.js frontends and NestJS/Python backends—so your product ships reliably and scales.",
  email: "rgah2107@gmail.com",
  phone: "+375292345085",
  location: "Minsk, Belarus",
  linkedin: "https://linkedin.com/in/ramón-álvarez-4290a51b2",
  github: "https://github.com/rgah2107",
  yearsExperience: 8,
} as const;

export const about = {
  summary:
    "Fullstack Software Engineer with 8+ years building production web applications across React/Next.js frontends and NestJS/Python backends. I deliver maintainable systems end-to-end—from UI architecture and testing to API design, integrations, performance, and CI/CD—while collaborating effectively with distributed teams.",
  highlights: [
    "Full-stack ownership across UI, APIs, and data",
    "NestJS, Express, and Flask with REST and GraphQL",
    "CI/CD, integrations, performance, and reliability",
    "Fluent in English (C2)—smooth collaboration with global teams",
  ],
} as const;

export const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "Dart"],
  },
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Redux Toolkit",
      "TanStack Query",
      "React Hook Form",
      "Styled Components",
      "Flutter",
      "jQuery",
    ],
  },
  {
    category: "Testing",
    items: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Cypress",
      "WebdriverIO",
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Flask",
      "REST APIs",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "AWS Amplify",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "Storybook", "Single SPA"],
  },
] as const;

export const experience = [
  {
    role: "Fullstack Engineer",
    company: "DSPOT",
    period: "July 2022 – Present",
    duration: "3+ years",
    bullets: [
      "Develop and maintain React and Next.js web applications with TypeScript, TanStack Query, Redux Toolkit, and Tailwind CSS",
      "Build and maintain backend services with NestJS (REST/GraphQL), including auth, validation, and background jobs",
      "Own delivery and DevOps: CI/CD, environment promotion, observability, and production reliability",
      "Write unit and integration tests with Jest and Vitest",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Redux Toolkit",
      "NestJS",
      "GraphQL",
      "AWS",
      "Jest",
      "Vitest",
    ],
  },
  {
    role: "Fullstack Engineer",
    company: "Qa-bit",
    period: "August 2025 – January 2026",
    duration: "6 months",
    bullets: [
      "Built and maintained React and Next.js applications with TypeScript and Tailwind CSS",
      "Delivered backend endpoints with Express.js: REST APIs, validation, error handling, and data access",
      "Integrated frontend and backend for performance and reliability; improved build and deploy workflows",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    role: "Fullstack Engineer",
    company: "DATAMART",
    period: "November 2020 – July 2022",
    duration: "1 year 9 months",
    bullets: [
      "Developed micro frontend applications with React, TypeScript, and Single SPA",
      "Built React component library with Storybook; integrated APIs and GraphQL",
      "Implemented Flask backend services for internal tools and micro-frontend orchestration",
    ],
    stack: [
      "React",
      "TypeScript",
      "Single SPA",
      "Storybook",
      "Flask",
      "GraphQL",
      "AWS",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "NEXXTWAY",
    period: "April 2020 – November 2020",
    duration: "8 months",
    bullets: [
      "Developed React Rainbow open-source component library with Styled Components",
      "Implemented unit, integration, and E2E tests with Jest, Cypress, and WebdriverIO",
    ],
    stack: [
      "React",
      "Styled Components",
      "Jest",
      "Cypress",
      "WebdriverIO",
    ],
  },
  {
    role: "IT Specialist",
    company: "DESOFT",
    period: "November 2018 – July 2021",
    duration: "2 years 9 months",
    bullets: [
      "Led full software development lifecycle using Flutter and Odoo (custom modules and integrations)",
      "Extended Odoo backends in Python: models, workflows, reporting, and external system integrations",
    ],
    stack: ["Flutter", "Dart", "Python", "Odoo"],
  },
] as const;

export const projects = [
  {
    title: "Enterprise Web Platform",
    company: "DSPOT",
    description:
      "Production React/Next.js frontend with NestJS APIs, CI/CD, and full test coverage across the stack.",
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "AWS",
      "TanStack Query",
      "Vitest",
    ],
    image: "/projects/imgs/dspot-project.png",
  },
  {
    title: "SaaS Web Application",
    company: "Qa-bit",
    description:
      "Fullstack React/Next.js product with Express.js REST APIs—focused on integration, performance, and reliable delivery.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Express.js"],
    image: "/projects/imgs/qa-bit-project.png",
  },
  {
    title: "Micro-Frontend Ecosystem",
    company: "DATAMART",
    description:
      "Micro frontends with Single SPA, shared Storybook library, GraphQL integrations, and Flask services for orchestration.",
    stack: ["React", "Single SPA", "Flask", "GraphQL", "Storybook", "AWS"],
    image: "/projects/imgs/datamart-project.png",
  },
  {
    title: "React Rainbow Component Library",
    company: "NEXXTWAY",
    description:
      "Reusable UI component library with Storybook docs and comprehensive unit, integration, and E2E tests.",
    stack: ["React", "Styled Components", "Jest", "Cypress"],
    image: "/projects/imgs/nexxtway-project.png",
  },
  {
    title: "Business Management Suite",
    company: "DESOFT",
    description:
      "End-to-end software delivery with Flutter mobile apps and Odoo ERP integrations across the full product lifecycle.",
    stack: ["Python", "Odoo", "Flutter", "Dart"],
    image: "/projects/imgs/desoft-project.png",
  },
] as const;

export const education = {
  degree: "Bachelor of Science, Computer Science Engineering",
  school: "University of Informatic Sciences",
  year: 2018,
  thesis:
    "Computer system for decision-making in software product evaluation using Fuzzy Logic and Soft Computing methodology",
} as const;

export const certifications = [
  {
    name: "HackerRank Software Engineer Certificate",
    url: "https://www.hackerrank.com/certificates/4a37607bcdba",
  },
  {
    name: "HackerRank Frontend Developer (React) Certificate",
    url: "https://www.hackerrank.com/certificates/7a5f1775350e",
  },
  {
    name: "EF SET English Certificate",
    detail: "C2 Proficient (71/100)",
    url: "http://www.efset.org/cert/1hne5E",
  },
] as const;

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Proficient (C2)" },
] as const;

export const competencies = [
  "End-to-End Delivery",
  "API Design",
  "Team Collaboration",
  "Problem Solving",
] as const;

export const testimonial = {
  quote:
    "Ramon has been an invaluable asset to our team, consistently delivering clean, efficient solutions. His technical expertise, collaborative spirit, and commitment to excellence make him an exceptional team member.",
  author: "DSpot Team Lead",
  note: "Full recommendation available on LinkedIn",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
