"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SkillCard from "./SkillCard";
import SkillFilter from "./SkillFilter";
import { skillCategories, skills } from "./skills-data";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skills;

    return skills.filter(
      (skill) => skill.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/10
          blur-[180px]
        "
      />

      <div className="container-custom relative z-10">

        {/* Heading */}

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
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              rounded-full
              border
              border-violet-500/20
              bg-violet-500/10
              px-5
              py-2
              text-sm
              font-semibold
              text-violet-300
            "
          >
            Technical Skills
          </span>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              text-white
            "
          >
            Technologies I

            <span
              className="
                block
                bg-gradient-to-r
                from-violet-400
                via-fuchsia-500
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Work With
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-400
            "
          >
            I enjoy building modern, scalable and responsive
            web applications using industry-standard
            technologies across frontend, backend, databases,
            and development tools.
          </p>
        </motion.div>

        {/* Filter */}

        <SkillFilter
          categories={skillCategories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        {/* Skills Grid */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              mt-16
              grid
              gap-8
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skill.color}
                icon={skill.icon}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}