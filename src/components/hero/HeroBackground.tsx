"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const PARTICLES = Array.from({ length: 40 }, (_, index) => ({
  id: index,
  left: `${(index * 17) % 100}%`,
  top: `${(index * 29) % 100}%`,
  duration: 2 + (index % 5),
  delay: (index % 6) * 0.5,
}));

export default function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 bg-[#060816]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,.18) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Purple Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-52
          -top-44
          h-[700px]
          w-[700px]
          rounded-full
          bg-violet-600/30
          blur-[170px]
        "
      />

      {/* Cyan Glow */}

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-56
          bottom-[-180px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-cyan-500/25
          blur-[180px]
        "
      />

      {/* Mouse Spotlight */}

      <motion.div
        style={{
          x,
          y,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gradient-to-r
          from-violet-500/20
          via-fuchsia-500/20
          to-cyan-500/20
          blur-[140px]
        "
      />

      {/* Floating Particles */}

      {PARTICLES.map((particle) => (
        <motion.span
          key={particle.id}
          className="
            absolute
            h-1
            w-1
            rounded-full
            bg-violet-300
          "
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Bottom Gradient */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-[#060816]
          to-transparent
        "
      />
    </div>
  );
}