"use client";

import Footer from "@/components/LandingPage/common/Footer";
import Header from "@/components/LandingPage/common/Header";
import AboutSection from "@/components/LandingPage/Home/AboutSection";
import BookADemo from "@/components/LandingPage/Home/BookADemo";
import Hero from "@/components/LandingPage/Home/Hero";
import Partners from "@/components/LandingPage/Home/Partners";
import Testimonials from "@/components/LandingPage/Home/Testimonials";
import ServicesSection from "@/components/LandingPage/Home/ServicesSection";
import ContactSection from "@/components/LandingPage/Home/ContactSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-custom-white">

      <main className="flex flex-1 flex-col items-center justify-between sm:items-start overflow-x-clip">
        <Hero />
        <AboutSection />
        <ServicesSection/>
        <ContactSection/>
        <Testimonials />
        <Partners />
        <BookADemo/>
      </main>

    </div>
  );
}
