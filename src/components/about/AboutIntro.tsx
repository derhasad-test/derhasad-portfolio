"use client";

import { motion } from "framer-motion";
import { aboutDescription } from "./about-data";

export default function AboutIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
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
      <span
        className="
          inline-flex
          rounded-full
          bg-violet-500/10
          px-4
          py-2
          text-sm
          font-semibold
          text-violet-300
        "
      >
        👋 About Me
      </span>

      <h3
        className="
          mt-6
          text-3xl
          font-black
          text-white
        "
      >
        Passionate Full Stack
        <span
          className="
            block
            bg-gradient-to-r
            from-violet-400
            via-fuchsia-500
            to-cyan-400
            bg-clip-text
            text-transparent
          "
        >
          Developer
        </span>
      </h3>

      <p
        className="
          mt-6
          leading-8
          text-slate-400
        "
      >
        {aboutDescription}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-5">
        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
          "
        >
          <p className="text-sm text-slate-400">
            Education
          </p>

          <h4 className="mt-2 text-lg font-bold text-white">
            B.Tech CSE
          </h4>

          <p className="text-sm text-violet-400">
            Final Year
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
          "
        >
          <p className="text-sm text-slate-400">
            Location
          </p>

          <h4 className="mt-2 text-lg font-bold text-white">
            India
          </h4>

          <p className="text-sm text-cyan-400">
            Open to Opportunities
          </p>
        </div>
      </div>
    </motion.div>
  );
}