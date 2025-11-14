"use client";

import HeroSection from "@/about/components/sections/HeroSection";
import IntroSection from "@/about/components/sections/IntroSection";
import WhoWeAreSection from "@/about/components/sections/WhoWeAreSection";
import StatsSection from "@/about/components/sections/StatsSection";
import TeamSection from "@/about/components/sections/TeamSection";

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













