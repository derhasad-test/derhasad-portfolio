"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="#home">
      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="flex items-center gap-3"
      >
        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-2xl

          bg-gradient-to-br
          from-violet-600
          via-fuchsia-600
          to-cyan-500

          text-xl
          font-black
          text-white

          shadow-[0_0_35px_rgba(139,92,246,.45)]
          "
        >
          D
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Derhasad
          </h2>

          <p className="text-xs text-slate-400">
            Full Stack Developer
          </p>
        </div>
      </motion.div>
    </Link>
  );
}