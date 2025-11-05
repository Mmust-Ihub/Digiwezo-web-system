import { useState, ChangeEvent, FormEvent } from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
}
function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      alert(`Failed to send message. Please try again.${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const items = [
    {
      desc: "Mulembe House 2nd floor, P.O Box 139-50100, Kakamega, Kenya",
      icon: <IoLocation className="text-[#fdbf05] text-2xl" />,
    },
    {
      desc: "+254796654709",
      icon: <FaPhone className="text-[#fdbf05] text-2xl " />,
    },
    {
      desc: "info@digiwezo.co.ke",
      icon: <MdEmail className="text-[#fdbf05] text-2xl " />,
    },
  ];
  return (
    <main className="w-screen lg:h-screen  flex-col flex md:flex-row lg:gap-6 gap-3 lg:px-6 py-6 lg:justify-evenly justify-center items-center bg-grey-300 mt-4 ">
      <div className="md:w-2/5 h-11/12 w-full contact-bg lg:px-20 lg:py-12 p-4 flex flex-col items-start justify-evenly">
        <div>
          <h1 className="text-2xl lg:text-3xl font-medium">Contact Us</h1>
          <p className="text-md my-2">
            We are here to assist you! Reach out for inquiries, support or
            collaboration
          </p>
        </div>

        <div>
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 my-3">
              <div className="w-10 h-10  flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-sm text-start">{item.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex items-center gap-4 my-3">
            <div className="w-10 h-10  flex items-center justify-center">
              {" "}
              <FaFacebook className="text-[#fdbf05] text-2xl" />
            </div>
            <div className="w-10 h-10  flex items-center justify-center">
              {" "}
              <FaInstagram className="text-[#fdbf05] text-2xl" />
            </div>
            <div className="w-10 h-10  flex items-center justify-center">
              <FaXTwitter className="text-[#fdbf05] text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-2/5 h-11/12 w-full lg:px-20 lg:py-12 p-4 bg-grey-500 justify-center items-center flex ">
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div>
            <input
              title="name"
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md text-gray-700 shadow-sm py-2 px-1 placeholder:text-gray-500 border  ${
                errors.name ? "border-red-500" : "border-blue-300"
              } focus:border-blue-500 focus:ring-blue-500`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full text-gray-700 rounded-md shadow-sm py-2 px-1 border placeholder:text-gray-500 ${
                errors.email ? "border-red-500" : "border-blue-300"
              } focus:border-blue-500 focus:ring-blue-500`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              placeholder="Phone Number"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`mt-1 block w-full text-gray-700 rounded-md  shadow-sm border focus:border-blue-500 focus:ring-blue-500 py-2 px-1 placeholder:text-gray-500 ${
                errors.phoneNumber ? "border-red-500" : "border-blue-300"
              }`}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md py-2 px-1 resize-none shadow-sm border placeholder:text-gray-500  ${
                errors.message ? "border-red-500" : "border-blue-300"
              }  `}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-fit flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#fdbf05] hover:opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2  ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default ContactSection;
