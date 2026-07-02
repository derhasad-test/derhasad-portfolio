"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    // EmailJS / API Integration
    await new Promise((resolve) =>
      setTimeout(resolve, 1800)
    );

    alert("Message sent successfully!");

    setLoading(false);

    e.currentTarget.reset();
  }

  return (
    <motion.form
      initial={{
        opacity: 0,
        x: 50,
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
      onSubmit={handleSubmit}
      className="
        rounded-3xl

        border
        border-white/10

        bg-white/5

        p-8

        backdrop-blur-2xl
      "
    >
      <h3 className="text-3xl font-bold">
        Send Message
      </h3>

      <p className="mt-4 text-slate-400">
        Fill out the form below and I'll get back
        to you as soon as possible.
      </p>

      <div className="mt-8 space-y-6">

        <input
          required
          type="text"
          placeholder="Full Name"
          className="
          w-full

          rounded-2xl

          border
          border-white/10

          bg-white/5

          px-5
          py-4

          outline-none

          transition

          focus:border-violet-500
          "
        />

        <input
          required
          type="email"
          placeholder="Email Address"
          className="
          w-full

          rounded-2xl

          border
          border-white/10

          bg-white/5

          px-5
          py-4

          outline-none

          transition

          focus:border-violet-500
          "
        />

        <input
          required
          type="text"
          placeholder="Subject"
          className="
          w-full

          rounded-2xl

          border
          border-white/10

          bg-white/5

          px-5
          py-4

          outline-none

          transition

          focus:border-violet-500
          "
        />

        <textarea
          required
          rows={6}
          placeholder="Your Message..."
          className="
          w-full

          resize-none

          rounded-2xl

          border
          border-white/10

          bg-white/5

          px-5
          py-4

          outline-none

          transition

          focus:border-violet-500
          "
        />

      </div>

      <motion.button
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.96,
        }}
        disabled={loading}
        className="
        mt-8

        flex

        w-full

        items-center

        justify-center

        gap-3

        rounded-2xl

        bg-gradient-to-r

        from-violet-600
        to-fuchsia-600

        px-8
        py-4

        font-semibold

        text-white

        shadow-[0_0_35px_rgba(139,92,246,.4)]
        "
      >
        {loading ? (
          <>
            <Loader2
              size={20}
              className="animate-spin"
            />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </motion.button>

    </motion.form>
  );
}