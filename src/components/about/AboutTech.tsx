"use client";

import { motion } from "framer-motion";
import { technologies } from "./about-data";

export default function AboutTech() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-violet-500/30
        hover:shadow-[0_0_50px_rgba(139,92,246,.25)]
      "
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Tech Stack
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          Technologies I Use
        </h3>
      </div>

      <div className="flex flex-wrap gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.05,
            }}
            whileHover={{
              y: -6,
              scale: 1.08,
            }}
            className="
              rounded-full
              border
              border-violet-500/20
              bg-gradient-to-r
              from-violet-500/10
              to-cyan-500/10
              px-5
              py-3
              text-sm
              font-medium
              text-slate-200
              transition-all
              duration-300
              hover:border-violet-400
              hover:text-white
            "
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}