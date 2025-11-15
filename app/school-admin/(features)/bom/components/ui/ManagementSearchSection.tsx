import { memo } from "react";
import { SearchInput } from "@school-admin/(features)/bom/components/ui/SearchInput";
import { ManagementSearchSectionProps } from "@school-admin/(features)/bom/types/managementTypes";
import { MANAGEMENT_CONSTANTS } from "@school-admin/(features)/bom/constants/managementConstants";
import { managementSectionStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

export const ManagementSearchSection = memo(function ManagementSearchSection({ 
  searchValue = "", 
  onSearchChange,
  placeholder = MANAGEMENT_CONSTANTS.SEARCH_PLACEHOLDER
}: ManagementSearchSectionProps) {
  return (
    <div className={managementSectionStyles.searchContainer}>
      <SearchInput 
        value={searchValue}
        onChange={onSearchChange}
        placeholder={placeholder}
      />
    </div>
  );
});
