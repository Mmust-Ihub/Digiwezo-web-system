import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SearchInput } from "./SearchInput";

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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Management Members</h2>
        <Button 
          onClick={onAddMember}
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Member
        </Button>
      </div>
      
      <div>
        <SearchInput 
          value={searchValue}
          onChange={onSearchChange}
          placeholder="Search by Name"
        />
      </div>
    </div>
  );
};