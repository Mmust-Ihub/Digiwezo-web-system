import heroImage from "../../assets/contact/contact.png";
import wave from "../../assets/contact/waves.png";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div>
      <main className="w-screen lg:h-screen mainbg flex-col flex lg:flex-row gap-6 px-6 py-6 justify-center items-center relative">
        <motion.div
          className="lg:pt-0  space-y-6 pt-[100px] z-[999]"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
          }}
        >
          <h1 className="text-3xl lg:text-4xl font-extrabold ">
            We’d Love to
            <span className="text-[#ffc004]"> Hear from You!</span>
          </h1>
          <p className="text-base z-[999]">
            Have questions or need assistance? We’re here to help! <br />
            Reach out and let’s make things happen.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
          }}
          className="z-[999]"
        >
          <img src={heroImage} alt="hero image" className="z-[999]" />
        </motion.div>
      </main>
      <motion.img
        src={wave}
        alt="waves"
        className="absolute bottom-48 lg:bottom-14 z-[1] object-cover w-full h-[230px]"
        initial={{ y: "15%", opacity: 0 }}
        animate={{ y: 0, opacity: .75 }}
        transition={{
          ease: "linear",
          duration: 0.6,
        }}
      />
    </div>
  );
}

export default Hero;
