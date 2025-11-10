import { useState } from 'react'
import { FEE_STRUCTURE_DATA, BANK_ACCOUNTS, PAYMENT_TERMS } from '@parent/(features)/fees/data/fee-structure'
import type { FeeStructureItem } from '@parent/(features)/fees/types/fees-structure'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import type {
  JsPDFWithPlugin,
  FormattedFeeStructureItem
} from '@parent/(features)/fees/types/fee-hooks'

export const useFeeStructure = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>('')
  const [displayedData, setDisplayedData] = useState<FormattedFeeStructureItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const formatFeeItem = (item: FeeStructureItem): FormattedFeeStructureItem => ({
    ...item,
    mandatory: {
      tuition: `${item.mandatory.tuition.toLocaleString()}.00`
    },
    optional: {
      lunch: `${item.optional.lunch.toLocaleString()}.00`,
      swimming: typeof item.optional.swimming === 'number' 
        ? `${item.optional.swimming.toLocaleString()}.00` 
        : item.optional.swimming,
      transport: item.optional.transport.toString(),
      boarding: item.optional.boarding.toString()
    }
  })

  const handleGradeChange = (grade: string) => {
    setSelectedGrade(grade)
    setDisplayedData([]) // Clear the table when grade changes
  }

  const generateStructure = () => {
    if (!selectedGrade) return

    setIsLoading(true)
    setTimeout(() => {
      const filteredData = selectedGrade === 'all' 
        ? FEE_STRUCTURE_DATA 
        : FEE_STRUCTURE_DATA.filter(item => item.grade === selectedGrade)
      setDisplayedData(filteredData.map(formatFeeItem))
      setIsLoading(false)
    }, 500)
  }

  const downloadStructure = () => {
    const doc = new jsPDF()
    
    doc.setFontSize(16)
    doc.text('Secondary School Fee Structure', doc.internal.pageSize.width / 2, 20, { align: 'center' })
    
    doc.setFontSize(12)
    doc.text(`Grade: ${selectedGrade || 'All Grades'}`, 20, 30)

    const headers = [['Grade', 'Tuition', 'Lunch', 'Swimming', 'Transport', 'Boarding']]
    const rows = displayedData.map(item => [
      item.grade.toString(),
      `${item.mandatory.tuition.toLocaleString()}.00`,
      `${item.optional.lunch.toLocaleString()}.00`,
      typeof item.optional.swimming === 'number' ? `${(item.optional.swimming as number).toLocaleString()}.00` : String(item.optional.swimming),
      String(item.optional.transport),
      String(item.optional.boarding)
    ])

    autoTable(doc, {
      head: headers,
      body: rows,
      startY: 40,
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

    let yPos = (doc as JsPDFWithPlugin).lastAutoTable.finalY + 20
    doc.setFontSize(12)
    doc.text('TERMS OF PAYMENT:', 20, yPos)
    
    yPos += 10
    doc.setFontSize(10)
    PAYMENT_TERMS.forEach(term => {
      if (yPos > doc.internal.pageSize.height - 20) {
        doc.addPage()
        yPos = 20
      }
      doc.text(term, 20, yPos)
      yPos += 6
    })

    yPos += 5
    BANK_ACCOUNTS.forEach(account => {
      if (yPos > doc.internal.pageSize.height - 20) {
        doc.addPage()
        yPos = 20
      }
      const accountText = `${account.bank}${account.branch ? ' ' + account.branch : ''} - A/C NO. ${account.accountNumber}`
      doc.text(accountText, 30, yPos)
      yPos += 6
    })

    doc.save(`fee_structure_${selectedGrade || 'all'}.pdf`)
  }

  return {
    selectedGrade,
    displayedData,
    isLoading,
    handleGradeChange,
    generateStructure,
    downloadStructure
  }
}
