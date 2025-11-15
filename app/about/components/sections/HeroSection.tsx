"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full mt-32 md:mt-40 px-6">
      <div className="w-full flex justify-center">
        <div className="relative w-full h-[300px] sm:h-[340px] md:h-[406.83px] lg:h-[460px] rounded-[24px] overflow-hidden">
          <Image
            src="/assets/about.webp"
            alt="About Us Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h1 className="text-white font-semibold text-[44px] sm:text-[56px] md:text-[128px] leading-[1] md:leading-[155px] uppercase text-center drop-shadow-card">
              ABOUT US
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
