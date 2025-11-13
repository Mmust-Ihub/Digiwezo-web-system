import { jsPDF } from 'jspdf';
import { BomMember } from "@school-admin/(features)/bom/types/bomTypes";
import { PDF_CONFIG } from "@school-admin/(features)/bom/lib/pdf/pdfConstants";

export const addTableRows = (doc: jsPDF, members: BomMember[], startY: number) => {
  const { fonts, layout, table } = PDF_CONFIG;
  const pageHeight = doc.internal.pageSize.getHeight();
  let currentY = startY;
  
  doc.setFontSize(fonts.table.size);
  doc.setFont('helvetica', fonts.table.style);
  
  members.forEach((member, index) => {
    if (currentY > pageHeight - layout.bottomMargin) {
      doc.addPage();
      currentY = layout.bottomMargin + 10;
    }
    
    const rowData = [
      (index + 1).toString(),
      member.name,
      member.username,
      member.phone
    ];
    
    addTableRow(doc, rowData, currentY);
    currentY += layout.rowHeight;
  });
  
  return currentY;
};

export const addTableRow = (doc: jsPDF, rowData: string[], y: number) => {
  const { layout, table } = PDF_CONFIG;
  
  rowData.forEach((cellData, colIndex) => {
    const x = layout.margin + table.columnWidths.slice(0, colIndex).reduce((sum, width) => sum + width, 0);
    const truncatedData = truncateText(cellData, table.columnWidths[colIndex]);
    doc.text(truncatedData, x, y);
  });
};

export const truncateText = (text: string, maxWidth: number): string => {
  const charWidth = 2.5;
  const maxChars = Math.floor(maxWidth / charWidth);
  
  if (text.length <= maxChars) {
    return text;
  }
  
  return text.substring(0, maxChars - 3) + '...';
};

export const calculateTableDimensions = (memberCount: number) => {
  const { layout } = PDF_CONFIG;
  const totalTableHeight = memberCount * layout.rowHeight;
  const pagesNeeded = Math.ceil(totalTableHeight / (297 - layout.tableStartY - layout.bottomMargin));
  
  return {
    totalHeight: totalTableHeight,
    pagesNeeded,
    rowsPerPage: Math.floor((297 - layout.tableStartY - layout.bottomMargin) / layout.rowHeight)
  };
};

