import Link from "next/link";
import { socials } from "./constants";

export default function HeroSocials() {
  return (
    <div className="mt-8 flex gap-4">
      {socials.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            className="glass flex h-11 w-11 items-center justify-center rounded-full"
          >
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
}