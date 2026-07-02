"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

import ThemeToggle from "@/components/theme/theme-toggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "border-b border-white/10 bg-black/55 backdrop-blur-2xl shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          container
          mx-auto
          flex
          h-20
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        {/* Logo */}

        <Link
          href="/"
          className="
            flex
            items-center
            gap-3
            font-bold
            text-white
          "
        >
          <motion.div
            whileHover={{
              rotate: 360,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
            "
          >
            <Code2 size={22} />
          </motion.div>

          <div>
            <h2 className="text-lg font-black">
              Derhasad
            </h2>

            <p className="text-xs text-slate-400">
              Full Stack Developer
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{
                y: -2,
              }}
              className="
                group
                relative
                text-sm
                font-medium
                text-slate-300
                transition-colors
                hover:text-white
              "
            >
              {item.label}

              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-violet-500
                  to-cyan-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </motion.a>
          ))}
        </nav>

        {/* Right */}

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-3
              backdrop-blur-xl
              lg:hidden
            "
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            border-t
            border-white/10
            bg-black/90
            backdrop-blur-2xl
            lg:hidden
          "
        >
          <div className="flex flex-col p-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-4
                  text-slate-300
                  transition
                  hover:bg-white/5
                  hover:text-white
                "
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}