import { useCallback, useState } from "react";
import { generatePDF, handlePrint as utilHandlePrint } from "@school-admin/(features)/bom/lib/pdf/pdfUtils";
import { BomMember, BomStats } from "@school-admin/(features)/bom/types/bomTypes";

export const useTableActions = (members: BomMember[], stats: BomStats) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = useCallback(async () => {
    setIsPrinting(true);
    try {
      utilHandlePrint(members, stats);
    } catch (error) {
      console.error("Print failed:", error);
    } finally {
      setTimeout(() => setIsPrinting(false), 1000);
    }
  }, [members, stats]);

  const handleDownload = useCallback(async () => {
    setIsDownloading(true);
    try {
      await generatePDF(members, stats);
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsDownloading(false);
    }
  }, [members, stats]);

  const handlePrevious = useCallback(() => {
    console.log("Navigate to previous page");
  }, []);

  const handleNext = useCallback(() => {
    console.log("Navigate to next page");
  }, []);

  return {
    handlePrint,
    handleDownload,
    handlePrevious,
    handleNext,
    isDownloading,
    isPrinting
  };
};