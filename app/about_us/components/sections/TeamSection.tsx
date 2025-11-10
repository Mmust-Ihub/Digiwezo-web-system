"use client";

import SectionHeading from "@/about_us/components/SectionHeading";
import TeamMemberCard from "@/about_us/components/TeamMemberCard";
import { teamMembers } from "@/data/about_us";

export default function TeamSection() {
  return (
    <section className="py-16 container mx-auto px-6">
      <SectionHeading title="OUR TEAM" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member, i) => (
          <TeamMemberCard key={i} {...member} />
        ))}
      </div>
    </section>
  );
}
