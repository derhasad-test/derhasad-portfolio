"use client";

import Link from "next/link";
import { navLinks } from "./nav-links";

export default function NavLinks() {
  return (
    <>
      {navLinks.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="
          relative
          text-sm
          font-medium
          text-slate-300
          transition-all
          duration-300
          hover:text-violet-400
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-0
          after:bg-violet-500
          after:transition-all
          hover:after:w-full
          "
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}