import { memo } from "react";
import { MembersTableSection } from "@school-admin/(features)/bom/components/ui/MembersTableSection";
import { TableActionsSection } from "@school-admin/(features)/bom/components/ui/TableActionsSection";
import { BomMember } from "@school-admin/(features)/bom/types/bomTypes";

interface BomPageContentProps {
  filteredMembers: BomMember[];
  onViewMember: (id: number) => void;
  startIndex: number;
  onPrint: () => void;
  onDownload: () => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isDownloading: boolean;
  isPrinting: boolean;
  currentPage: number;
  totalPages: number;
}

export const BomPageContent = memo(function BomPageContent({
  filteredMembers,
  onViewMember,
  startIndex,
  onPrint,
  onDownload,
  onPrevious,
  onNext,
  canGoNext,
  canGoPrevious,
  isDownloading,
  isPrinting,
  currentPage,
  totalPages
}: BomPageContentProps) {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      <div className="p-6 pt-6 flex flex-col gap-3 pb-24">
        <MembersTableSection 
          members={filteredMembers}
          onViewMember={onViewMember}
          startIndex={startIndex}
        />
        
        <TableActionsSection 
          onPrint={onPrint}
          onDownload={onDownload}
          onPrevious={onPrevious}
          onNext={onNext}
          canGoNext={canGoNext}
          canGoPrevious={canGoPrevious}
          isDownloading={isDownloading}
          isPrinting={isPrinting}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
});