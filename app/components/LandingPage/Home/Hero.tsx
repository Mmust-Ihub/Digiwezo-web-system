import CurvePattern from "@/components/ui/CurvePattern";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative w-screen lg:h-screen flex-col flex lg:flex-row gap-6 px-20 py-6 justify-center items-center text-custom-white bg-primary">
      <motion.div
        className="lg:pt-0 flex flex-1 flex-col pt-[100px]"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.9,
        }}>
        <h1 className="text-3xl lg:text-4xl font-bold leading-12 ">
          <span className="text-secondary ">Smart</span> School Management,
          <br /> <span className="text-secondary ">Simplified!</span>
        </h1>
        <p className="text-base leading-10 ">
          A Smarter way to run your school! Our platform seamlessly <br />
          integrates administration, communication, and academics,
          <br /> allowing educators to focus on what truly matters.
        </p>
        <motion.div
          className="w-full flex gap-4"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
          }}>
          <Link
            href=""
            className="bg-secondary rounded-lg p-2 font-semibold w-[45%] text-center">
            Login
          </Link>
          <Link
            href="#demo"
            className="bg-dark-blue  p rounded-lg font-semibold w-[45%] text-center p-2">
            Book Demo
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-1"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.3,
        }}>
        <Image
          width={1000}
          height={1000}
          src="/assets/webp/Devices-cuate1.webp"
          alt="hero image"
        />
      </motion.div>
      <CurvePattern/>
    </section>
  );
}
