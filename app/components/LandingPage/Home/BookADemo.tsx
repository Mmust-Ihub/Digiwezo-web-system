"use client";

import CurvePattern from "@/components/ui/CurvePattern";

import BookDemoForm from "@/components/LandingPage/Home/BookDemoForm";
import Image from "next/image"

export default function BookADemo() {
  return (
    <section
      className="relative w-screen h-[85vh] md:h-[60vh] lg:min-h-[85vh] flex-col flex md:flex-row gap-8 px-8 lg:px-20 py-3 lg:py-0 xs:h-[75vh]  justify-center items-center text-custom-white bg-primary "
      id="demo">
      <CurvePattern />

      <div className="flex flex-col flex-2 gap-1 lg:gap-3 relative">
        <h2 className="text-lg md:text-xl font-bold">Book Your Free Demo</h2>
        <p className="text-sm md:text-base">
          Book a demo with us to see our top-rated solutions in action.
        </p>
        <BookDemoForm />
      </div>
      <div className=" flex-2 lg:flex-3 flex justify-center items-center">
        <Image
          width={600}
          height={600}
          src="/assets/webp/DemoImage.webp"
          alt="Book demo illustration"
          className="object-contain"
        />
      </div>
    </section>
  );
}
