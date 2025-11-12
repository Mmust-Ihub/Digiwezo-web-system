import { BomMember, BomStats } from "@school-admin/(features)/bom/types/bomTypes";
import { addPDFHeader, addPDFStats, addTableHeader } from "@school-admin/(features)/bom/lib/pdf/pdfHeaderUtils";
import { addTableRows } from "@school-admin/(features)/bom/lib/pdf/pdfTableUtils";
import { generatePrintHTML } from "@school-admin/(features)/bom/lib/print/printTemplateUtils";

export const generatePDF = async (members: BomMember[], stats: BomStats) => {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF();
  
  addPDFHeader(doc);
  const statsEndY = addPDFStats(doc, stats);
  const tableStartY = addTableHeader(doc, statsEndY);
  addTableRows(doc, members, tableStartY);
  
  doc.save('BOM_Members.pdf');
};

export const handlePrint = (members: BomMember[], stats: BomStats) => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) return;
  
  const htmlContent = generatePrintHTML(members, stats);
  printWindow.document.write(htmlContent);
  printWindow.document.close();
};