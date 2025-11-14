"use client";

import { Input } from "@/components/ui/input";
import { StaffFilters } from "@school-admin/types/staff";
import { Search } from "lucide-react";

interface StaffFiltersProps {
  filters: StaffFilters;
  onFiltersChange: (filters: StaffFilters) => void;
}

export const StaffFiltersComponent = ({
  filters,
  onFiltersChange,
}: StaffFiltersProps) => {
  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, search: value });
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="relative w-[680px]">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-custom-grey" />
        <Input
          placeholder="Search by Name"
          value={filters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="border border-primary pr-10"
        />
      </div>
    </div>
  );
};

