import { jsPDF } from 'jspdf';
import { BomStats } from "@school-admin/(features)/bom/types/bomTypes";
import { PDF_CONFIG } from "@school-admin/(features)/bom/lib/pdf/pdfConstants";
import { date } from "@school-admin/(features)/bom/utils";

export const addPDFHeader = (doc: jsPDF) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  const { fonts, layout } = PDF_CONFIG;
  
  doc.setFontSize(fonts.title.size);
  doc.setFont('helvetica', fonts.title.style);
  doc.text('Board of Management', pageWidth / 2, layout.titleY, { align: 'center' });
  
  doc.setFontSize(fonts.subtitle.size);
  doc.setFont('helvetica', fonts.subtitle.style);
  doc.text(`Generated on: ${date.DATE_FORMATS.date()}`, pageWidth / 2, layout.subtitleY, { align: 'center' });
};

export const addPDFStats = (doc: jsPDF, stats: BomStats) => {
  const { fonts, layout } = PDF_CONFIG;
  let currentY = layout.statsStartY;
  
  doc.setFontSize(fonts.sectionHeader.size);
  doc.setFont('helvetica', fonts.sectionHeader.style);
  doc.text('Statistics', layout.margin, currentY);
  
  currentY += 15;
  doc.setFontSize(fonts.body.size);
  doc.setFont('helvetica', fonts.body.style);
  
  const statsData = [
    `Total Members: ${stats.totalMembers}`,
    `Male Members: ${stats.maleMembers}`,
    `Female Members: ${stats.femaleMembers}`
  ];
  
  statsData.forEach((statText) => {
    doc.text(statText, layout.margin + 5, currentY);
    currentY += layout.statsLineHeight;
  });
  
  return currentY;
};

export const addTableHeader = (doc: jsPDF, startY: number) => {
  const { fonts, layout, table } = PDF_CONFIG;
  const pageWidth = doc.internal.pageSize.getWidth();
  let currentY = startY + 20;
  
  doc.setFontSize(fonts.sectionHeader.size);
  doc.setFont('helvetica', fonts.sectionHeader.style);
  doc.text('Members List', layout.margin, currentY);
  
  currentY += 15;
  doc.setFontSize(fonts.tableHeader.size);
  doc.setFont('helvetica', fonts.tableHeader.style);
  
  table.headers.forEach((header, index) => {
    const x = layout.margin + table.columnWidths.slice(0, index).reduce((sum, width) => sum + width, 0);
    doc.text(header, x, currentY);
  });
  
  doc.line(layout.margin, currentY + layout.headerOffset, pageWidth - layout.margin, currentY + layout.headerOffset);
  
  return currentY + 10;
};

