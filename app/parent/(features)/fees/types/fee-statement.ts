import type { FeeReceipt } from '@/parent/(features)/fees/types/fees';

export interface FeeStatementProps {
  receipt: FeeReceipt;
}

export interface TableHeader {
  id: string;
  label: string;
}

export const TABLE_HEADERS: TableHeader[] = [
  { id: 'feeDescription', label: 'Fee Description' },
  { id: 'amount', label: 'Amount' },
  { id: 'paidDate', label: 'Paid Date' },
  { id: 'paymentMethod', label: 'Payment Method' },
];

export interface StudentInfo {
  label: string;
  value: string;
}
