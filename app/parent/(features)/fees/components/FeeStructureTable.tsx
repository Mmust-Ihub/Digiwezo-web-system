'use client'

import { FC } from 'react'
import { cn } from '@/lib/utils'
import { TABLE_HEADERS, SUB_HEADERS } from '@/parent/(features)/fees/types/fee-structure'
import { FormattedFeeStructureItem } from '@/parent/(features)/fees/types/fee-hooks'
import { feeStructureStyles as styles } from '@/parent/(features)/fees/components/styles/fee-structure.styles'

interface FeeStructureTableProps {
  data: FormattedFeeStructureItem[]
}

export const FeeStructureTable: FC<FeeStructureTableProps> = ({ data }) => {
  return (
    <div className={styles.table.container}>
      <table className={styles.table.base}>
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th 
                key={header.id}
                className={cn(styles.table.header, {
                  'text-center': header.id === 'optional',
                  'text-left': header.id !== 'optional'
                })}
                colSpan={header.colSpan}
              >
                {header.label}
              </th>
            ))}
          </tr>
          <tr>
            {SUB_HEADERS.map((header) => (
              <th 
                key={header.id}
                className={cn(styles.table.header, 'text-left')}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={styles.table.cell}>{item.grade}</td>
              <td className={styles.table.cell}>{item.mandatory.tuition}</td>
              <td className={styles.table.cell}>{item.optional.lunch}</td>
              <td className={styles.table.cell}>{item.optional.swimming}</td>
              <td className={styles.table.cell}>{item.optional.transport}</td>
              <td className={styles.table.cell}>{item.optional.boarding}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
