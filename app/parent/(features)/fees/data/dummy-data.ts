import { FeeReceipt } from '../types/fees'

export const DUMMY_FEE_RECEIPT: FeeReceipt = {
  date: 'November 5, 2050',
  receiptNumber: 'SSFR2050-1234',
  studentName: 'Malvina Jones',
  class: '10th Grade',
  academicYear: '2050-2051',
  feeItems: [
    {
      feeDescription: 'Tuition Fee',
      amount: 1500.00,
      paidDate: 'November 5, 2050',
      paymentMethod: 'Credit Card'
    },
    {
      feeDescription: 'Exam Fee',
      amount: 200.00,
      paidDate: 'November 5, 2050',
      paymentMethod: 'Credit Card'
    },
    {
      feeDescription: 'Sports Activity Fee',
      amount: 100.00,
      paidDate: 'November 5, 2050',
      paymentMethod: 'Credit Card'
    },
    {
      feeDescription: 'Lab Equipment Fee',
      amount: 150.00,
      paidDate: 'November 5, 2050',
      paymentMethod: 'Credit Card'
    }
  ],
  totalAmount: 1950.00,
  paymentStatus: 'Paid in Full'
}