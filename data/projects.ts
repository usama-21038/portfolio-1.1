export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: "Live" | "In progress" | "Personal build";
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Smart Car Parking & Sharing",
    description:
      "A location-based system that finds nearby parking spots in real time and lets owners share unused space with other drivers.",
    tags: ["Next.js","TypeScript", "Express.js", "PostgreSQL", "REST API"],
    status: "Live",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Dark%20themed%20web%20dashboard%20for%20smart%20car%20parking%20app%2C%20city%20map%20view%20with%20green%20location%20pins%20marking%20available%20parking%20spots%2C%20sidebar%20with%20search%20filters%2C%20sleek%20modern%20SaaS%20interface%2C%20professional%20UI%20design%2C%20high%20fidelity&image_size=landscape_16_9",
    featured: true,
  },
  {
    title: "Healthcare Management System",
    description:
      "Manages patient records, appointment scheduling, and staff workflows for a clinic, with role-based access for doctors and admins.",
    tags: ["Next.js","TypeScript", "Express.js", "Prisma", "MySQL"],
    status: "Live",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20healthcare%20management%20dashboard%20web%20application%2C%20appointment%20calendar%20grid%2C%20patient%20record%20cards%2C%20doctor%20schedule%20panel%2C%20clean%20interface%20with%20teal%20accents%20on%20white%2C%20professional%20medical%20SaaS%20UI%20design%2C%20high%20fidelity&image_size=landscape_16_9",
  },
  {
    title: "Online Shopping Management",
    description:
      "An e-commerce back office for managing products, orders, and inventory, built on top of a REST API with a relational database.",
    tags: ["Next.js","TypeScript", "Prisma", "PostgreSQL"],
    status: "Personal build",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=E-commerce%20back%20office%20admin%20dashboard%2C%20product%20inventory%20table%2C%20sales%20revenue%20line%20chart%2C%20order%20status%20cards%2C%20dark%20interface%20with%20amber%20highlights%2C%20professional%20admin%20panel%20UI%20design%2C%20high%20fidelity&image_size=landscape_16_9",
  },
  {
    title: "GearUp",
    description:
      "A lightweight equipment listing site where users can browse and post gear, focused on a fast, uncluttered browsing experience.",
    tags: ["Next.js","TypeScript", "Tailwind CSS", "PostgreSQL","REST API","Express.js"],
    status: "Personal build",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Minimal%20marketplace%20website%20for%20outdoor%20gear%2C%20grid%20of%20product%20listing%20cards%20with%20camping%20equipment%20photos%2C%20price%20tags%2C%20clean%20light%20interface%2C%20modern%20web%20design%2C%20professional%20UI&image_size=landscape_16_9",
  },
  {
    title: "Blog Platform",
    description:
      "A simple blogging site with post creation, categories, and a clean reading layout, built to practice full-stack CRUD from scratch.",
    tags: ["HTML", "CSS", "JavaScript", "Express.js"],
    status: "Personal build",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Clean%20editorial%20blog%20website%2C%20featured%20article%20with%20large%20image%2C%20reading%20list%20of%20posts%2C%20elegant%20typography%2C%20generous%20whitespace%2C%20modern%20minimal%20web%20design%2C%20professional%20UI&image_size=landscape_16_9",
  },
];

export type SkillGroup = {
  label: string;
  accent: "coral" | "teal" | "violet";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "frontend",
    accent: "coral",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    label: "backend",
    accent: "teal",
    skills: ["Express.js", "Prisma ORM", "REST API"],
  },
  {
    label: "database",
    accent: "violet",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
];

export const marqueeItems = [
  "Next.js",
  "TypeScript",
  "React.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Prisma ORM",
  "Tailwind CSS",
  "REST APIs",
];
