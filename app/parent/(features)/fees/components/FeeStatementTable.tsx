'use client'

import { cn } from '@/lib/utils'
import { TableRowData } from '@parent/(features)/fees/types/fee-hooks'
import { TABLE_HEADERS } from '@parent/(features)/fees/types/fee-statement'
import { feeStatementStyles as styles } from '@parent/(features)/fees/styles/fee-statement.styles'

type FeeStatementTableProps = {
  tableData: TableRowData[]
}

export default function FeeStatementTable({ tableData }: FeeStatementTableProps) {
  return (
  <div className={styles.table.wrapper}>
    <table className={styles.table.base}>
      <thead>
        <tr>
          {TABLE_HEADERS.map((header) => (
            <th key={header.id} className={styles.table.header}>
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index} className={index !== tableData.length - 1 ? styles.table.row.border : ""}>
            {[
              row.feeDescription,
              row.amount,
              row.paidDate,
              row.paymentMethod
            ].map((value, cellIndex) => (
              <td key={cellIndex} className={cn(styles.table.cell, {
                'font-semibold': cellIndex === 1,
                'border-r-0': cellIndex === 3
              })}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
