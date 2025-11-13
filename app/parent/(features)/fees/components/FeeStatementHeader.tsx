'use client'

import { cn } from '@/lib/utils'
import { HeaderInfo } from '@parent/(features)/fees/types/fee-hooks'
import { feeStatementStyles as styles } from '@parent/(features)/fees/styles/fee-statement.styles'

type FeeStatementHeaderProps = {
  headerInfo: HeaderInfo[]
}

export default function FeeStatementHeader({ headerInfo }: FeeStatementHeaderProps) {
  return (
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
  )
}
