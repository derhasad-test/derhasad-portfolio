"use client";

import { motion } from "framer-motion";

import ExperienceCard from "./ExperienceCard";
import { experiences } from "./experience-data";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto mt-20 max-w-6xl">

      {/* Vertical Line */}

      <div
        className="
          absolute
          left-6
          top-0
          hidden
          h-full
          w-[3px]
          rounded-full
          bg-gradient-to-b
          from-violet-500
          via-cyan-500
          to-fuchsia-500
          lg:block
        "
      />

      <div className="space-y-14">

        {experiences.map((item, index) => (

          <div
            key={item.id}
            className="relative flex gap-8"
          >

            {/* Timeline Node */}

            <motion.div
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="
                relative
                z-20
                hidden
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border-4
                border-[#060816]
                bg-gradient-to-r
                from-violet-500
                to-cyan-400
                shadow-[0_0_30px_rgba(139,92,246,.45)]
                lg:flex
              "
            />

            {/* Card */}

            <div className="flex-1">

              <ExperienceCard
                title={item.role}
                company={item.company}
                period={item.duration}
                location={item.location}
                description={item.description}
                technologies={item.skills}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}