"use client";

import SectionHeading from "@/about/components/SectionHeading";
import TeamMemberCard from "@/about/components/TeamMemberCard";
import { teamMembers } from "@/data/about_us";

export default function TeamSection() {
  return (
    <section className="w-full px-6 py-16">
      <div className="container mx-auto">
        <SectionHeading title="OUR TEAM" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <TeamMemberCard key={i} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
