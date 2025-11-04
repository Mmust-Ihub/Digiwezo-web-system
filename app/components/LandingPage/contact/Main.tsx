import {
  FaFacebook,
  FaGithub,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { FaLocationCrosshairs, FaXTwitter } from "react-icons/fa6"; 
import curve from "../../assets/contact/ellipse.png"

function BookADemo() {
  return (
    <div
      className="w-screen lg:h-screen bg-[#f1f1f1] flex-col lg:flex-row flex  gap-6 px-6 py-3 justify-center items-center mt-[10px]"
      id="demo"
    >
      <div className="w-full lg:w-[45%] space-y-6 p-8 flex flex-col bg-[#3EB0FD] rounded-2xl relative overflow-clip">
        <h2 className="w-full lg:text-left lg:self-start lg:px-8 text-2xl font-bold">
          Contact Us
        </h2>
        <p className="w-full lg:text-left lg:self-start lg:px-8 z-[999]">
          We're here to assist you! Reach out for inquiries, support, or
          collaboration.
        </p>
        <div className="w-full flex gap-2 flex-col lg:px-8 z-[999]">
          <div className="flex gap-2 items-center">
            <span className="text-[#FFC004]">
              <FaLocationCrosshairs />
            </span>{" "}
            <p>
              Mulembe House, 2nd Floor P.O. Box 139 – 50100, Kakamega, Kenya
            </p>
          </div>
          <div className=" flex gap-2 items-center">
            <span className="text-[#FFC004]">
              <FaPhone />
            </span>
            <p>+254796654709</p>
          </div>

          <div className=" flex gap-2 items-center z-[999]">
            <span className="text-[#FFC004]">
              <FaMailBulk />
            </span>
            <p>info@digiwezo.co.ke</p>
          </div>
          <div className=" flex flex-col gap-2 items-center z-[999]">
            <p className="text-left w-full font-semibold mt-2">socials</p>
            <div className="flex flex-row w-full gap-6 text-tersiary z-[999]">
              <a
                href="https://x.com/mmustihub?t=GADtVncH6OHulzgYNOfULQ&s=09"
                target="_blank"
                className=" "
              >
                <p className="text-amber-300 rounded-full h-[28px] w-[28px] ">
                  {" "}
                  <FaXTwitter className="hover:scale-125 h-[28px] w-[28px] transition-all duration-100 ease-in-out " />
                </p>
              </a>
              <a
                href="https://github.com/Mmust-Ihub/"
                target="_blank"
                className="text-amber-300 rounded-full h-[28px] w-[28px] "
              >
                <p>
                  {" "}
                  <FaGithub className="hover:scale-125 h-[28px] w-[28px] transition-all duration-100 ease-in-out" />
                </p>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61566790980197"
                target="_blank"
              >
                <p className="text-amber-300 rounded-full h-[28px] w-[28px] ">
                  {" "}
                  <FaFacebook className="hover:scale-125 h-[28px] w-[28px] transition-all duration-100 ease-in-out" />
                </p>
              </a>
            </div>
            <img
              src={curve}
              alt="curve"
              className="absolute right-[-72px] bottom-[-72px] z-[0] md:right-[-32px] md:bottom-[-32px]"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[45%] space-y-12 p-8 flex flex-col bg-[#eee] rounded-2xl">
        <form className=" flex gap-6 flex-col lg:px-8">
          <div className=" flex gap-2 items-center justify-center border-2 border-[#3EB0FD] rounded-xl">
            <input
              type="text"
              className=" outline-0 p-2 rounded-lg text-black w-full"
              placeholder="Name..."
            />
          </div>
          <div className=" flex gap-2 items-center justify-center border-2 border-[#3EB0FD] rounded-xl">
            <input
              type="email"
              className=" outline-0 p-2 rounded-lg text-black w-full"
              placeholder="Email..."
            />
          </div>

          <div className=" flex gap-2 items-center justify-center border-2 border-[#3EB0FD] rounded-xl">
            <input
              type="tel"
              className=" outline-0 p-2 rounded-lg text-black w-full"
              placeholder="Phone Number..."
            />
          </div>
          <div className=" flex gap-2 items-center justify-center border-2 border-[#3EB0FD] rounded-xl">
            <textarea
              name="message"
              id="message"
              placeholder="message..."
              className="outline-0 p-2 rounded-lg text-black w-full"
            ></textarea>
          </div>

          <input
            type="submit"
            value="Submit"
            className="bg-[#ffc004] rounded-lg p-2 font-[600] w-[45%] text-center"
          />
        </form>
      </div>
    </div>
  );
}

export default BookADemo;
