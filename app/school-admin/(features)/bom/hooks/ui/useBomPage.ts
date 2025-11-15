import { useMemo, useCallback } from "react";
import { bomData } from "@school-admin/(features)/bom/data/bomData";
import { useSearch } from "@school-admin/(features)/bom/hooks/ui/useSearch";
import { useManagement } from "@school-admin/(features)/bom/hooks/business/useManagement";
import { useTableActions } from "@school-admin/(features)/bom/hooks/ui/useTableActions";
import { useModal } from "@school-admin/(features)/bom/hooks/ui/useModal";
import { usePagination } from "@school-admin/(features)/bom/hooks/ui/usePagination";
import { member } from "@school-admin/(features)/bom/utils";

export function useBomPage() {
  const { searchValue, trimmedSearchValue, handleSearchChange } = useSearch();
  const { handleAddMember, handleViewMember } = useManagement();
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();

  const filteredMembers = useMemo(() => {
    return member.filterMembers(bomData.members, trimmedSearchValue);
  }, [trimmedSearchValue]);

  const pagination = usePagination({ 
    data: filteredMembers, 
    itemsPerPage: 4 
  });

  const { handlePrint, handleDownload, handlePrevious, handleNext, canGoNext, canGoPrevious, isDownloading, isPrinting } = useTableActions({
    allMembers: filteredMembers,
    stats: bomData.stats,
    onNext: pagination.goToNext,
    onPrevious: pagination.goToPrevious,
    canGoNext: pagination.canGoNext,
    canGoPrevious: pagination.canGoPrevious,
  });

  const handleAddMemberClick = useCallback(() => {
    openModal();
  }, [openModal]);

  const handleModalSubmit = useCallback(async (memberData: any) => {
    await handleAddMember(memberData);
    closeModal();
  }, [handleAddMember, closeModal]);

  return {
    stats: bomData.stats,
    filteredMembers: pagination.paginatedData,
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
    currentPage: pagination.currentPage,
    totalPages: pagination.totalPages,
    totalItems: pagination.totalItems,
    startIndex: (pagination.currentPage - 1) * pagination.itemsPerPage,
  };
}
