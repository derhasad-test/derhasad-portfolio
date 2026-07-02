"use client";

import { motion } from "framer-motion";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute
            -left-40
            top-0

            h-[500px]
            w-[500px]

            rounded-full

            bg-violet-600/10

            blur-[160px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0

            h-[500px]
            w-[500px]

            rounded-full

            bg-cyan-500/10

            blur-[160px]
          "
        />

      </div>

      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
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
            Contact
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              md:text-6xl
            "
          >
            Let's Build
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
              Something Amazing
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-slate-400
            "
          >
            Have a project in mind, a job opportunity,
            or just want to connect? I'd love to hear
            from you. Let's create something impactful
            together.
          </p>
        </motion.div>

        {/* Content */}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-2
          "
        >
          <ContactInfo />

          <ContactForm />
        </div>

      </div>
    </section>
  );
}
