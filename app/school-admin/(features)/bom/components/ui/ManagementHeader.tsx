import { memo } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@school-admin/(features)/bom/icons/PlusIcon";
import { ManagementHeaderProps } from "@school-admin/(features)/bom/types/managementTypes";
import { MANAGEMENT_CONSTANTS } from "@school-admin/(features)/bom/constants/managementConstants";
import { managementSectionStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

export const ManagementHeader = memo(function ManagementHeader({ 
  onAddMember 
}: ManagementHeaderProps) {
  return (
    <div className={managementSectionStyles.header}>
      <h2 className={managementSectionStyles.title}>
        {MANAGEMENT_CONSTANTS.SECTION_TITLE}
      </h2>
      <Button 
        onClick={onAddMember}
        className={managementSectionStyles.button}
      >
        <PlusIcon className={managementSectionStyles.buttonIcon} />
        {MANAGEMENT_CONSTANTS.ADD_MEMBER_BUTTON_TEXT}
      </Button>
    </div>
  );
});
