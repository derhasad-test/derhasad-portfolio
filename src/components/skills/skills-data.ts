import type { IconType } from "react-icons";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  level: number;
  color: string;
  icon: IconType;
}

export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
] as const;

export const skills: Skill[] = [
  // ======================
  // Frontend
  // ======================

  {
    name: "HTML5",
    category: "Frontend",
    level: 95,
    color: "#E34F26",
    icon: FaHtml5,
  },

  {
    name: "CSS3",
    category: "Frontend",
    level: 92,
    color: "#1572B6",
    icon: FaCss3Alt,
  },

  {
    name: "JavaScript",
    category: "Frontend",
    level: 90,
    color: "#F7DF1E",
    icon: SiJavascript,
  },

  {
    name: "TypeScript",
    category: "Frontend",
    level: 88,
    color: "#3178C6",
    icon: SiTypescript,
  },

  {
    name: "React",
    category: "Frontend",
    level: 90,
    color: "#61DAFB",
    icon: FaReact,
  },

  {
    name: "Next.js",
    category: "Frontend",
    level: 87,
    color: "#FFFFFF",
    icon: SiNextdotjs,
  },

  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: 95,
    color: "#38BDF8",
    icon: SiTailwindcss,
  },

  // ======================
  // Backend
  // ======================

  {
    name: "Node.js",
    category: "Backend",
    level: 86,
    color: "#5FA04E",
    icon: FaNodeJs,
  },

  {
    name: "Express.js",
    category: "Backend",
    level: 84,
    color: "#FFFFFF",
    icon: SiExpress,
  },

  // ======================
  // Database
  // ======================

  {
    name: "MongoDB",
    category: "Database",
    level: 87,
    color: "#13AA52",
    icon: SiMongodb,
  },

  {
    name: "MySQL",
    category: "Database",
    level: 80,
    color: "#00758F",
    icon: SiMysql,
  },

  {
    name: "PostgreSQL",
    category: "Database",
    level: 75,
    color: "#336791",
    icon: SiPostgresql,
  },

  // ======================
  // Tools
  // ======================

  {
    name: "Git",
    category: "Tools",
    level: 92,
    color: "#F05032",
    icon: FaGitAlt,
  },

  {
    name: "GitHub",
    category: "Tools",
    level: 92,
    color: "#FFFFFF",
    icon: FaGithub,
  },

  {
    name: "Postman",
    category: "Tools",
    level: 88,
    color: "#FF6C37",
    icon: SiPostman,
  },

  {
    name: "Docker",
    category: "Tools",
    level: 75,
    color: "#2496ED",
    icon: FaDocker,
  },

  {
    name: "Figma",
    category: "Tools",
    level: 82,
    color: "#A259FF",
    icon: FaFigma,
  },
];