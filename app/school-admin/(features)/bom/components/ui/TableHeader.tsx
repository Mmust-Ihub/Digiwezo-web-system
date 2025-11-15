import { memo } from "react";
import { BOM_CONSTANTS } from "@school-admin/(features)/bom/constants/bomConstants";
import { tableStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

const tableHeaders = [
  BOM_CONSTANTS.TABLE_HEADERS.INDEX,
  BOM_CONSTANTS.TABLE_HEADERS.NAME,
  BOM_CONSTANTS.TABLE_HEADERS.USERNAME,
  BOM_CONSTANTS.TABLE_HEADERS.PHONE,
  BOM_CONSTANTS.TABLE_HEADERS.ACTION
];

export const TableHeader = memo(function TableHeader() {
  return (
    <thead className={tableStyles.header}>
      <tr className={tableStyles.headerRow}>
        {tableHeaders.map((header) => (
          <th key={header} className={tableStyles.headerCell}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
});