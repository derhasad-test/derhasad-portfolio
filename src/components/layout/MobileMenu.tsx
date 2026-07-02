"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Briefcase } from "lucide-react";

import { navLinks } from "./nav-links";
import ThemeToggle from "@/components/theme/theme-toggle";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="
              fixed
              right-0
              top-0
              z-[60]

              flex
              h-screen
              w-[320px]
              flex-col

              border-l
              border-white/10

              bg-[#070b1d]/95

              backdrop-blur-3xl
            "
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <h2 className="text-xl font-bold text-white">
                Menu
              </h2>

              <button
                onClick={onClose}
                className="
                  rounded-xl
                  bg-white/5
                  p-2
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation */}

            <nav className="flex flex-1 flex-col gap-3 p-6">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="
                      block

                      rounded-2xl

                      px-5
                      py-4

                      text-lg
                      font-medium

                      text-slate-300

                      transition-all
                      duration-300

                      hover:bg-violet-500/10
                      hover:text-white
                    "
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Actions */}

            <div className="space-y-4 border-t border-white/10 p-6">

              <div className="flex justify-center">
                <ThemeToggle />
              </div>

              <Link
                href="/resume.pdf"
                target="_blank"
                onClick={onClose}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  rounded-2xl

                  border
                  border-violet-500/30

                  px-5
                  py-3

                  text-white

                  transition

                  hover:bg-violet-500/10
                "
              >
                <Download size={18} />

                Download Resume
              </Link>

              <Link
                href="#contact"
                onClick={onClose}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  rounded-2xl

                  bg-gradient-to-r

                  from-violet-600
                  to-fuchsia-600

                  px-5
                  py-3

                  font-semibold

                  text-white

                  shadow-[0_0_25px_rgba(139,92,246,.45)]
                "
              >
                <Briefcase size={18} />

                Hire Me
              </Link>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}