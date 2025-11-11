"use client";

import SectionHeading from "@/about/components/SectionHeading";
import StatsCard from "@/about/components/StatsCard";
import { statsData } from "@/data/about_us";

export default function StatsSection() {
  return (
    <section className="py-16 container mx-auto px-6">
      <SectionHeading title="Get to Know About Us" />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {statsData.map((stat, i) => (
          <StatsCard key={i} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
