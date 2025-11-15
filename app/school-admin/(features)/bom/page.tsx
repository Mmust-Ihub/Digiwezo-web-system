"use client";

import { BomPageHeader } from "@school-admin/(features)/bom/components/layout/BomPageHeader";
import { BomPageContent } from "@school-admin/(features)/bom/components/layout/BomPageContent";
import { AddMemberModal } from "@school-admin/(features)/bom/components/modals/AddMemberModal";
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
    <div className="h-full flex flex-col">
      <BomPageHeader 
        stats={stats}
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onAddMember={handleAddMemberClick}
      />
      
      <BomPageContent 
        filteredMembers={filteredMembers}
        onViewMember={handleViewMember}
        startIndex={startIndex}
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

