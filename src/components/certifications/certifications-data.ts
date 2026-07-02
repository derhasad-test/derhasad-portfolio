export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credential: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2025",
    image: "/certificates/fullstack.jpg",
    credential: "#",
  },
  {
    id: 2,
    title: "React & Next.js",
    issuer: "Coursera",
    date: "2025",
    image: "/certificates/react.jpg",
    credential: "#",
  },
  {
    id: 3,
    title: "Node.js & Express",
    issuer: "Udemy",
    date: "2024",
    image: "/certificates/node.jpg",
    credential: "#",
  },
  {
    id: 4,
    title: "MongoDB Developer",
    issuer: "MongoDB University",
    date: "2024",
    image: "/certificates/mongodb.jpg",
    credential: "#",
  },
  {
    id: 5,
    title: "Java Programming",
    issuer: "NPTEL",
    date: "2023",
    image: "/certificates/java.jpg",
    credential: "#",
  },
];