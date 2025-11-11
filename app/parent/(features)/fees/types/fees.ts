export interface FeeItem {
  feeDescription: string
  amount: number
  paidDate: string
  paymentMethod: string
}

export interface FeeReceipt {
  date: string
  receiptNumber: string
  studentName: string
  class: string
  academicYear: string
  feeItems: FeeItem[]
  totalAmount: number
  paymentStatus: 'Paid in Full' | 'Partial Payment' | 'Pending'
}
