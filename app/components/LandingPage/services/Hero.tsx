import heroImage from "../../assets/services/main.png";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
function Hero() {
  return (
    <main className="w-screen lg:h-screen mainbg flex-col flex lg:flex-row gap-6 px-6 py-6 justify-center items-center ">
      <motion.div
        className="lg:pt-0  space-y-6 pt-[100px]"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.9,
        }}
      >
        <h1 className="text-3xl lg:text-4xl font-extrabold text-[#ffc004] ">
          Transform learning with <br />
          seamless technology integration
        </h1>
        <p className="text-base font-semibold text-white">
          Empower your school’s Digital future
        </p>
        <motion.div
          className="w-full flex gap-4 items-center justify-center lg:justify-start"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
          }}
        >
          <HashLink
            to="#demo"
            smooth
            className="bg-[#007BFF]  p rounded-lg font-[600] w-[100%] text-center p-2 lg:w-[45%]"
          >
            Get Started
          </HashLink>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.3,
        }}
      >
        <img src={heroImage} alt="hero image" />
      </motion.div>
    </main>
  );
}

export default Hero;
