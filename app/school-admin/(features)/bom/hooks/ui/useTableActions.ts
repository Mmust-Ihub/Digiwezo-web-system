import { useCallback, useState } from "react";
import { BomMember, BomStats } from "@school-admin/(features)/bom/types/bomTypes";

interface UseTableActionsProps {
  allMembers: BomMember[];
  stats: BomStats;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export const useTableActions = ({ 
  allMembers, 
  stats, 
  onNext, 
  onPrevious, 
  canGoNext, 
  canGoPrevious 
}: UseTableActionsProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = useCallback(async () => {
    setIsPrinting(true);
    try {
      const { pdf } = await import("@school-admin/(features)/bom/lib");
      pdf.handlePrint(allMembers, stats);
    } catch (error) {
      console.error("Print failed:", error);
    } finally {
      setTimeout(() => setIsPrinting(false), 1000);
    }
  }, [allMembers, stats]);

  const handleDownload = useCallback(async () => {
    setIsDownloading(true);
    try {
      const { pdf } = await import("@school-admin/(features)/bom/lib");
      await pdf.generatePDF(allMembers, stats);
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsDownloading(false);
    }
  }, [allMembers, stats]);

  const handlePrevious = useCallback(() => {
    onPrevious();
  }, [onPrevious]);

  const handleNext = useCallback(() => {
    onNext();
  }, [onNext]);

  return {
    handlePrint,
    handleDownload,
    handlePrevious,
    handleNext,
    canGoNext,
    canGoPrevious,
    isDownloading,
    isPrinting
  };
};

