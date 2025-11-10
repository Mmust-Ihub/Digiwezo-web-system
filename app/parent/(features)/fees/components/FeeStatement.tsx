'use client'

import { Button } from '@/components/ui/button'
import { useFeesStatement } from '@parent/(features)/fees/hooks/useFeesStatement'
import { FeeStatementProps } from '@parent/(features)/fees/types/fee-statement'
import { feeStatementStyles as styles } from '@parent/(features)/fees/components/styles/fee-statement.styles'
import FeeStatementHeader from '@parent/(features)/fees/components/FeeStatementHeader'
import FeeStatementTable from '@parent/(features)/fees/components/FeeStatementTable'
import FeeStatementSummary from '@parent/(features)/fees/components/FeeStatementSummary'

export default function FeeStatement({ receipt }: FeeStatementProps) {
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
        <FeeStatementHeader headerInfo={headerInfo} />

        <div className={styles.content.studentInfo}>
          {studentInfo.map(({ label, value }) => (
            <div key={label} className={styles.text.base}>
              <span className={styles.text.bold}>{label}:</span>
              <span className="ml-1">{value}</span>
            </div>
          ))}
        </div>

        <FeeStatementTable tableData={tableData} />
        <FeeStatementSummary receiptInfo={receiptInfo} />
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
