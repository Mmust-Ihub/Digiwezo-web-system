'use client'

import { FC } from 'react'
import { Button } from '@/components/ui/button'
import { useFeesStatement } from '@/parent/(features)/fees/hooks/useFeesStatement'
import { 
  FeeStatementProps, 
  TABLE_HEADERS
} from '@/parent/(features)/fees/types/fee-statement'
import { cn } from '@/lib/utils'

// Common CSS classes
const commonClasses = {
  container: 'border border-custom-grey/20 rounded-lg',
  text: {
    base: 'text-sm text-foreground',
    bold: 'font-semibold',
  },
  cell: 'py-2 px-4 text-sm text-foreground border-r border-custom-grey/20',
  tableHeader: 'py-2 px-4 text-left text-sm font-bold text-foreground border-b border-r border-custom-grey/20 bg-gray-50 last:border-r-0',
}

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
    <div className="flex items-end gap-6">
      <div className={cn(commonClasses.container, 'relative p-4 sm:p-6 max-w-[742px]')}>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground text-center mb-3">Secondary School Fee Receipt</h2>
          <div className="flex flex-wrap gap-x-8 text-sm justify-end">
            {headerInfo.map(({ label, value }) => (
              <div key={label} className="flex gap-1">
                <span className={cn(commonClasses.text.base, commonClasses.text.bold)}>{label}:</span>
                <span className={commonClasses.text.base}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {studentInfo.map(({ label, value }) => (
            <div key={label} className={commonClasses.text.base}>
              <span className={commonClasses.text.bold}>{label}:</span>
              <span className="ml-1">{value}</span>
            </div>
          ))}
        </div>

        <div className={cn(commonClasses.container, 'overflow-x-auto')}>
          <table className="w-full border-collapse min-w-[680px]">
            <thead>
              <tr>
                {TABLE_HEADERS.map((header) => (
                  <th key={header.id} className={commonClasses.tableHeader}>
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className={index !== tableData.length - 1 ? "border-b border-custom-grey/20" : ""}>
                  {[
                    row.feeDescription,
                    row.amount,
                    row.paidDate,
                    row.paymentMethod
                  ].map((value, cellIndex) => (
                    <td key={cellIndex} className={cn(commonClasses.cell, {
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

        <div className="mt-4 space-y-1">
          {receiptInfo.map(({ label, value, isBold }) => (
            <p key={label} className={commonClasses.text.base}>
              <span className="font-bold">{label}:</span>
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