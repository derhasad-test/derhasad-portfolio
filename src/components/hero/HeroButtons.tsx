"use client";

import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
} from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {/* View Projects */}

      <motion.a
        href="#projects"
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-gradient-to-r
        from-violet-600
        via-fuchsia-600
        to-cyan-500
        px-8
        py-4
        font-semibold
        text-white
        shadow-[0_10px_35px_rgba(139,92,246,.35)]
        transition-all
        duration-300
        hover:shadow-[0_15px_45px_rgba(139,92,246,.5)]
        "
      >
        View Projects

        <ArrowRight
          size={18}
          className="
          transition-transform
          duration-300
          group-hover:translate-x-1
          "
        />
      </motion.a>

      {/* Download CV */}

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-white/5
        px-8
        py-4
        font-semibold
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-violet-500/40
        hover:bg-violet-500/10
        hover:shadow-[0_10px_35px_rgba(139,92,246,.25)]
        "
      >
        <Download size={18} />

        Download CV
      </motion.a>
    </div>
  );
}