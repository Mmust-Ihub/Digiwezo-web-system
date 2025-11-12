import { BomMember, BomStats } from "@school-admin/(features)/bom/types/bomTypes";
import { DATE_FORMATS } from "@school-admin/(features)/bom/lib/pdf/pdfConstants";

export const generateHeader = (): string => {
  return `
    <div class="header">
      <h1>Board of Management</h1>
      <p class="print-date">Generated on: ${DATE_FORMATS.dateTime()}</p>
    </div>
  `;
};

export const generateStatsSection = (stats: BomStats): string => {
  return `
    <div class="stats">
      <h3>Statistics Summary</h3>
      <div>Total Members: <strong>${stats.totalMembers}</strong></div>
      <div>Male Members: <strong>${stats.maleMembers}</strong></div>
      <div>Female Members: <strong>${stats.femaleMembers}</strong></div>
    </div>
  `;
};

export const generateMembersTable = (tableRows: string): string => {
  return `
    <h3>Members List</h3>
    <table>
      <thead>
        <tr>
          <th style="width: 10%;">#</th>
          <th style="width: 25%;">Name</th>
          <th style="width: 40%;">Username</th>
          <th style="width: 25%;">Phone</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
};

export const generateTableRows = (members: BomMember[]): string => {
  return members.map((member, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${member.name}</td>
      <td>${member.username}</td>
      <td>${member.phone}</td>
    </tr>
  `).join('');
};

export const generatePrintScript = (): string => {
  return `
    <script>
      window.onload = function() {
        window.print();
      };
      window.onafterprint = function() {
        window.close();
      };
    </script>
  `;
};