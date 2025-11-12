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
}

export const TableActions = ({ 
  onPrevious, 
  onNext, 
  onPrint, 
  onDownload,
  canGoPrevious = true,
  canGoNext = true 
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
          className={paginationStyles.printButton}
        >
          <Printer className={paginationStyles.buttonIcon} />
          Print
        </Button>
        <Button 
          onClick={onDownload}
          className={paginationStyles.downloadButton}
        >
          <Download className={paginationStyles.buttonIcon} />
          Download
        </Button>
      </div>
    </div>
  );
};