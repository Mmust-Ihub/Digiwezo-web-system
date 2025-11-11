"use client";

import { useState } from "react";
import { Staff, StaffFilters } from "@school-admin/types/staff";

export const useStaffFilters = (staff: Staff[]) => {
  const [filters, setFilters] = useState<StaffFilters>({
    search: "",
  });

  const filteredStaff = staff.filter((member) => {
    const matchesSearch =
      filters.search === "" ||
      member.name.toLowerCase().includes(filters.search.toLowerCase());

    return matchesSearch;
  });

  return {
    filters,
    setFilters,
    filteredStaff,
  };
};

