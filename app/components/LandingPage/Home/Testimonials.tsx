import Marquee from "react-fast-marquee";
import CurvePattern from "@/components/ui/CurvePattern";
import { TestimonialCard } from "@/components/LandingPage/Home/TestimonialCard";
import { testimonials } from "@/data/homepage";

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-screen h-[50vh] lg:h-[80vh] relative gap-6 bg-primary flex flex-col justify-center items-center lg:pb-24 text-custom-white">
      <h2 className="lg:text-lg text-md font-bold">What Our Users Say</h2>

      <Marquee
        pauseOnHover
        speed={60}
        gradient
        gradientWidth={100}
        gradientColor="#FAFAFA"
        className="max-w-5xl">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="mx-3">
            <TestimonialCard
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          </div>
        ))}
      </Marquee>
      <CurvePattern />
    </section>
  );
}
