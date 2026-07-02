export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  featured: boolean;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "TaskMaster Pro",
    description:
      "A premium full-stack task management application featuring JWT authentication, dashboard analytics, CRUD operations, search, filters, due dates, priorities, and responsive UI.",

    image: "/images/todo.png",

    github: "https://github.com",

    live: "https://derhasad-taskmaster-pro.vercel.app",

    featured: true,

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
  },

  {
    title: "Portfolio Website",

    description:
      "Modern animated portfolio built with Next.js 15, TypeScript, Framer Motion and Tailwind CSS featuring premium UI and smooth interactions.",

    image: "/images/portfolio.png",

    github: "https://github.com/derhasad-test",

    live: "#",

    featured: true,

    technologies: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind",
    ],
  },

  {
    title: "Weather Dashboard",

    description:
      "Responsive weather application consuming REST APIs with real-time forecasts, search functionality and dynamic weather cards.",

    image: "/images/weather.png",

    github: "#",
    live: "#",

    featured: false,

    technologies: [
      "React",
      "API",
      "CSS",
    ],
  },

  {
    title: "Banking UI",

    description:
      "A modern online banking interface inspired by fintech products with responsive dashboards and reusable components.",

    image: "/images/banking.png",

    github: "#",

    live: "#",

    featured: false,

    technologies: [
      "React",
      "Tailwind CSS",
      "UI Design",
    ],
  },
];