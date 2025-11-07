export interface FeeStructureItem {
  grade: string
  mandatory: {
    tuition: number
  }
  optional: {
    lunch: number
    swimming: number
    transport: string
    boarding: string | number
  }
}

export interface BankAccount {
  bank: string
  branch?: string
  accountNumber: string
}