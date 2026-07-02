"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import FloatingIcons from "./FloatingIcons";

export default function HeroImage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.03);
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.03);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      className="
      relative
      flex
      h-[620px]
      w-[620px]
      items-center
      justify-center
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        h-[620px]
        w-[620px]
        rounded-full
        bg-violet-600/20
        blur-[130px]
        "
      />

      {/* Mouse Follow Glow */}

      <motion.div
        style={{ x, y }}
        className="
        absolute
        h-[380px]
        w-[380px]
        rounded-full
        bg-gradient-to-r
        from-violet-500/20
        via-fuchsia-500/20
        to-cyan-500/20
        blur-[120px]
        "
      />

      {/* Outer Ring */}

      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        h-[540px]
        w-[540px]
        rounded-full
        border
        border-violet-400/35
        shadow-[0_0_90px_rgba(139,92,246,.35)]
        "
      />

      {/* Middle Ring */}

      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        h-[470px]
        w-[470px]
        rounded-full
        border
        border-cyan-400/35
        shadow-[0_0_70px_rgba(34,211,238,.35)]
        "
      />

      {/* Inner Ring */}

      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        h-[380px]
        w-[380px]
        rounded-full
        border
        border-fuchsia-500/35
        shadow-[0_0_60px_rgba(217,70,239,.35)]
        "
      />

      {/* Orbit Icons */}

      <FloatingIcons />

      {/* Neon Dots */}

      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index * 30 * Math.PI) / 180;

        return (
          <motion.div
            key={index}
            className="
            absolute
            h-3
            w-3
            rounded-full
            bg-violet-400
            shadow-[0_0_18px_rgba(139,92,246,.8)]
            "
            style={{
              left: `calc(50% + ${Math.cos(angle) * 240}px)`,
              top: `calc(50% + ${Math.sin(angle) * 240}px)`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.15,
            }}
          />
        );
      })}

      {/* Glass Ring */}

      <div
        className="
        absolute
        h-[470px]
        w-[470px]
        rounded-full
        border
        border-white/5
        backdrop-blur-3xl
        "
      />

      {/* ===== Continue with Part B here ===== */}
            {/* Profile */}

      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: 2,
          y: -6,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
        group
        relative
        overflow-hidden
        rounded-full
        border
        border-violet-400/20
        bg-white/5
        p-5
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,.45)]
        "
      >
        <Image
          src="/images/profile.png"
          alt="Derhasad Basumatary"
          width={410}
          height={410}
          priority
          className="
          rounded-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
          "
        />

        {/* Shine */}

        <motion.div
          animate={{
            x: [-320, 320],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          inset-y-0
          w-24
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          "
        />
      </motion.div>

      {/* Available Badge */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
        }}
        className="
        absolute
        right-4
        top-20
        rounded-full
        border
        border-green-500/30
        bg-black/60
        px-5
        py-3
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(34,197,94,.25)]
        "
      >
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm font-medium text-white">
            Available for Work
          </span>
        </div>
      </motion.div>

      {/* Experience Card */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
        absolute
        -left-10
        bottom-24
        w-48
        rounded-2xl
        border
        border-white/10
        bg-black/60
        p-5
        backdrop-blur-xl
        "
      >
        <h3 className="text-3xl font-black text-white">
          2+
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Years Learning
        </p>
      </motion.div>

      {/* Current Project */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
        absolute
        -right-10
        bottom-24
        w-56
        rounded-2xl
        border
        border-white/10
        bg-black/60
        p-5
        backdrop-blur-xl
        "
      >
        <p
          className="
          text-xs
          uppercase
          tracking-widest
          text-violet-400
          "
        >
          Currently Building
        </p>

        <h3 className="mt-2 font-semibold text-white">
          Premium Portfolio
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          React • Next.js • TypeScript
        </p>
      </motion.div>

      {/* Final Year Card */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
        className="
        absolute
        left-6
        top-20
        w-44
        rounded-2xl
        border
        border-white/10
        bg-black/60
        p-4
        backdrop-blur-xl
        "
      >
        <p className="text-xs text-cyan-400">
          Education
        </p>

        <h3 className="mt-2 font-semibold text-white">
          B.Tech CSE
        </h3>

        <p className="mt-1 text-xs text-slate-400">
          Final Year
        </p>
      </motion.div>

      {/* ===== Continue with Part C ===== */}
            {/* Decorative Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        pointer-events-none
        absolute
        h-[700px]
        w-[700px]
        rounded-full
        bg-gradient-to-r
        from-violet-500/10
        via-fuchsia-500/10
        to-cyan-500/10
        blur-[180px]
        "
      />
    </motion.div>
  );
}