"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-11 w-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl" />
    );
  }

  const isDark =
    theme === "dark" ||
    (theme === "system" && resolvedTheme === "dark");

  return (
    <motion.button
      type="button"
      aria-label="Toggle Theme"
      whileHover={{
        scale: 1.08,
        rotate: 10,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-violet-500/40
        hover:bg-violet-500/10
        hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
      "
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          rounded-full
          bg-gradient-to-r
          from-violet-500/10
          via-fuchsia-500/10
          to-cyan-500/10
        "
      />

      {/* Icon */}

      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{
            rotate: -180,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            rotate: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            rotate: 180,
            opacity: 0,
            scale: 0.5,
          }}
          transition={{
            duration: 0.25,
          }}
          className="relative z-10"
        >
          {isDark ? (
            <Moon
              size={18}
              className="text-violet-300"
            />
          ) : (
            <Sun
              size={18}
              className="text-yellow-400"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}