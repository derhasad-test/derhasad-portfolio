"use client";

import { motion } from "framer-motion";

import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import TypingText from "./TypingText";

const stats = [
  {
    value: "15+",
    label: "Projects",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "2+",
    label: "Internships",
  },
  {
    value: "100+",
    label: "DSA Problems",
  },
];

export default function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="max-w-3xl"
    >
      {/* Greeting */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-violet-500/20
          bg-violet-500/10
          px-5
          py-2
          text-sm
          font-medium
          text-violet-300
        "
      >
        👋 Hello, I'm
      </motion.div>

      {/* Name */}

      <h1
        className="
          mt-8
          text-5xl
          font-black
          leading-none
          tracking-tight
          sm:text-6xl
          lg:text-7xl
        "
      >
        Derhasad

        <span
          className="
            mt-3
            block
            bg-gradient-to-r
            from-violet-400
            via-fuchsia-500
            to-cyan-400
            bg-clip-text
            text-transparent
          "
        >
          Basumatary
        </span>
      </h1>

      {/* Typing */}

      <div className="mt-8 text-2xl font-semibold">
        <TypingText />
      </div>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-slate-400
        "
      >
        Passionate Full Stack Developer focused on
        building fast, scalable and visually stunning
        web applications using React, Next.js,
        TypeScript, Node.js and modern UI
        technologies.
      </p>

      {/* Buttons */}

      <div className="mt-10">
        <HeroButtons />
      </div>

      {/* Social */}

      <div className="mt-8">
        <HeroSocials />
      </div>

      {/* Stats */}

      <div
        className="
          mt-16
          grid
          grid-cols-2
          gap-5
          md:grid-cols-4
        "
      >
        {stats.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{
              y: -6,
            }}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-violet-500/40
              hover:shadow-[0_0_30px_rgba(139,92,246,.25)]
            "
          >
            <h3
              className="
                text-3xl
                font-black
                bg-gradient-to-r
                from-violet-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              {item.value}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}