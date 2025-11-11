"use client";

import { useState } from "react";
import { StaffGroup } from "@school-admin/(features)/staffs/types/staffGroup";
import { StaffGroupsTable } from "@school-admin/(features)/staffs/components/StaffGroupsTable";
import { Pagination } from "@school-admin/(features)/staffs/components/Pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, UserPlus } from "lucide-react";
import { AddStaffGroupModal } from "@school-admin/(features)/staffs/components/AddStaffGroupModal";

interface StaffGroupsListProps {
  initialGroups: StaffGroup[];
}

const ITEMS_PER_PAGE = 8;

export const StaffGroupsList = ({
  initialGroups,
}: StaffGroupsListProps) => {
  const [groups, setGroups] = useState(initialGroups);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredGroups.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedGroups = filteredGroups.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleAddGroup = (name: string) => {
    const newGroup: StaffGroup = {
      id: Date.now().toString(),
      name,
    };
    setGroups([...groups, newGroup]);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Staff's Groups</h1>

      <div className="flex items-center justify-between mb-6">
        <div className="relative w-[800px]">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-custom-grey" />
          <Input
            placeholder="Search by Name of the group"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-primary pr-10"
          />
        </div>
        <Button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary text-background hover:bg-primary/90"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Add Group
        </Button>
      </div>

      <StaffGroupsTable groups={paginatedGroups} startIndex={startIndex} />

      <div className="flex items-center justify-start mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <AddStaffGroupModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddGroup}
      />
    </div>
  );
};

