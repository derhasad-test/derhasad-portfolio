"use client";

import { motion } from "framer-motion";
import { stats } from "./about-data";

export default function AboutStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
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
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-400">
          Statistics
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          My Journey
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              rounded-2xl
              border
              border-white/10
              bg-gradient-to-br
              from-white/5
              to-violet-500/5
              p-6
              text-center
              transition-all
              duration-300
              hover:border-violet-400/40
            "
          >
            <h4
              className="
                bg-gradient-to-r
                from-violet-400
                via-fuchsia-500
                to-cyan-400
                bg-clip-text
                text-4xl
                font-black
                text-transparent
              "
            >
              {item.value}
            </h4>

            <p className="mt-3 text-sm text-slate-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}