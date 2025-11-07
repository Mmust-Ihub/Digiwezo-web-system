"use client";

import Image from "next/image";
import SectionHeading from "@/about_us/components/SectionHeading";
import StatsCard from "@/about_us/components/StatsCard";
import TeamMemberCard from "@/about_us/components/TeamMemberCard";
import { statsData, teamMembers } from "@/data/about_us";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      
      <section className="relative w-full min-h-[50vh] md:min-h-[65vh] flex items-center justify-center mt-4 overflow-hidden rounded-none">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.png"
            alt="About Us Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-75"
          />
        </div>
      </section>

      <section className="py-16 container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl font-bold leading-snug">
          Your Gateway to Educational Excellence with{" "}
          <span className="text-[var(--color-primary)]">Dijiwezo</span>
        </h2>

        <button className="mt-6 bg-[var(--color-primary)] text-[var(--color-custom-white)] px-6 py-2 rounded-md hover:bg-[var(--color-dark-blue)] transition">
          Dashboard
        </button>
      </section>

      <section className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start py-12">
        <div>
          <h3 className="text-3xl font-bold">
            WHO <span className="text-[var(--color-primary)]">WE</span> ARE?
          </h3>
          <p className="mt-4 text-[var(--color-custom-grey)] leading-relaxed">
            We are a platform dedicated to empowering students and advancing learning
            experiences through structured educational tools, resources, and community.
          </p>
          <button className="mt-4 border border-[var(--color-primary)] text-[var(--color-primary)] px-5 py-2 rounded-md hover:bg-[var(--color-primary)] hover:text-[var(--color-custom-white)] transition">
            Read More
          </button>
        </div>

        <div className="text-right">
          <h3 className="text-3xl font-bold">
            WHAT <span className="text-[var(--color-primary)]">WE</span> DO?!
          </h3>
          <p className="mt-4 text-[var(--color-custom-grey)] leading-relaxed">
            We provide learning support, mentorship, and collaboration tools
            designed to enhance academic growth and innovation.
          </p>
          <button className="mt-4 border border-[var(--color-primary)] text-[var(--color-primary)] px-5 py-2 rounded-md hover:bg-[var(--color-primary)] hover:text-[var(--color-custom-white)] transition">
            Read More
          </button>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6">
        <SectionHeading title="Get to Know About Us" />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <StatsCard key={i} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      <section className="py-16 container mx-auto px-6">
        <SectionHeading title="OUR TEAM" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <TeamMemberCard key={i} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}
