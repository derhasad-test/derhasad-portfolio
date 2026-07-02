"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  availability,
  contactInfo,
} from "./contact-data";

import SocialLinks from "./SocialLinks";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        rounded-3xl

        border
        border-white/10

        bg-white/5

        p-8

        backdrop-blur-2xl
      "
    >
      {/* Heading */}

      <h3 className="text-3xl font-bold text-white">
        Let's Connect
      </h3>

      <p className="mt-5 leading-8 text-slate-400">
        I'm always interested in discussing
        software engineering opportunities,
        freelance projects, collaborations,
        and innovative ideas.
      </p>

      {/* Availability */}

      <div
        className="
          mt-8

          inline-flex

          items-center

          gap-3

          rounded-full

          border
          border-green-500/30

          bg-green-500/10

          px-5
          py-3
        "
      >
        <span
          className={`
            h-3
            w-3
            rounded-full
            animate-pulse
            ${availability.color}
          `}
        />

        <span className="font-medium text-green-400">
          {availability.status}
        </span>
      </div>

      {/* Contact Cards */}

      <div className="mt-10 space-y-5">

        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              whileHover={{
                x: 8,
              }}
            >
              <Link
                href={item.href}
                className="
                  flex

                  items-center

                  gap-5

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/5

                  p-5

                  transition-all
                  duration-300

                  hover:border-violet-500/30
                  hover:bg-violet-500/10
                "
              >
                <div
                  className="
                    flex

                    h-14
                    w-14

                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br

                    from-violet-600
                    to-cyan-500
                  "
                >
                  <Icon size={24} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    {item.title}
                  </p>

                  <h4 className="mt-1 font-semibold text-white">
                    {item.value}
                  </h4>
                </div>
              </Link>
            </motion.div>
          );
        })}

      </div>

      {/* Social Icons */}

      <div className="mt-10">

        <h4 className="mb-5 text-lg font-semibold">
          Follow Me
        </h4>

        <SocialLinks />

      </div>
    </motion.div>
  );
}