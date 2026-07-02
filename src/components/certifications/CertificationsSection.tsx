"use client";

import { motion } from "framer-motion";

import CertificationCard from "./CertificationCard";
import { certifications } from "./certifications-data";

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
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
            Certifications
          </span>

          <h2
            className="
              mt-8

              text-5xl

              font-black

              md:text-6xl
            "
          >
            Professional
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
              Certifications
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
            A collection of certifications,
            technical training, and achievements
            that demonstrate my commitment to
            continuous learning and professional
            growth.
          </p>

        </motion.div>

        {/* Certificate Grid */}

        <div
          className="
            grid
            gap-8

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {certifications.map((certificate) => (
            <CertificationCard
              key={certificate.id}
              title={certificate.title}
              issuer={certificate.issuer}
              date={certificate.date}
              image={certificate.image}
              credential={certificate.credential}
            />
          ))}
        </div>

      </div>
    </section>
  );
}