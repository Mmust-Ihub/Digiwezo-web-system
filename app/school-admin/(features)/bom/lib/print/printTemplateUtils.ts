import { BomMember, BomStats } from "@school-admin/(features)/bom/types/bomTypes";
import { 
  generateHeader, 
  generateStatsSection, 
  generateMembersTable, 
  generateTableRows, 
  generatePrintScript 
} from "@school-admin/(features)/bom/lib/print/printHTMLGenerators";
import { generatePrintStyles } from "@school-admin/(features)/bom/lib/print/printStylesGenerator";

export const generatePrintHTML = (members: BomMember[], stats: BomStats): string => {
  const membersTableRows = generateTableRows(members);
  const styles = generatePrintStyles();
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Board of Management - Print</title>
      ${styles}
    </head>
    <body>
      ${generateHeader()}
      ${generateStatsSection(stats)}
      ${generateMembersTable(membersTableRows)}
      ${generatePrintScript()}
    </body>
    </html>
  `;
};