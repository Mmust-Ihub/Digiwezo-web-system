export interface ManagementSectionProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onAddMember?: () => void;
}

export interface ManagementHeaderProps {
  onAddMember?: () => void;
}

export interface ManagementSearchSectionProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  placeholder?: string;
}
