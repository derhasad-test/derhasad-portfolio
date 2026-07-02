export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

export const timelineData: TimelineItem[] = [
  {
    year: "2022",
    title: "Started B.Tech CSE",
    company: "J.C. Bose University of Science & Technology, YMCA",
    description:
      "Started my Computer Science journey, learning programming fundamentals, data structures, algorithms, and software engineering concepts.",
    technologies: [
      "C++",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    year: "2024",
    title: "Customer Care Executive",
    company: "Tech Mahindra",
    description:
      "Worked in customer support while improving communication, teamwork, professionalism, and problem-solving skills.",
    technologies: [
      "Communication",
      "CRM",
      "Teamwork",
    ],
  },

  {
    year: "2025",
    title: "3D Animation & VFX",
    company: "NFDC",
    description:
      "Completed intensive training in 3D Animation, Motion Graphics, Visual Effects, Graphic Design, and creative workflows.",
    technologies: [
      "Blender",
      "Photoshop",
      "After Effects",
      "Illustrator",
    ],
  },

  {
    year: "2026",
    title: "Full Stack Development",
    company: "Personal Projects",
    description:
      "Building modern full-stack applications using React, Next.js, Node.js, MongoDB and TypeScript while preparing for Software Engineering roles.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
  },
];