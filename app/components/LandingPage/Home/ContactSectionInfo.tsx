import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const items = [
  {
    desc: "Mulembe House 2nd floor, P.O Box 139-50100, Kakamega, Kenya",
    icon: IoLocation,
  },
  {
    desc: "+254796654709",
    icon: FaPhone,
  },
  {
    desc: "info@digiwezo.co.ke",
    icon: MdEmail,
  },
];

export default function ContactSectionInfo() {
  return (
    <div className="md:w-2/5 h-11/12 w-full bg-primary lg:px-20 lg:py-12 p-4 flex flex-col items-start justify-center rounded-xl text-custom-white gap-7">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl lg:text-3xl font-bold">Contact Us</h1>
        <p className="text-md italic">
          We are here to assist you! Reach out for inquiries, support, or
          collaboration.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-4">
              <Icon className="w-6 h-6 text-secondary" />
              <p className="text-sm text-start">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div>
        <h3 className="text-lg font-semibold">Socials</h3>
        <div className="flex items-center gap-4 my-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <FaFacebook className="text-secondary text-2xl" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center">
            <FaInstagram className="text-secondary text-2xl" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center">
            <FaXTwitter className="text-secondary text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
