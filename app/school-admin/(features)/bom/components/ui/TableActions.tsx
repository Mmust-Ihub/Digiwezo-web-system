import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Printer, Download } from "lucide-react";
import { paginationStyles } from "@school-admin/(features)/bom/styles/componentStyles";

interface TableActionsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  onPrint?: () => void;
  onDownload?: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
  isDownloading?: boolean;
  isPrinting?: boolean;
}

export const TableActions = ({ 
  onPrevious, 
  onNext, 
  onPrint, 
  onDownload,
  canGoPrevious = true,
  canGoNext = true,
  isDownloading = false,
  isPrinting = false
}: TableActionsProps) => {
  return (
    <div className={paginationStyles.container}>
      <div className={paginationStyles.navContainer}>
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className={paginationStyles.navButton}
        >
          <ChevronLeft className={paginationStyles.navIcon} />
        </button>
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={paginationStyles.navButton}
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
};