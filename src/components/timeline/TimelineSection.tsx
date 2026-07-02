"use client";

import { motion } from "framer-motion";
import { timelineData } from "./timeline-data";
import TimelineCard from "./TimelineCard";

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="
      relative
      overflow-hidden
      py-32
      "
    >
      {/* Background */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-slate-950
        via-black
        to-slate-950
        "
      />

      {/* Glow */}

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
        blur-[150px]
        "
      />

      <div
        className="
        relative
        mx-auto
        max-w-6xl
        px-6
        "
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .6,
          }}
          className="text-center"
        >
          <p
            className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-violet-400
            "
          >
            Journey
          </p>

          <h2
            className="
            mt-4
            text-5xl
            font-black
            text-white
            "
          >
            My Career Timeline
          </h2>

          <p
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-400
            "
          >
            A journey of continuous learning, creativity, and
            building modern digital experiences.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div
            className="
            absolute
            left-1/2
            top-0
            hidden
            h-full
            w-[2px]
            -translate-x-1/2
            bg-gradient-to-b
            from-violet-500
            via-cyan-400
            to-fuchsia-500
            lg:block
            "
          />

          <div className="space-y-20">

            {timelineData.map((item, index) => (

              <TimelineCard
                key={item.year}
                item={item}
                index={index}
              />

            ))}

          </div>

        </div>
      </div>
    </section>
  );
}