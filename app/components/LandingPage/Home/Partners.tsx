
import Image from "next/image";

function Partners() {
  return (
    <div className="w-screen lg:px-6 mt-[30px]">
      <div className="w-full flex flex-col justify-center items-start  lg:mt-0">
        <h2 className="text-[#007BFF]  m-6 lg:text-left lg:self-start lg:px-8 text-2xl font-bold">
          Join the Growing Community of Schools Using Our System
        </h2>
        <div className="wfull grid grid-cols-3  gap-12 px-4 lg:px-14">
          <Image
          width={1000} height={1000}
            src="/assets/riara.png"
            alt=""
            className="w-[100px] h-[100px]  object-contain"
          />
          <Image
          width={1000} height={1000}
            src="/assets/booker.png"
            alt=""
            className="w-[100px] h-[100px]  object-contain"
          />
          <Image
          width={1000} height={1000}
            src="/assets/fesbeth.png"
            alt=""
            className="w-[100px] h-[100px]  object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
