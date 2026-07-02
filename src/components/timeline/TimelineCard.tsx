"use client";

import { motion } from "framer-motion";
import { TimelineItem } from "./timeline-data";

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
}

export default function TimelineCard({
  item,
  index,
}: TimelineCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isEven ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        relative
        flex
        justify-center
        lg:justify-between
      "
    >
      {/* Desktop Left Side */}

      <div
        className={`
          hidden
          lg:flex
          w-[46%]
          ${isEven ? "justify-end pr-14" : "opacity-0"}
        `}
      >
        {isEven && <TimelineContent item={item} />}
      </div>

      {/* Center Timeline */}

      <div
        className="
          absolute
          left-1/2
          top-8
          hidden
          -translate-x-1/2
          lg:block
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            h-6
            w-6
            rounded-full
            border-4
            border-violet-500
            bg-cyan-400
            shadow-[0_0_30px_rgba(34,211,238,.8)]
          "
        />
      </div>

      {/* Desktop Right Side */}

      <div
        className={`
          hidden
          lg:flex
          w-[46%]
          ${!isEven ? "justify-start pl-14" : "opacity-0"}
        `}
      >
        {!isEven && <TimelineContent item={item} />}
      </div>

      {/* Mobile */}

      <div className="block w-full lg:hidden">
        <TimelineContent item={item} />
      </div>
    </motion.div>
  );
}

function TimelineContent({
  item,
}: {
  item: TimelineItem;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        w-full
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-2xl
        shadow-[0_15px_60px_rgba(0,0,0,.35)]
      "
    >
      {/* Year */}

      <div
        className="
          inline-flex
          rounded-full
          bg-cyan-500/10
          px-4
          py-2
          text-sm
          font-bold
          text-cyan-400
        "
      >
        {item.year}
      </div>

      {/* Title */}

      <h3
        className="
          mt-5
          text-3xl
          font-bold
          text-white
        "
      >
        {item.title}
      </h3>

      {/* Company */}

      <p
        className="
          mt-2
          text-lg
          font-medium
          text-violet-400
        "
      >
        {item.company}
      </p>

      {/* Description */}

      <p
        className="
          mt-5
          leading-8
          text-slate-400
        "
      >
        {item.description}
      </p>

      {/* Technologies */}

      <div
        className="
          mt-8
          flex
          flex-wrap
          gap-3
        "
      >
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-violet-500/20
              bg-violet-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-violet-300
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}