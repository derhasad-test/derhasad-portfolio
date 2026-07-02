"use client";

import { motion } from "framer-motion";
import { timeline } from "./about-data";

export default function AboutTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        group
        relative
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
      <div className="mb-10">
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-violet-400
          "
        >
          Journey
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          Education & Experience
        </h3>
      </div>

      {/* Timeline Line */}

      <div
        className="
          absolute
          left-10
          top-32
          bottom-10
          w-[2px]
          bg-gradient-to-b
          from-violet-500
          via-fuchsia-500
          to-cyan-500
        "
      />

      <div className="space-y-10">
        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            className="relative flex gap-6"
          >
            {/* Timeline Dot */}

            <motion.div
              whileHover={{
                scale: 1.25,
              }}
              className="
                relative
                z-10
                mt-1
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-violet-500
                to-cyan-400
                shadow-[0_0_20px_rgba(139,92,246,.6)]
              "
            >
              <div className="h-3 w-3 rounded-full bg-white" />
            </motion.div>

            {/* Content */}

            <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-violet-400/40">
              <span className="text-sm font-semibold text-cyan-400">
                {item.year}
              </span>

              <h4 className="mt-2 text-xl font-bold text-white">
                {item.title}
              </h4>

              <p className="mt-2 leading-7 text-slate-400">
                {item.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}