import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Printer, Download } from "lucide-react";
import { BOM_CONSTANTS } from "@school-admin/(features)/bom/constants/bomConstants";
import { paginationStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface TableExportActionsProps {
  onPrint?: () => void;
  onDownload?: () => void;
  isDownloading?: boolean;
  isPrinting?: boolean;
}

export const TableExportActions = memo(function TableExportActions({ 
  onPrint, 
  onDownload,
  isDownloading = false,
  isPrinting = false
}: TableExportActionsProps) {
  return (
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
        {isPrinting ? BOM_CONSTANTS.BUTTONS.PRINTING : BOM_CONSTANTS.BUTTONS.PRINT}
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
        {isDownloading ? BOM_CONSTANTS.BUTTONS.GENERATING : BOM_CONSTANTS.BUTTONS.DOWNLOAD}
      </Button>
    </div>
  );
});
