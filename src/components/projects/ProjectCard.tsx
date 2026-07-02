"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  featured: boolean;
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  featured,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-violet-500/40
        hover:shadow-[0_0_50px_rgba(139,92,246,.25)]
      "
    >
      {/* Image */}

      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />

        {featured && (
          <div
            className="
              absolute
              left-5
              top-5
              flex
              items-center
              gap-2
              rounded-full
              bg-violet-600
              px-4
              py-2
              text-xs
              font-semibold
              text-white
            "
          >
            <Sparkles size={14} />
            Featured
          </div>
        )}
      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-violet-500/20
                bg-violet-500/10
                px-4
                py-2
                text-xs
                font-medium
                text-violet-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-violet-600
              px-5
              py-3
              text-white
              transition
              hover:bg-violet-500
            "
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              text-white
              transition
              hover:border-violet-500
            "
          >
            <Github size={18} />
            GitHub
          </a>

        </div>

      </div>
    </motion.article>
  );
}