import Image from "next/image";
import { AboutCardData } from "@/interfaces/interface";

export default function AboutCard({ image, label }: AboutCardData) {
  return (
    <div className="flex flex-1 shadow shadow-custom-grey h-[177px] flex-col justify-center items-center p-2 gap-2 rounded-2xl text-center">
      <p>
        <Image
          width={1000}
          height={1000}
          src={image}
          className="w-12 h-12"
          alt={label + " image"}
        />
      </p>
      <p className="text-sm lg:text-md text-custom-grey">{label}</p>
    </div>
  );
}
