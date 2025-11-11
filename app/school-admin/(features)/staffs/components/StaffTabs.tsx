"use client";

import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface StaffTabsProps {
  activeTab: "staffs" | "groups";
  onTabChange: (tab: "staffs" | "groups") => void;
}

export const StaffTabs = ({ activeTab, onTabChange }: StaffTabsProps) => {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => onTabChange("staffs")}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
          activeTab === "staffs"
            ? "bg-primary text-white"
            : "bg-light-fill1 text-custom-grey hover:bg-gray-200"
        )}
      >
        <Users className="w-4 h-4" />
        Staffs
      </button>
      <button
        onClick={() => onTabChange("groups")}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
          activeTab === "groups"
            ? "bg-primary text-white"
            : "bg-light-fill1 text-custom-grey hover:bg-light-fill"
        )}
      >
        <Users className="w-4 h-4" />
        Staffs Groups
      </button>
    </div>
  );
};

