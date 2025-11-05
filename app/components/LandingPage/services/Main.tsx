import { motion } from "framer-motion";
import image1 from "../../assets/services/together.png";
import image2 from "../../assets/services/cloud.png";
import image3 from "../../assets/services/cms.png";
import image4 from "../../assets/services/communication.png";
import image5 from "../../assets/services/dashboard.png";
import image6 from "../../assets/tracking.png";

const services = [
  {
    id: 1,
    title: "Seamless School Onboarding",
    desc: "Quickly launch your eLearning environment. We handle registration, customization, and user access, so you can focus on teaching",
    img: image1,
  },
  {
    id: 2,
    title: "Streamlined System Integration",
    desc: "Connect your LMS and SIS effortlessly. Payment and Subcription Management. We ensure data syncs smoothly, saving you time and reducing errors..",
    img: image2,
  },

  {
    id: 3,
    title: "Seamless Communication",
    desc: "School-Wide Announcements, Messaging & Forums, Event & Calendar Management.",
    img: image4,
  },
  {
    id: 4,
    title: "Content Management System",
    desc: "Upload and share learning materials with ease. Access pre-loaded resources and keep your content organized in one place.",
    img: image3,
  },
  {
    id: 5,
    title: "Reporting & Analytics",
    desc: "School Performance Dashboards, Custom Reports, Track engagement",
    img: image5,
  },
  {
    id: 6,
    title: "Seamless and efficient eLearning environment",
    desc: "Empowering educational institutions with comprehensive solutions to streamline onboarding, enhance system integration, and foster collaboration",
    img: image6,
  },
];

export default function Services() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ${index === 4 ? "col-span-full lg:col-span-3" : ""} */}
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            className={`relative p-6 bg-white shadow-xl rounded-2xl flex flex-col items-center text-center transition-all `}
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-20 h-20 mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-700">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </div>
      {/* <p className="text-gray-500 mt-14 text-center">
        Empowering educational institutions with comprehensive solutions to
        streamline onboarding, enhance system integration, and foster
        collaboration, ensuring a seamless and efficient eLearning environment.
      </p> */}
    </section>
  );
}
