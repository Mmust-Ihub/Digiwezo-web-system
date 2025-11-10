'use client'

import { FC } from 'react'

import { Button } from '@/components/ui/button'

import { useFeesStatement } from '@/parent/(features)/fees/hooks/useFeesStatement'

import { 
  FeeStatementProps, 
  TABLE_HEADERS
} from '@/parent/(features)/fees/types/fee-statement'

import { feeStatementStyles as styles } from '@/parent/(features)/fees/components/styles/fee-statement.styles'

import { cn } from '@/lib/utils'

export const FeeStatement: FC<FeeStatementProps> = ({ receipt }) => {
  const { 
    isDownloading, 
    downloadStatement, 
    getStudentInfo, 
    getReceiptInfo,
    getHeaderInfo,
    getTableData
  } = useFeesStatement(receipt)

  const studentInfo = getStudentInfo()
  const receiptInfo = getReceiptInfo()
  const headerInfo = getHeaderInfo()
  const tableData = getTableData()

  return (
    <div className={styles.container}>
      <div className={styles.content.base}>
        <div className={styles.content.header.container}>
          <h2 className={styles.content.header.title}>Secondary School Fee Receipt</h2>
          <div className={styles.content.header.infoContainer}>
            {headerInfo.map(({ label, value }) => (
              <div key={label} className="flex gap-1">
                <span className={cn(styles.text.base, styles.text.bold)}>{label}:</span>
                <span className={styles.text.base}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.content.studentInfo}>
          {studentInfo.map(({ label, value }) => (
            <div key={label} className={styles.text.base}>
              <span className={styles.text.bold}>{label}:</span>
              <span className="ml-1">{value}</span>
            </div>
          ))}
        </div>

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

        <div className={styles.summary.container}>
          {receiptInfo.map(({ label, value, isBold }) => (
            <p key={label} className={styles.text.base}>
              <span className={styles.text.bold}>{label}:</span>
              <span className={cn('ml-1', { 'font-semibold': isBold })}>{value}</span>
            </p>
          ))}
        </div>
      </div>

      <Button 
        onClick={downloadStatement}
        disabled={isDownloading}
        variant="secondary"
        size="lg"
      >
        {isDownloading ? 'Downloading...' : 'Download'}
      </Button>
    </div>
  )
}
