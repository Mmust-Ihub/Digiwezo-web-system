import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SearchInput } from "@school-admin/(features)/bom/components/SearchInput";
import { managementSectionStyles } from "@school-admin/(features)/bom/styles/componentStyles";

interface ManagementSectionProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onAddMember?: () => void;
}

export const ManagementSection = ({ 
  searchValue = "", 
  onSearchChange,
  onAddMember 
}: ManagementSectionProps) => {
  return (
    <div className={managementSectionStyles.container}>
      <div className={managementSectionStyles.header}>
        <h2 className={managementSectionStyles.title}>Management Members</h2>
        <Button 
          onClick={onAddMember}
          className={managementSectionStyles.button}
        >
          <Plus className={managementSectionStyles.buttonIcon} />
          Add Member
        </Button>
      </div>
      
      <div className={managementSectionStyles.searchContainer}>
        <SearchInput 
          value={searchValue}
          onChange={onSearchChange}
          placeholder="Search by Name"
        />
      </div>
    </div>
  );
};