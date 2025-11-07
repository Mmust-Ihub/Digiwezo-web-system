import { useState } from 'react'
import type { FeeReceipt } from '../types/fees'

export const useFeesStatement = (receipt: FeeReceipt) => {
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadStatement = () => {
    setIsDownloading(true)

    // Create statement content
    const content = [
      'Fee Receipt',
      `Date: ${receipt.date}`,
      `Receipt Number: ${receipt.receiptNumber}`,
      `Student Name: ${receipt.studentName}`,
      `Class: ${receipt.class}`,
      `Academic Year: ${receipt.academicYear}`,
      '',
      'Fee Details:',
      'Description,Amount,Paid Date,Payment Method',
      ...receipt.feeItems.map(item => 
        `${item.feeDescription},${item.amount},${item.paidDate},${item.paymentMethod}`
      ),
      '',
      `Total Amount Paid: ${receipt.totalAmount}`,
      `Payment Status: ${receipt.paymentStatus}`
    ].join('\\n')

    // Create and trigger download
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', `fee_receipt_${receipt.receiptNumber}.csv`)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    setIsDownloading(false)
  }

  return {
    isDownloading,
    downloadStatement
  }
}