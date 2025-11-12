"use client";

import dynamic from "next/dynamic";
import { Suspense, useMemo } from "react";
import { BomHeader } from "@school-admin/(features)/bom/components/layout/BomHeader";
import { ManagementSection } from "@school-admin/(features)/bom/components/layout/ManagementSection";
import { AddMemberModal } from "@school-admin/(features)/bom/components/modals/AddMemberModal";
import { bomData } from "@school-admin/(features)/bom/data/bomData";
import { useSearch } from "@school-admin/(features)/bom/hooks/ui/useSearch";
import { useManagement } from "@school-admin/(features)/bom/hooks/business/useManagement";
import { useTableActions } from "@school-admin/(features)/bom/hooks/ui/useTableActions";
import { useModal } from "@school-admin/(features)/bom/hooks/ui/useModal";

const MembersTable = dynamic(
  () => import("@school-admin/(features)/bom/components/ui/MembersTable").then(mod => ({ default: mod.MembersTable })),
  {
    loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>,
    ssr: false
  }
);

const TableActions = dynamic(
  () => import("@school-admin/(features)/bom/components/ui/TableActions").then(mod => ({ default: mod.TableActions })),
  {
    loading: () => <div className="animate-pulse bg-gray-200 h-16 rounded-lg"></div>,
    ssr: false
  }
);

export default function BomPage() {
  const { searchValue, handleSearchChange } = useSearch();
  const { handleAddMember, handleViewMember } = useManagement();
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();

  const filteredMembers = useMemo(() => {
    if (!searchValue.trim()) return bomData.members;
    
    return bomData.members.filter(member =>
      member.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      member.username.toLowerCase().includes(searchValue.toLowerCase()) ||
      member.phone.includes(searchValue)
    );
  }, [searchValue]);

  const { handlePrint, handleDownload, handlePrevious, handleNext, isDownloading, isPrinting } = useTableActions(filteredMembers, bomData.stats);

  const handleAddMemberClick = () => {
    openModal();
  };

  const handleModalSubmit = async (memberData: any) => {
    await handleAddMember(memberData);
    closeModal();
  };

  return (
    <div className="p-6 space-y-8 max-w-[95%]">
      <BomHeader stats={bomData.stats} />
      
      <ManagementSection 
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onAddMember={handleAddMemberClick}
      />
        
        <div className="space-y-4">
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
            <MembersTable 
              members={filteredMembers}
              onViewMember={handleViewMember}
            />
          </Suspense>
          
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-16 rounded-lg"></div>}>
            <TableActions 
              onPrint={handlePrint}
              onDownload={handleDownload}
              onPrevious={handlePrevious}
              onNext={handleNext}
              isDownloading={isDownloading}
              isPrinting={isPrinting}
            />
          </Suspense>
        </div>
        
        <AddMemberModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleModalSubmit}
        />
      </div>
  );
}