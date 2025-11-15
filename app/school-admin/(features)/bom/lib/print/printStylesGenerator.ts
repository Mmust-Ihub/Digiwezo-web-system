import { PRINT_STYLES } from "@school-admin/(features)/bom/lib/pdf/pdfConstants";

interface TableStyles {
  borderCollapse: string;
  width: string;
  marginTop: string;
}

interface CellStyles {
  border: string;
  padding: string;
  textAlign: string;
}

interface HeaderStyles {
  backgroundColor: string;
  fontWeight: string;
}

interface EvenRowStyles {
  backgroundColor: string;
}

interface StatsBoxStyles {
  backgroundColor: string;
  padding: string;
  borderRadius: string;
  marginBottom: string;
}

export const generatePrintStyles = (): string => {
  const { fontFamily, lineHeight, table, cell, header, evenRow, statsBox } = PRINT_STYLES;
  
  return `
    <style>
      ${generateMediaQueries(fontFamily)}
      ${generateBodyStyles(fontFamily, lineHeight)}
      ${generateTableStyles(table, cell, header, evenRow)}
      ${generateLayoutStyles(statsBox)}
    </style>
  `;
};

export const generateMediaQueries = (fontFamily: string): string => {
  return `
    @media print {
      body { margin: 0; font-family: ${fontFamily}; }
      .no-print { display: none !important; }
    }
  `;
};

export const generateBodyStyles = (fontFamily: string, lineHeight: number): string => {
  return `
    body { 
      margin: 20px; 
      font-family: ${fontFamily}; 
      line-height: ${lineHeight};
    }
  `;
};

export const generateTableStyles = (table: TableStyles, cell: CellStyles, header: HeaderStyles, evenRow: EvenRowStyles): string => {
  return `
    table { 
      width: ${table.width}; 
      border-collapse: ${table.borderCollapse}; 
      margin-top: ${table.marginTop}; 
    }
    th, td { 
      border: ${cell.border}; 
      padding: ${cell.padding}; 
      text-align: ${cell.textAlign}; 
    }
    th { 
      background-color: ${header.backgroundColor}; 
      font-weight: ${header.fontWeight}; 
    }
    tr:nth-child(even) {
      background-color: ${evenRow.backgroundColor};
    }
  `;
};

export const generateLayoutStyles = (statsBox: StatsBoxStyles): string => {
  return `
    .header { 
      text-align: center; 
      margin-bottom: 30px; 
      border-bottom: 2px solid #333;
      padding-bottom: 15px;
    }
    .stats { 
      margin-bottom: ${statsBox.marginBottom}; 
      background-color: ${statsBox.backgroundColor};
      padding: ${statsBox.padding};
      border-radius: ${statsBox.borderRadius};
    }
    .stats h3 {
      margin-top: 0;
      color: #333;
    }
    .stats div { 
      display: inline-block; 
      margin-right: 30px; 
      font-size: 14px;
    }
    .print-date {
      color: #666;
      font-size: 12px;
    }
  `;
};

