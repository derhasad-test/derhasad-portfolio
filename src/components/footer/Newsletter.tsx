"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-2xl
      "
    >
      <div className="flex items-center gap-3">
        <Mail className="text-violet-400" />

        <h3 className="text-2xl font-bold">
          Newsletter
        </h3>
      </div>

      <p className="mt-4 leading-7 text-slate-400">
        Subscribe to receive updates about new
        projects, articles and technologies I'm
        learning.
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row">

        <input
          type="email"
          placeholder="Enter your email"
          className="
            flex-1

            rounded-2xl

            border
            border-white/10

            bg-white/5

            px-5
            py-4

            outline-none

            transition

            focus:border-violet-500
          "
        />

        <button
          className="
            rounded-2xl

            bg-gradient-to-r

            from-violet-600
            to-fuchsia-600

            px-6
            py-4

            font-semibold

            text-white

            transition

            hover:scale-105
          "
        >
          Subscribe
        </button>

      </div>
    </motion.div>
  );
}