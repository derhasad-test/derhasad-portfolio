export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Mahindra",
    role: "Customer Care Executive",
    duration: "2024",
    location: "Noida, India",
    description:
      "Worked in customer support, resolving technical issues, handling customer interactions, and improving communication and problem-solving skills.",
    skills: [
      "Customer Support",
      "Communication",
      "Problem Solving",
      "CRM",
    ],
    current: false,
  },

  {
    id: 2,
    company: "Personal Projects",
    role: "Full Stack Developer",
    duration: "2025 – Present",
    location: "Remote",
    description:
      "Building modern full-stack applications using React, Next.js, Node.js, Express, MongoDB, TypeScript and Tailwind CSS.",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
    current: true,
  },

  {
    id: 3,
    company: "J.C. Bose University",
    role: "B.Tech Computer Science",
    duration: "2022 – 2026",
    location: "Faridabad",
    description:
      "Focused on software engineering, algorithms, databases, operating systems, networking and modern web development.",
    skills: [
      "C++",
      "DSA",
      "DBMS",
      "OS",
      "CN",
    ],
    current: false,
  },
];