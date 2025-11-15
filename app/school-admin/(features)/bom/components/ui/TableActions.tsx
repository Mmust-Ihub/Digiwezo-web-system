import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Printer, Download } from "lucide-react";
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
      <div className={paginationStyles.navContainer}>
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className={paginationStyles.navButton}
          aria-label="Previous page"
        >
          <ChevronLeft className={paginationStyles.navIcon} />
        </button>
        
        <div className="flex items-center px-4 py-2 text-sm text-gray-600 bg-gray-50 rounded-md">
          Page {currentPage} of {totalPages}
        </div>
        
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={paginationStyles.navButton}
          aria-label="Next page"
        >
          <ChevronRight className={paginationStyles.navIcon} />
        </button>
      </div>
      
      <div className={paginationStyles.actionsContainer}>
        <Button 
          onClick={onPrint}
          disabled={isPrinting}
          className={paginationStyles.printButton}
        >
          {isPrinting ? (
            <div className={paginationStyles.loadingSpinner}></div>
          ) : (
            <Printer className={paginationStyles.buttonIcon} />
          )}
          {isPrinting ? "Printing..." : "Print"}
        </Button>
        <Button 
          onClick={onDownload}
          disabled={isDownloading}
          className={paginationStyles.downloadButton}
        >
          {isDownloading ? (
            <div className={paginationStyles.loadingSpinner}></div>
          ) : (
            <Download className={paginationStyles.buttonIcon} />
          )}
          {isDownloading ? "Generating..." : "Download"}
        </Button>
      </div>
    </div>
  );
});

