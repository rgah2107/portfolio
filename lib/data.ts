export const site = {
  name: "Ramon Alvarez",
  title: "Software Engineer",
  tagline:
    "I build fast, accessible web apps with React and Next.js—so your product ships reliably and scales with your business.",
  email: "rgah2107@gmail.com",
  phone: "+375292345085",
  location: "Minsk, Belarus",
  linkedin: "https://linkedin.com/in/ramón-álvarez-4290a51b2",
  github: "https://github.com/rgah2107",
  yearsExperience: 8,
} as const;

export const about = {
  summary:
    "Experienced Software Engineer with 8+ years specializing in frontend development, the React ecosystem, and cloud integration. I deliver scalable web applications and help teams move faster through solid architecture, testing, and clear communication.",
  highlights: [
    "End-to-end ownership from design systems to production",
    "AWS and GraphQL integrations for real-world products",
    "Strong testing culture: unit, integration, and E2E",
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
      "NestJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "Amplify",
      "GraphQL",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "Storybook", "Single SPA", "CASL"],
  },
] as const;

export const experience = [
  {
    role: "Frontend Developer",
    company: "DSPOT",
    period: "July 2022 – Present",
    duration: "3+ years",
    bullets: [
      "Develop and maintain React-based web applications with TypeScript",
      "Integrate applications with AWS APIs and cloud services",
      "Write comprehensive unit and integration tests using Jest and Vitest",
      "Perform code reviews and maintain application performance",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Redux Toolkit",
      "AWS Amplify",
      "Vitest",
      "NestJS",
      "jQuery",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Qa-bit",
    period: "August 2025 – January 2026",
    duration: "6 months",
    bullets: [
      "Develop and maintain React-based web applications with TypeScript",
      "Integrate applications with NestJS APIs and cloud services",
      "Perform code reviews and maintain application performance",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Frontend Developer",
    company: "DATAMART",
    period: "November 2020 – July 2022",
    duration: "1 year 9 months",
    bullets: [
      "Developed micro web applications using React and TypeScript",
      "Built React component library with Storybook documentation",
      "Integrated applications with AWS APIs and GraphQL",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS",
      "Single SPA",
      "GraphQL",
    ],
  },
  {
    role: "Frontend Developer",
    company: "NEXXTWAY",
    period: "April 2020 – November 2020",
    duration: "8 months",
    bullets: [
      "Developed React component library (React Rainbow Component)",
      "Implemented comprehensive testing suite (unit, integration, E2E)",
    ],
    stack: [
      "React",
      "JavaScript",
      "Jest",
      "Cypress",
      "WebdriverIO",
      "Styled Components",
    ],
  },
  {
    role: "IT Specialist",
    company: "DESOFT",
    period: "November 2018 – July 2021",
    duration: "2 years 9 months",
    bullets: [
      "Full software development lifecycle from vision to implementation",
      "Software requirement analysis and object-oriented development",
    ],
    stack: ["Flutter", "Odoo"],
  },
] as const;

export const projects = [
  {
    title: "Enterprise Web Platform",
    company: "DSPOT",
    description:
      "Production React/Next.js application with AWS integration, robust state management, and full test coverage.",
    stack: ["Next.js", "TypeScript", "AWS Amplify", "TanStack Query", "NestJS"],
    image: "/projects/imgs/dspot-project.png",
  },
  {
    title: "SaaS Web Application",
    company: "Qa-bit",
    description:
      "Modern React/Next.js product integrated with NestJS APIs—focused on performance, maintainability, and clean UI.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS"],
    image: "/projects/imgs/qa-bit-project.png",
  },
  {
    title: "Micro-Frontend Ecosystem",
    company: "DATAMART",
    description:
      "Modular micro web apps with a shared component library, GraphQL APIs, and Single SPA orchestration.",
    stack: ["React", "Single SPA", "GraphQL", "Storybook"],
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
  degree: "Computer Science Engineer",
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
  "Problem Solving",
  "Fast Learning",
  "Team Collaboration",
  "Multitasking",
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
