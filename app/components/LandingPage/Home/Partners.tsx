import Image from "next/image";

const partnerImages: string[] = [
  "/assets/riara.png",
  "/assets/booker.png",
  "/assets/fasbeth.png",
];

export default function Partners() {
  return (
    <section className="w-screen bg-custom-white flex-col flex lg:flex-row gap-6 px-20 pt-4 pb-6 justify-center items-center text-custom-white">
      <div className="w-full flex flex-col justify-center items-center  gap-6 ">
        <h2 className="text-primary lg:text-left  lg:px-8 lg:text-lg text-md font-bold">
          Join the Growing Community of Schools Using Our System{" "}
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  gap-4 px-4 lg:px-14">
          {partnerImages.map((image, index) => (
            <Image
              key={index}
              width={1000}
              height={1000}
              src={image}
              alt=""
              className="w-[100px] h-[100px]  object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
