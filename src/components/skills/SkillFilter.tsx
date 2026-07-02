"use client";

import { motion } from "framer-motion";

interface SkillFilterProps {
  categories: readonly string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function SkillFilter({
  categories,
  activeCategory,
  onChange,
}: SkillFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-14 flex flex-wrap justify-center gap-4"
    >
      {categories.map((category) => {
        const active = activeCategory === category;

        return (
          <motion.button
            key={category}
            whileHover={{
              y: -3,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => onChange(category)}
            className={`
              relative
              overflow-hidden
              rounded-full
              border
              px-6
              py-3
              text-sm
              font-semibold
              transition-all
              duration-300
              ${
                active
                  ? "border-violet-500 bg-violet-600 text-white shadow-[0_0_30px_rgba(139,92,246,.4)]"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
              }
            `}
          >
            {active && (
              <motion.div
                layoutId="skillFilter"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-violet-600/30
                  via-fuchsia-500/30
                  to-cyan-500/30
                "
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">
              {category}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}