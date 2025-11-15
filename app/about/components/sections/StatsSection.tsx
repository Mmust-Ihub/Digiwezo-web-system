"use client";

import SectionHeading from "@/about/components/SectionHeading";
import StatsCard from "@/about/components/StatsCard";
import { statsData } from "@/data/about_us";

export default function StatsSection() {
  return (
    <section className="w-full px-6 py-16">
      <div className="container mx-auto">
  <SectionHeading title="Get to Know About Us" alignment="left" />
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-6 auto-rows-fr">
              {statsData.slice(0, 4).map((stat, i) => (
                <StatsCard key={i} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
          
          <div className="grid grid-rows-2 gap-6">
            <div className="bg-primary text-white p-8 rounded-none shadow-md flex flex-col justify-center h-full">
              <p className="text-lg leading-relaxed font-semibold">
                Lorem ipsum dolor sit amet consectetur. Tincidunt fringilla nec cursus sed utricles orci mattis.
              </p>
            </div>

            <div className="bg-primary text-white p-8 rounded-none shadow-md flex flex-col justify-center h-full">
              <p className="text-lg leading-relaxed font-semibold">
                Lorem ipsum dolor sit amet consectetur. Tincidunt fringilla nec cursus sed utricles orci mattis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
