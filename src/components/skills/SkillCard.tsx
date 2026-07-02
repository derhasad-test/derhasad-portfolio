"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type SkillCardProps = {
  name: string;
  level: number;
  color: string;
  icon: IconType;
};

export default function SkillCard({
  name,
  level,
  color,
  icon: Icon,
}: SkillCardProps) {
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
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-violet-500/40
        hover:shadow-[0_0_40px_rgba(139,92,246,.25)]
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
        "
      >
        <div
          className="absolute inset-0 blur-3xl"
          style={{
            background: `radial-gradient(circle at top right, ${color}33, transparent 70%)`,
          }}
        />
      </div>

      {/* Header */}

      <div className="relative z-10 flex items-center gap-4">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-black/40
          "
        >
          <Icon
            size={28}
            color={color}
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-white">
            {name}
          </h3>

          <p className="text-sm text-slate-400">
            {level}% Proficiency
          </p>
        </div>
      </div>

      {/* Progress */}

      <div className="relative z-10 mt-6">
        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: `${level}%`,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full"
            style={{
              backgroundColor: color,
            }}
          />
        </div>
      </div>

      {/* Footer */}

      <div className="relative z-10 mt-5 flex items-center justify-between">
        <span className="text-sm text-slate-400">
          Level
        </span>

        <span
          className="font-semibold"
          style={{ color }}
        >
          {level >= 90
            ? "Expert"
            : level >= 80
            ? "Advanced"
            : level >= 70
            ? "Intermediate"
            : "Learning"}
        </span>
      </div>
    </motion.div>
  );
}