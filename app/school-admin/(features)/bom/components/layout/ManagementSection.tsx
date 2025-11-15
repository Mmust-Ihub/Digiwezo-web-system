import { memo } from "react";
import { ManagementHeader } from "@school-admin/(features)/bom/components/ui/ManagementHeader";
import { ManagementSearchSection } from "@school-admin/(features)/bom/components/ui/ManagementSearchSection";
import { ManagementSectionProps } from "@school-admin/(features)/bom/types/managementTypes";
import { managementSectionStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

export const ManagementSection = memo(function ManagementSection({ 
  searchValue = "", 
  onSearchChange,
  onAddMember 
}: ManagementSectionProps) {
  return (
    <div className={managementSectionStyles.container}>
      <ManagementHeader onAddMember={onAddMember} />
      <ManagementSearchSection 
        searchValue={searchValue}
        onSearchChange={onSearchChange}
      />
    </div>
  );
});

