"use client";

import { BomHeader } from "@school-admin/(features)/bom/components/BomHeader";
import { ManagementSection } from "@school-admin/(features)/bom/components/ManagementSection";
import { bomData } from "@school-admin/(features)/bom/data/bomData";
import { useSearch } from "@school-admin/(features)/bom/hooks/useSearch";
import { useManagement } from "@school-admin/(features)/bom/hooks/useManagement";

export default function BomPage() {
  const { searchValue, handleSearchChange } = useSearch();
  const { handleAddMember } = useManagement();

  return (
    <div className="p-6 space-y-8">
      <BomHeader stats={bomData.stats} />
      <ManagementSection 
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onAddMember={handleAddMember}
      />
    </div>
  );
}