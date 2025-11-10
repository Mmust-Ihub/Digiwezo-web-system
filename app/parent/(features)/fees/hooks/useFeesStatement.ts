import { useState } from 'react'
import type { FeeReceipt } from '@parent/(features)/fees/types/fees'
import type { StudentInfo } from '@parent/(features)/fees/types/fee-statement'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

type JsPDFWithPlugin = jsPDF & {
  lastAutoTable: {
    finalY: number;
  };
}

interface ReceiptInfo {
  label: string;
  value: string;
  isBold?: boolean;
}

interface HeaderInfo {
  label: string;
  value: string;
}

interface TableRowData {
  feeDescription: string;
  amount: string;
  paidDate: string;
  paymentMethod: string;
}

export const useFeesStatement = (receipt: FeeReceipt) => {
  const [isDownloading, setIsDownloading] = useState(false)

  const getHeaderInfo = (): HeaderInfo[] => [
    { label: 'Date', value: receipt.date },
    { label: 'Receipt Number', value: receipt.receiptNumber }
  ]

  const downloadStatement = () => {
    setIsDownloading(true)

    try {
      // Initialize PDF document
      const doc = new jsPDF()
      
      // Add title
      doc.setFontSize(16)
      doc.text('Secondary School Fee Receipt', doc.internal.pageSize.width / 2, 20, { align: 'center' })
      
      // Add receipt information
      doc.setFontSize(10)
      let yPos = 40
      const receiptInfo = [
        { label: 'Date', value: receipt.date },
        { label: 'Receipt Number', value: receipt.receiptNumber }
      ]
      
      doc.text(receiptInfo.map(item => `${item.label}: ${item.value}`).join('    '), 
        doc.internal.pageSize.width / 2, yPos, { align: 'center' })
      
      // Add student information
      yPos += 20
      const studentInfo = [
        { label: 'Student Name', value: receipt.studentName },
        { label: 'Class', value: receipt.class },
        { label: 'Academic Year', value: receipt.academicYear }
      ]
      
      studentInfo.forEach(item => {
        doc.text(`${item.label}: ${item.value}`, 20, yPos)
        yPos += 6
      })
      
      // Add fee items table
      yPos += 10
      const headers = [['Description', 'Amount', 'Paid Date', 'Payment Method']]
      const rows = receipt.feeItems.map(item => [
        item.feeDescription,
        `$${item.amount.toFixed(2)}`,
        item.paidDate,
        item.paymentMethod
      ])
      
      // Add table to PDF using autoTable
      autoTable(doc, {
        head: headers,
        body: rows,
        startY: yPos,
        theme: 'grid',
        styles: {
          fontSize: 10,
          cellPadding: 3,
        },
        headStyles: {
          fillColor: [128, 128, 128],
          textColor: 255,
          fontStyle: 'bold',
        },
      })
      
      // Add total and status
      yPos = (doc as JsPDFWithPlugin).lastAutoTable.finalY + 20
      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.text(`Total Amount Paid: $${receipt.totalAmount.toFixed(2)}`, 20, yPos)
      yPos += 8
      doc.text(`Payment Status: ${receipt.paymentStatus}`, 20, yPos)
      
      // Save PDF
      doc.save(`fee_receipt_${receipt.receiptNumber}.pdf`)
    } catch (error) {
      console.error('Error generating PDF:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  const getStudentInfo = (): StudentInfo[] => [
    { label: 'Student Name', value: receipt.studentName },
    { label: 'Class', value: receipt.class },
    { label: 'Academic Year', value: receipt.academicYear },
  ]

  const getReceiptInfo = (): ReceiptInfo[] => [
    { label: 'Total Amount Paid', value: `$${receipt.totalAmount.toFixed(2)}`, isBold: true },
    { label: 'Payment Status', value: receipt.paymentStatus }
  ]

  const getTableData = (): TableRowData[] =>
    receipt.feeItems.map(item => ({
      feeDescription: item.feeDescription,
      amount: `$${item.amount.toFixed(2)}`,
      paidDate: item.paidDate,
      paymentMethod: item.paymentMethod
    }))

  return {
    isDownloading,
    downloadStatement,
    getStudentInfo,
    getReceiptInfo,
    getHeaderInfo,
    getTableData
  }
}