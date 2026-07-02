"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        flex
        min-h-screen
        items-center
        overflow-hidden
        pt-24
      "
    >
      <HeroBackground />

      <div
        className="
          container-custom
          relative
          z-20
          mx-auto
          grid
          min-h-[calc(100vh-6rem)]
          items-center
          gap-10
          lg:grid-cols-[1fr_1fr]
        "
      >
        <div className="order-2 lg:order-1">
          <HeroContent />
        </div>

        <div
          className="
            order-1
            flex
            justify-center
            lg:order-2
            lg:justify-end
          "
        >
          <HeroImage />
        </div>
      </div>
    </section>
  );
}