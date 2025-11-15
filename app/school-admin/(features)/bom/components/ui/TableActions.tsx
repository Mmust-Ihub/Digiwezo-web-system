import { memo } from "react";
import { PaginationControls } from "@school-admin/(features)/bom/components/ui/PaginationControls";
import { TableExportActions } from "@school-admin/(features)/bom/components/ui/TableExportActions";
import { paginationStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface TableActionsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  onPrint?: () => void;
  onDownload?: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
  isDownloading?: boolean;
  isPrinting?: boolean;
  currentPage?: number;
  totalPages?: number;
}

export const TableActions = memo(function TableActions({ 
  onPrevious, 
  onNext, 
  onPrint, 
  onDownload,
  canGoPrevious = true,
  canGoNext = true,
  isDownloading = false,
  isPrinting = false,
  currentPage = 1,
  totalPages = 1
}: TableActionsProps) {
  return (
    <div className={paginationStyles.container}>
      <PaginationControls
        onPrevious={onPrevious}
        onNext={onNext}
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      
      <TableExportActions
        onPrint={onPrint}
        onDownload={onDownload}
        isDownloading={isDownloading}
        isPrinting={isPrinting}
      />
    </div>
  );
});

