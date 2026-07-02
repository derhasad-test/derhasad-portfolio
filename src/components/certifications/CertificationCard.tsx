"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credential: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  image,
  credential,
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
      group

      overflow-hidden

      rounded-3xl

      border
      border-white/10

      bg-white/5

      backdrop-blur-2xl

      transition-all
      duration-300

      hover:border-violet-500/40

      hover:shadow-[0_0_40px_rgba(139,92,246,.25)]
      "
    >
      <div className="relative overflow-hidden">

        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="
          h-56
          w-full
          object-cover

          transition-transform
          duration-700

          group-hover:scale-110
          "
        />

        <div
          className="
          absolute
          inset-0

          bg-gradient-to-t

          from-black/70

          to-transparent
          "
        />

        <div
          className="
          absolute
          right-5
          top-5

          rounded-full

          bg-violet-600

          p-3
          "
        >
          <Award size={20} />
        </div>

      </div>

      <div className="p-6">

        <p className="text-sm text-violet-400">
          {issuer}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-slate-400">
          {date}
        </p>

        <Link
          href={credential}
          target="_blank"
          className="
          mt-6

          inline-flex

          items-center

          gap-2

          rounded-xl

          bg-gradient-to-r

          from-violet-600
          to-fuchsia-600

          px-5
          py-3

          font-medium

          text-white
          "
        >
          View Certificate

          <ExternalLink size={18} />
        </Link>

      </div>

    </motion.div>
  );
}