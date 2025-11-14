"use client";

import dynamic from "next/dynamic";
import { Suspense, useMemo, useCallback, startTransition } from "react";
import { BomHeader } from "@school-admin/(features)/bom/components/layout/BomHeader";
import { ManagementSection } from "@school-admin/(features)/bom/components/layout/ManagementSection";
import { AddMemberModal } from "@school-admin/(features)/bom/components/modals/AddMemberModal";
import { ErrorBoundary } from "@school-admin/(features)/bom/components/ui/ErrorBoundary";
import { bomData } from "@school-admin/(features)/bom/data/bomData";
import { useSearch } from "@school-admin/(features)/bom/hooks/ui/useSearch";
import { useManagement } from "@school-admin/(features)/bom/hooks/business/useManagement";
import { useTableActions } from "@school-admin/(features)/bom/hooks/ui/useTableActions";
import { useModal } from "@school-admin/(features)/bom/hooks/ui/useModal";
import { member } from "@school-admin/(features)/bom/utils";

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
  const { searchValue, trimmedSearchValue, handleSearchChange } = useSearch();
  const { handleAddMember, handleViewMember } = useManagement();
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();

  const filteredMembers = useMemo(() => {
    return member.filterMembers(bomData.members, trimmedSearchValue);
  }, [trimmedSearchValue]);

  const { handlePrint, handleDownload, handlePrevious, handleNext, isDownloading, isPrinting } = useTableActions(filteredMembers, bomData.stats);

  const handleAddMemberClick = useCallback(() => {
    openModal();
  }, [openModal]);

  const handleModalSubmit = useCallback(async (memberData: any) => {
    await handleAddMember(memberData);
    closeModal();
  }, [handleAddMember, closeModal]);

  return (
    <div className="p-6 space-y-8 max-w-[95%]">
      <BomHeader stats={bomData.stats} />
      
      <ManagementSection 
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onAddMember={handleAddMemberClick}
      />
        
        <div className="space-y-4">
          <ErrorBoundary fallback={<div className="text-center py-8 text-gray-500">Unable to load members table</div>}>
            <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
              <MembersTable 
                members={filteredMembers}
                onViewMember={handleViewMember}
              />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary fallback={<div className="text-center py-4 text-gray-500">Table actions unavailable</div>}>
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
          </ErrorBoundary>
        </div>
        
        <AddMemberModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleModalSubmit}
        />
      </div>
  );
}

