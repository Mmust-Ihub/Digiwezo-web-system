import { jsPDF } from 'jspdf'

export type JsPDFWithPlugin = jsPDF & {
  lastAutoTable: {
    finalY: number;
  };
}

export interface FormattedFeeStructureItem {
  grade: string;
  mandatory: {
    tuition: string;
  };
  optional: {
    lunch: string;
    swimming: string;
    transport: string;
    boarding: string;
  };
}

export interface ReceiptInfo {
  label: string;
  value: string;
  isBold?: boolean;
}

export interface HeaderInfo {
  label: string;
  value: string;
}

export interface TableRowData {
  feeDescription: string;
  amount: string;
  paidDate: string;
  paymentMethod: string;
}