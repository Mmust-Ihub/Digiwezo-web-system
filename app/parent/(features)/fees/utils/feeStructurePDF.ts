import type { JsPDFWithPlugin } from '@parent/(features)/fees/types/fee-hooks'
import type { FormattedFeeStructureItem } from '@parent/(features)/fees/types/fee-hooks'
import { PAYMENT_TERMS, BANK_ACCOUNTS } from '@parent/(features)/fees/data/fee-structure'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export const generateFeeStructurePDF = (
  displayedData: FormattedFeeStructureItem[],
  selectedGrade: string
) => {
  const doc = new jsPDF()
  
  doc.setFontSize(16)
  doc.text('Secondary School Fee Structure', doc.internal.pageSize.width / 2, 20, { align: 'center' })
  
  doc.setFontSize(12)
  doc.text(`Grade: ${selectedGrade || 'All Grades'}`, 20, 30)

  const headers = [['Grade', 'Tuition', 'Lunch', 'Swimming', 'Transport', 'Boarding']]
  const rows = displayedData.map(item => [
    item.grade.toString(),
    item.mandatory.tuition,
    item.optional.lunch,
    item.optional.swimming,
    item.optional.transport,
    item.optional.boarding
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
