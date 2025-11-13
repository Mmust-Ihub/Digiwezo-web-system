import type { StudentInfo } from '@parent/(features)/fees/types/fee-statement'
import type { 
  ReceiptInfo, 
  HeaderInfo, 
  TableRowData 
} from '@parent/(features)/fees/types/fee-hooks'
import type { FeeReceipt } from '@parent/(features)/fees/types/fees'

export const getHeaderInfo = (receipt: FeeReceipt): HeaderInfo[] => [
  { label: 'Date', value: receipt.date },
  { label: 'Receipt Number', value: receipt.receiptNumber }
]

export const getStudentInfo = (receipt: FeeReceipt): StudentInfo[] => [
  { label: 'Student Name', value: receipt.studentName },
  { label: 'Class', value: receipt.class },
  { label: 'Academic Year', value: receipt.academicYear },
]

export const getReceiptInfo = (receipt: FeeReceipt): ReceiptInfo[] => [
  { label: 'Total Amount Paid', value: `$${receipt.totalAmount.toFixed(2)}`, isBold: true },
  { label: 'Payment Status', value: receipt.paymentStatus }
]

export const getTableData = (receipt: FeeReceipt): TableRowData[] =>
  receipt.feeItems.map(item => ({
    feeDescription: item.feeDescription,
    amount: `$${item.amount.toFixed(2)}`,
    paidDate: item.paidDate,
    paymentMethod: item.paymentMethod
  }))
