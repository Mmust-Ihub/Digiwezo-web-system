import { memo } from "react";
import { BomHeader } from "@school-admin/(features)/bom/components/layout/BomHeader";
import { ManagementSection } from "@school-admin/(features)/bom/components/layout/ManagementSection";
import { BomStats } from "@school-admin/(features)/bom/types/bomTypes";

interface BomPageHeaderProps {
  stats: BomStats;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onAddMember: () => void;
}

export const BomPageHeader = memo(function BomPageHeader({
  stats,
  searchValue,
  onSearchChange,
  onAddMember
}: BomPageHeaderProps) {
  return (
    <div className="flex-shrink-0">
      <div className="p-6 pb-0">
        <BomHeader stats={stats} />
      </div>
      
      <div className="p-6 pt-3 pb-4">
        <ManagementSection 
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          onAddMember={onAddMember}
        />
      </div>
    </div>
  );
});