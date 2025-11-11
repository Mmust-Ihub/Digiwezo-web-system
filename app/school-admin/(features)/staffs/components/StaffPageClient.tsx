"use client";

import { useState } from "react";
import { Staff, StaffStats } from "@school-admin/types/staff";
import { StaffGroup } from "@school-admin/(features)/staffs/types/staffGroup";
import { StaffList } from "@school-admin/(features)/staffs/components/StaffList";
import { StaffGroupsList } from "@school-admin/(features)/staffs/components/StaffGroupsList";
import { StaffTabs } from "@school-admin/(features)/staffs/components/StaffTabs";

interface StaffPageClientProps {
  initialStaff: Staff[];
  initialStats: StaffStats;
  initialGroups: StaffGroup[];
}

export const StaffPageClient = ({
  initialStaff,
  initialStats,
  initialGroups,
}: StaffPageClientProps) => {
  const [activeTab, setActiveTab] = useState<"staffs" | "groups">("staffs");

  return (
    <div className="space-y-6">
      <StaffTabs activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "staffs" ? (
        <StaffList initialStaff={initialStaff} initialStats={initialStats} />
      ) : (
        <StaffGroupsList initialGroups={initialGroups} />
      )}
    </div>
  );
};

