"use client";

import AboutSection from "@/components/LandingPage/Home/AboutSection";
import BookADemo from "@/components/LandingPage/Home/BookADemo";
import Hero from "@/components/LandingPage/Home/Hero";
import Partners from "@/components/LandingPage/Home/Partners";
import Testimonials from "@/components/LandingPage/Home/Testimonials";
import { useBookDemo } from "@/hooks/useDemo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  const { isLoading, handleDemoSubmit, defaultValues } = useBookDemo();

  return (
    <div className="min-h-screen bg-custom-white">
      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-between sm:items-start overflow-x-clip">
        
        <section id="home" className="w-full">
        
        </section>

      
        <section id="about" className="w-full">
          
        </section>

        
        <section id="services" className="w-full">
          
        </section>

        {/* Partners Section */}
        <section id="pricing" className="w-full">
          
        </section>

        
        <section id="contact" className="w-full">
          <BookADemo
            onSubmit={handleDemoSubmit}
            isLoading={isLoading}
            defaultValues={defaultValues}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
