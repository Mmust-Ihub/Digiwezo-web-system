import { useState } from 'react'
import type { FeeReceipt } from '@parent/(features)/fees/types/fees'
import { generateFeeStatementPDF } from '@parent/(features)/fees/utils/feesStatementPDF'
import {
  getHeaderInfo,
  getStudentInfo,
  getReceiptInfo,
  getTableData
} from '@parent/(features)/fees/utils/feesStatementFormatters'

export const useFeesStatement = (receipt: FeeReceipt) => {
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadStatement = () => {
    setIsDownloading(true)
    try {
      generateFeeStatementPDF(receipt)
    } catch (error) {
      console.error('Error generating PDF:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return {
    isDownloading,
    downloadStatement,
    getStudentInfo: () => getStudentInfo(receipt),
    getReceiptInfo: () => getReceiptInfo(receipt),
    getHeaderInfo: () => getHeaderInfo(receipt),
    getTableData: () => getTableData(receipt)
  }
}
