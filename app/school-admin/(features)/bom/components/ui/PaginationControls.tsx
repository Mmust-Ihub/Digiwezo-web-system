import { memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BOM_CONSTANTS } from "@school-admin/(features)/bom/constants/bomConstants";
import { paginationStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface PaginationControlsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
  currentPage?: number;
  totalPages?: number;
}

export const PaginationControls = memo(function PaginationControls({ 
  onPrevious, 
  onNext, 
  canGoPrevious = true,
  canGoNext = true,
  currentPage = 1,
  totalPages = 1
}: PaginationControlsProps) {
  return (
    <div className={paginationStyles.navContainer}>
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={paginationStyles.navButton}
        aria-label={BOM_CONSTANTS.BUTTONS.PREVIOUS_PAGE}
      >
        <ChevronLeft className={paginationStyles.navIcon} />
      </button>
      
      <div className="flex items-center px-4 py-2 text-sm text-gray-600 bg-gray-50 rounded-md">
        {BOM_CONSTANTS.PAGINATION.PAGE_INFO(currentPage, totalPages)}
      </div>
      
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={paginationStyles.navButton}
        aria-label={BOM_CONSTANTS.BUTTONS.NEXT_PAGE}
      >
        <ChevronRight className={paginationStyles.navIcon} />
      </button>
    </div>
  );
});
