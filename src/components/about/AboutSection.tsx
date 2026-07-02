"use client";

import { motion } from "framer-motion";

import AboutIntro from "./AboutIntro";
import AboutStats from "./AboutStats";
import AboutTimeline from "./AboutTimeline";
import AboutTech from "./AboutTech";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            About Me
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Passionate About Building
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Modern Digital Experiences
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I enjoy solving real-world problems through clean code,
            scalable architecture, and beautiful user interfaces.
          </p>
        </motion.div>

        {/* Bento Grid */}

        <div className="grid gap-6 lg:grid-cols-2">
          <AboutIntro />
          <AboutTech />
          <AboutStats />

          <div className="lg:col-span-2">
            <AboutTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}