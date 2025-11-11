"use client";

import HeroSection from "@/about_us/components/sections/HeroSection";
import IntroSection from "@/about_us/components/sections/IntroSection";
import WhoWeAreSection from "@/about_us/components/sections/WhoWeAreSection";
import StatsSection from "@/about_us/components/sections/StatsSection";
import TeamSection from "@/about_us/components/sections/TeamSection";
import { MdOutlineMapsHomeWork } from "react-icons/md";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeroSection />
      <IntroSection />
      <WhoWeAreSection />
      <StatsSection />
      <TeamSection />
    </div>
  );
}













