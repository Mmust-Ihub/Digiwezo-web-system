import CurvePattern from "@/components/ui/CurvePattern";
import { services } from "@/data/homepage";
import { motion } from "framer-motion";
import Image from "next/image";
export default function ServicesSection() {
  return (
    <section id="services" className="py-12 px-8 md:px-20 mx-auto bg-primary text-custom-white flex flex-col gap-8 relative w-screen mt-8 ">
      <CurvePattern />

      <h2 className="lg:text-3xl text-lg font-bold">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            className={`relative p-6 bg-white shadow-md rounded-2xl flex flex-col items-center  transition-all gap-3 `}>
            <Image
              src={service.img}
              alt={service.title}
              width={1000}
              height={1000}
              className="w-[89.44px] h-[89.44px]  object-contain"
            />
            <h3 className="text-md md:text-lg lg:text-xl text-ellipsis text-center font-bold text-primary">
              {service.title}
            </h3>
            <p className="text-custom-grey font-bold text-ellipsis line-clamp-5 ">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
