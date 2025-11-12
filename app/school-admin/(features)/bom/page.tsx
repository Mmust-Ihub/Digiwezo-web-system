"use client";

import { BomHeader } from "@school-admin/(features)/bom/components/BomHeader";
import { ManagementSection } from "@school-admin/(features)/bom/components/ManagementSection";
import { MembersTable } from "@school-admin/(features)/bom/components/MembersTable";
import { TableActions } from "@school-admin/(features)/bom/components/TableActions";
import { bomData } from "@school-admin/(features)/bom/data/bomData";
import { useSearch } from "@school-admin/(features)/bom/hooks/useSearch";
import { useManagement } from "@school-admin/(features)/bom/hooks/useManagement";
import { useTableActions } from "@school-admin/(features)/bom/hooks/useTableActions";

export default function BomPage() {
  const { searchValue, handleSearchChange } = useSearch();
  const { handleAddMember, handleViewMember } = useManagement();
  const { handlePrint, handleDownload, handlePrevious, handleNext } = useTableActions();

  return (
    <div className="p-6 space-y-8 max-w-[95%]">
      <BomHeader stats={bomData.stats} />
      <ManagementSection 
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onAddMember={handleAddMember}
      />
      <div className="space-y-4">
        <MembersTable 
          members={bomData.members}
          onViewMember={handleViewMember}
        />
        <TableActions 
          onPrint={handlePrint}
          onDownload={handleDownload}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}