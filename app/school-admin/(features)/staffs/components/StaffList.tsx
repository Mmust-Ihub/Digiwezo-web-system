"use client";

import { useState } from "react";
import { Staff, StaffStats } from "@school-admin/types/staff";
import { StaffStats as StatsComponent } from "@school-admin/(features)/staffs/components/StaffStats";
import { StaffTable } from "@school-admin/(features)/staffs/components/StaffTable";
import { StaffFiltersComponent } from "@school-admin/(features)/staffs/components/StaffFilters";
import { Pagination } from "@school-admin/(features)/staffs/components/Pagination";
import { ActionButtons } from "@school-admin/(features)/staffs/components/ActionButtons";
import { AddStaffModal } from "@school-admin/(features)/staffs/components/AddStaffModal";
import { useStaffFilters } from "@school-admin/(features)/staffs/hooks/useStaffFilters";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StaffListProps {
  initialStaff: Staff[];
  initialStats: StaffStats;
}

const ITEMS_PER_PAGE = 8;

export const StaffList = ({
  initialStaff,
  initialStats,
}: StaffListProps) => {
  const [staff, setStaff] = useState(initialStaff);
  const { filters, setFilters, filteredStaff } = useStaffFilters(staff);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const totalPages = Math.ceil(filteredStaff.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedStaff = filteredStaff.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleView = (staff: Staff) => {
    console.log("View staff:", staff);
  };

  const handleAddStaff = (newStaff: Omit<Staff, "id">) => {
    const staffWithId: Staff = {
      ...newStaff,
      id: Date.now().toString(),
    };
    setStaff([...staff, staffWithId]);
  };

  return (
    <div className="space-y-6">
      <StatsComponent stats={initialStats} />

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-foreground">Staff</h1>
      </div>

      <div className="flex items-center justify-between mb-6">
        <StaffFiltersComponent filters={filters} onFiltersChange={setFilters} />
        <Button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary text-background hover:bg-primary/90"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Add Staff
        </Button>
      </div>

      <StaffTable
        staff={paginatedStaff}
        startIndex={startIndex}
        onView={handleView}
      />

      <div className="flex items-center justify-between mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <ActionButtons />
      </div>

      <AddStaffModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddStaff}
      />
    </div>
  );
};

