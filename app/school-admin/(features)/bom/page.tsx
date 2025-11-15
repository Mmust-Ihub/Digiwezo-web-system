"use client";

import { BomHeader } from "@school-admin/(features)/bom/components/layout/BomHeader";
import { ManagementSection } from "@school-admin/(features)/bom/components/layout/ManagementSection";
import { AddMemberModal } from "@school-admin/(features)/bom/components/modals/AddMemberModal";
import { MembersTableSection } from "@school-admin/(features)/bom/components/ui/MembersTableSection";
import { TableActionsSection } from "@school-admin/(features)/bom/components/ui/TableActionsSection";
import { useBomPage } from "@school-admin/(features)/bom/hooks/ui/useBomPage";

export default function BomPage() {
  const {
    stats,
    filteredMembers,
    searchValue,
    handleSearchChange,
    isModalOpen,
    closeModal,
    handleAddMemberClick,
    handleModalSubmit,
    handlePrint,
    handleDownload,
    handlePrevious,
    handleNext,
    canGoNext,
    canGoPrevious,
    isDownloading,
    isPrinting,
    handleViewMember,
    startIndex,
    currentPage,
    totalPages,
  } = useBomPage();

  return (
    <div className="p-6 flex flex-col gap-3 pb-24 min-h-screen">
      <BomHeader stats={stats} />
      
      <ManagementSection 
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onAddMember={handleAddMemberClick}
      />
        
      <MembersTableSection 
        members={filteredMembers}
        onViewMember={handleViewMember}
        startIndex={startIndex}
      />
      
      <TableActionsSection 
        onPrint={handlePrint}
        onDownload={handleDownload}
        onPrevious={handlePrevious}
        onNext={handleNext}
        canGoNext={canGoNext}
        canGoPrevious={canGoPrevious}
        isDownloading={isDownloading}
        isPrinting={isPrinting}
        currentPage={currentPage}
        totalPages={totalPages}
      />
        
      <AddMemberModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
}

