"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import Newsletter from "./Newsletter";
import {
  quickLinks,
  socialLinks,
} from "./footer-links";

export default function Footer() {
  return (
    <footer
      className="
      relative
      overflow-hidden
      border-t
      border-white/10
      pt-24
      "
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div
          className="
          absolute
          left-0
          top-0

          h-[450px]
          w-[450px]

          rounded-full

          bg-violet-600/10

          blur-[150px]
          "
        />

        <div
          className="
          absolute
          bottom-0
          right-0

          h-[450px]
          w-[450px]

          rounded-full

          bg-cyan-500/10

          blur-[150px]
          "
        />

      </div>

      <div className="container-custom">

        {/* Newsletter */}

        <Newsletter />

        {/* Main Footer */}

        <div
          className="
          mt-20

          grid

          gap-12

          lg:grid-cols-3
          "
        >
          {/* Brand */}

          <div>

            <div
              className="
              inline-flex

              items-center

              gap-3
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

                bg-gradient-to-r

                from-violet-600
                to-fuchsia-600

                text-xl

                font-black

                text-white
                "
              >
                D
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Derhasad
                </h2>

                <p className="text-slate-400">
                  Full Stack Developer
                </p>

              </div>

            </div>

            <p
              className="
              mt-6

              max-w-sm

              leading-8

              text-slate-400
              "
            >
              Passionate about building modern,
              scalable and user-friendly web
              applications with premium user
              experiences.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">

              {quickLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="
                  block

                  text-slate-400

                  transition

                  hover:text-violet-400
                  "
                >
                  {item.title}
                </Link>
              ))}

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold">
              Connect
            </h3>

            <div className="mt-6 flex gap-4">

              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
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

                      transition

                      hover:border-violet-500
                      "
                    >
                      <Icon size={22} />
                    </Link>
                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
          mt-20

          flex

          flex-col

          items-center

          justify-between

          gap-6

          border-t

          border-white/10

          py-8

          text-sm

          text-slate-400

          md:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} Derhasad
            Basumatary. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link href="#">
              Privacy Policy
            </Link>

            <Link href="#">
              Terms
            </Link>

          </div>

        </div>

      </div>

      {/* Back To Top */}

      <motion.button
        whileHover={{
          scale: 1.1,
          y: -4,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
        fixed

        bottom-8
        right-8

        z-50

        flex

        h-14
        w-14

        items-center

        justify-center

        rounded-full

        bg-gradient-to-r

        from-violet-600
        to-fuchsia-600

        text-white

        shadow-[0_0_30px_rgba(139,92,246,.45)]
        "
      >
        <ArrowUp size={22} />
      </motion.button>
    </footer>
  );
}