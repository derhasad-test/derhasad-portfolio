"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { socialLinks } from "./contact-data";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            whileHover={{
              y: -6,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              href={item.href}
              target="_blank"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-2xl

                border
                border-white/10

                bg-white/5

                backdrop-blur-xl

                transition-all
                duration-300

                hover:border-violet-500/40
                hover:bg-violet-500/10
                hover:shadow-[0_0_25px_rgba(139,92,246,.25)]
              "
            >
              <Icon size={22} />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}