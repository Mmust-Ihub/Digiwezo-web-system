import { aboutData } from "@/data/homepage";
import AboutCard from "@/components/LandingPage/Home/AboutCard";

export default function AboutSection() {
  return (
    <section id="about" className="w-screen bg-custom-white flex-col flex lg:flex-row gap-6 px-8 lg:px-20 pt-4 pb-6 justify-center items-center text-custom-white">
      <div className="w-full flex flex-col justify-center items-center  gap-6 ">
        <h2 className="text-primary lg:text-left lg:self-start lg:px-8 lg:text-lg text-md font-bold  ">
          What Makes Us Stand Out Section
        </h2>
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-14 gap-4 px-4 lg:px-8 text-center">
          {aboutData.map((data, index) => (
            <AboutCard key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
}
