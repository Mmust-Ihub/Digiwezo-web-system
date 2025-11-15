import { Suspense } from "react";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "@school-admin/(features)/bom/components/ui/ErrorBoundary";

const TableActions = dynamic(
  () => import("@school-admin/(features)/bom/components/ui/TableActions").then(mod => ({ default: mod.TableActions })),
  {
    loading: () => <div className="animate-pulse bg-gray-200 h-16 rounded-lg"></div>,
    ssr: false
  }
);

interface TableActionsSectionProps {
  onPrint: () => void;
  onDownload: () => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isDownloading: boolean;
  isPrinting: boolean;
  currentPage?: number;
  totalPages?: number;
}

export function TableActionsSection({ 
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
}: TableActionsSectionProps) {
  return (
    <ErrorBoundary fallback={<div className="text-center py-4 text-gray-500">Table actions unavailable</div>}>
      <Suspense fallback={<div className="animate-pulse bg-gray-200 h-16 rounded-lg"></div>}>
        <TableActions 
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
      </Suspense>
    </ErrorBoundary>
  );
}