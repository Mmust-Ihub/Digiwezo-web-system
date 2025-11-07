import CurvePattern from "@/components/ui/CurvePattern";
import { TestimonialCardData } from "@/interfaces/interface";
import Image from "next/image";

export function TestimonialCard({
  text,
  name,
  role,
  image,
}: TestimonialCardData) {
  return (
    <div className="w-80 h-80 bg-white rounded-2xl flex flex-col gap-3 items-center justify-center shadow-lg relative ">
      <CurvePattern fillColor="secondary" height={120} />

      <div className="text-center">
        <p className="text-black font-semibold ">
          <span className="text-4xl text-secondary leading-none">&quot;</span>
          {text}
          <span className="text-4xl text-secondary leading-none">&quot;</span>
        </p>
      </div>
      <div className="w-full testimonialbg  flex-1  gap-3 text-black flex flex-col rounded-2xl justify-end items-center pb-2 z-99  ">
        <Image
          width={1000}
          height={1000}
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full"
        />
        <p className="font-bold">{name}</p>
        <p className="font-semibold">{role}</p>
      </div>
    </div>
  );
}
