"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { navLinks } from "./nav-links";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {navLinks.map((item) => (
        <motion.div
          key={item.href}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={item.href}
            className="
              relative
              rounded-full
              px-5
              py-3

              text-sm
              font-medium

              text-slate-300

              transition-all
              duration-300

              hover:bg-white/5
              hover:text-white
            "
          >
            {item.title}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}