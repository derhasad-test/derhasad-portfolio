"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "#61DAFB", angle: 0, duration: 18 },
  { Icon: SiNextdotjs, color: "#FFFFFF", angle: 45, duration: 22 },
  { Icon: SiTypescript, color: "#3178C6", angle: 90, duration: 20 },
  { Icon: SiTailwindcss, color: "#38BDF8", angle: 135, duration: 24 },
  { Icon: FaNodeJs, color: "#5FA04E", angle: 180, duration: 19 },
  { Icon: SiMongodb, color: "#13AA52", angle: 225, duration: 23 },
  { Icon: FaGitAlt, color: "#F05032", angle: 270, duration: 21 },
  { Icon: FaReact, color: "#61DAFB", angle: 315, duration: 25 },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map(({ Icon, color, angle, duration }, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 z-30"
          animate={{ rotate: 360 }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translateY(-190px)`,
              transformOrigin: "center",
            }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 6, 0],
              }}
              transition={{
                duration: 3 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.2,
                rotate: 12,
              }}
              className="
              pointer-events-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-black/60
              backdrop-blur-xl
              shadow-[0_0_40px_rgba(139,92,246,.35)]
             "
            >
              <Icon
                size={28}
                color={color}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </>
  );
}