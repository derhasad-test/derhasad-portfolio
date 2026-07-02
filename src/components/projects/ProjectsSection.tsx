"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { projects } from "./projects-data";

const projectCategories = [
  "All",
  "Featured",
  "React",
  "Next.js",
  "Full Stack",
] as const;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    switch (activeCategory) {
      case "Featured":
        return projects.filter((project) => project.featured);

      case "React":
        return projects.filter((project) =>
          project.technologies.includes("React")
        );

      case "Next.js":
        return projects.filter((project) =>
          project.technologies.includes("Next.js")
        );

      case "Full Stack":
        return projects.filter(
          (project) =>
            project.technologies.includes("Node.js") ||
            project.technologies.includes("Express") ||
            project.technologies.includes("MongoDB")
        );

      default:
        return projects;
    }
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

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
            blur-[170px]
          "
        />

      </div>

      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            Projects
          </span>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              text-white
            "
          >
            Featured

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
              Development Work
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
            Some of my recent full-stack and frontend projects
            built with modern web technologies.
          </p>
        </motion.div>

        {/* Filter */}

        <ProjectFilter
          categories={projectCategories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        {/* Projects */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
              mt-16
              grid
              gap-8
              lg:grid-cols-2
            "
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                github={project.github}
                live={project.live}
                featured={project.featured}
                technologies={project.technologies}
              />
            ))}
          </motion.div>

        </AnimatePresence>

      </div>
    </section>
  );
}