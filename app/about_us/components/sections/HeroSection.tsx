"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[65vh] flex items-center justify-center mt-4 overflow-hidden rounded-none">
      <div className="absolute inset-0">
        <Image
          src="/about-hero.png"
          alt="About Us Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75"
        />
      </div>
      <h1 className="relative text-[var(--color-custom-white)] text-5xl md:text-6xl font-extrabold drop-shadow-lg">
        ABOUT US
      </h1>
    </section>
  );
}
