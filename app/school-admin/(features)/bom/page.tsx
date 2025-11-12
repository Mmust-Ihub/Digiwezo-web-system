"use client";

import { BomHeader } from "./components/BomHeader";
import { ManagementSection } from "./components/ManagementSection";
import { bomData } from "./data/bomData";

export default function BomPage() {
  const handleSearchChange = (value: string) => {
    console.log("Search:", value);
  };

  const handleAddMember = () => {
    console.log("Add member clicked");
  };

  return (
    <div className="p-6 space-y-8">
      <BomHeader stats={bomData.stats} />
      <ManagementSection 
        onSearchChange={handleSearchChange}
        onAddMember={handleAddMember}
      />
    </div>
  );
}