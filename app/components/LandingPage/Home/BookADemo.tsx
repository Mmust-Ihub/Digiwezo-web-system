import Image from "next/image";

function BookADemo() {
  return (
    <div className="w-screen lg:h-screen mainbg flex-col lg:flex-row flex  gap-6 px-6 py-3 justify-center items-center mt-[30px]" id="demo">
      <div className=" lg:pt-0  space-y-6 pt-[100px] flex flex-col">
        <h2 className="lg:text-left lg:self-start lg:px-8 text-2xl font-bold">
          Book Your Free Demo
        </h2>
        <p className="lg:text-left lg:self-start lg:px-8">
          Book a demo with us to see our top-rated solutions in action
        </p>
        <form className=" flex gap-2 flex-col lg:px-8">
          <div className=" bg-white rounded-lg">
            <input
              type="text"
              className=" outline-0 p-2 rounded-lg text-black w-full"
              placeholder="Name..."
            />
          </div>
          <div className=" bg-white rounded-lg">
            <input
              type="email"
              className=" outline-0 p-2 rounded-lg text-black w-full"
              placeholder="Email..."
            />
          </div>

          <div className=" bg-white rounded-lg">
            <input
              type="tel"
              className=" outline-0 p-2 rounded-lg text-black w-full"
              placeholder="Phone Number..."
            />
          </div>
          <div className=" bg-white rounded-lg">
            <input
              type="text"
              className=" outline-0 p-2 rounded-lg text-black w-full"
              placeholder="School..."
            />
          </div>
          <div className=" bg-white rounded-lg">
            <input
              type="text"
              className=" outline-0 p-2 rounded-lg text-black w-full"
              placeholder="Role (Admin, Teacher, Parent etc)..."
            />
          </div>
          <div className=" bg-white rounded-lg">
            <input
              type="date"
              className=" outline-0 p-2 rounded-lg text-black placeholder:text-black w-full"
              placeholder="Prefered Date..."
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="bg-[#ffc004] rounded-lg p-2 font-semibold w-[45%] text-center"
          />
        </form>
      </div>
      <div>
        <Image width={1000} height={1000} src="/assets/webp/DemoImage.webp" alt="hero image" />
      </div>
    </div>
  );
}

export default BookADemo;
