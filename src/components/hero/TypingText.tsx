"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        "Software Engineer",
        2000,
        "Full Stack Developer",
        2000,
        "React & Next.js Developer",
        2000,
        "MERN Stack Developer",
        2000,
        "Problem Solver",
        2000,
      ]}
      wrapper="span"
      speed={45}
      repeat={Infinity}
      cursor={true}
      className="
        bg-gradient-to-r
        from-violet-400
        via-fuchsia-400
        to-cyan-400
        bg-clip-text
        text-transparent
        font-bold
      "
    />
  );
}