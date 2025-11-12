'use client'

import { cn } from '@/lib/utils'
import { ReceiptInfo } from '@parent/(features)/fees/types/fee-hooks'
import { feeStatementStyles as styles } from '@parent/(features)/fees/styles/fee-statement.styles'

type FeeStatementSummaryProps = {
  receiptInfo: ReceiptInfo[]
}

export default function FeeStatementSummary({ receiptInfo }: FeeStatementSummaryProps) {
  return (
  <div className={styles.summary.container}>
    {receiptInfo.map(({ label, value, isBold }) => (
      <p key={label} className={styles.text.base}>
        <span className={styles.text.bold}>{label}:</span>
        <span className={cn('ml-1', { 'font-semibold': isBold })}>{value}</span>
      </p>
    ))}
  </div>
  )
}
