export interface TableHeader {
  id: string;
  label: string;
  colSpan?: number;
  isSubHeader?: boolean;
}

export const TABLE_HEADERS: TableHeader[] = [
  { id: 'empty', label: '', isSubHeader: true },
  { id: 'mandatory', label: 'MANDATORY', colSpan: 1 },
  { id: 'optional', label: 'OPTIONAL', colSpan: 4 },
];

export const SUB_HEADERS: TableHeader[] = [
  { id: 'empty', label: '' },
  { id: 'tuition', label: 'TUITION' },
  { id: 'lunch', label: 'LUNCH' },
  { id: 'swimming', label: 'SWIMMING' },
  { id: 'transport', label: 'TRANSPORT' },
  { id: 'boarding', label: 'BOARDING' },
];

export interface FeeStructureGrade {
  grade: string;
  mandatory: {
    tuition: number;
  };
  optional: {
    lunch: number;
    swimming: number | string;
    transport: string;
    boarding: string;
  };
}

export interface BankAccount {
  bank: string;
  branch?: string;
  accountNumber: string;
}