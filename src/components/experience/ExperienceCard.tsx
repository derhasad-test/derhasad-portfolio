"use client";

import { motion } from "framer-motion";

type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
};

export default function ExperienceCard({
  title,
  company,
  period,
  location,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-violet-500/40
        hover:shadow-[0_0_45px_rgba(139,92,246,.25)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,.18),transparent_70%)]
        "
      />

      <div className="relative z-10">
        <span className="text-sm font-semibold text-violet-400">
          {period}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-cyan-400">
          {company} • {location}
        </p>

        <p className="mt-6 leading-8 text-slate-400">
          {description}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-3
                py-1
                text-xs
                font-medium
                text-slate-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}