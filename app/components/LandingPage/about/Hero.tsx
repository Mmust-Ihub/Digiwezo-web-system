function Hero() {
  return (
    <div className="w-full lg:h-screen text-black gap-2 mt-20 md:mt-1 flex flex-col-reverse  md:flex-row items-center md:justify-between justify-center">
      <div className="w-full md:w-1/2">
        <div className="w-[20%] bg-[#FFC004] h-1" />
        <h1 className="text-4xl md:text-6xl font-bold  text-[#007BFF]">
          Who we are?
        </h1>
        <p className="mt-4">
          We are an education technology company dedicated to transforming
          learning and school management through{" "}
          <span className="hover:text-[#ffc004] text-xl text-blue-400 hover:cursor-pointer font-semibold tracking-wide">
            affordable
          </span>
          ,{" "}
          <span className="hover:text-[#ffc004] text-xl text-blue-400 hover:cursor-pointer font-semibold tracking-wide">
            accessible
          </span>
          , and{" "}
          <span className="hover:text-[#ffc004] text-xl text-blue-400 hover:cursor-pointer font-semibold tracking-wide">
            data-driven
          </span>{" "}
          solutions. Our platform empowers schools, teachers, students, and
          parents with tools that enhance learning, streamline administration,
          and improve performance tracking.
        </p>
        <button className="bg-[#ffc004] hover:cursor-pointer text-white px-4 py-2 mt-4 font-semibold">
          Get in touch
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="/images/about1.webp"
          alt="hero"
          className="w-full shadow-md rounded-md"
        />
      </div>
    </div>
  );
}

export default Hero;
