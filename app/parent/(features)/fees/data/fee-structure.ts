import { BankAccount, FeeStructureItem } from "@parent/(features)/fees/types/fees-structure";

export const fee_structure_data: FeeStructureItem[] = [
  {
    grade: "GRADE 1",
    mandatory: {
      tuition: 49300.00
    },
    optional: {
      lunch: 7000.00,
      swimming: 2000.00,
      transport: "SEE RATES NEXT PAGE",
      boarding: "N/A"
    }
  },
  {
    grade: "GRADE 2",
    mandatory: {
      tuition: 49300.00
    },
    optional: {
      lunch: 7000.00,
      swimming: 2000.00,
      transport: "SEE RATES NEXT PAGE",
      boarding: "N/A"
    }
  },
  {
    grade: "GRADE 3",
    mandatory: {
      tuition: 49300.00
    },
    optional: {
      lunch: 7000.00,
      swimming: 2000.00,
      transport: "SEE RATES NEXT PAGE",
      boarding: "N/A"
    }
  },
  {
    grade: "GRADE 4",
    mandatory: {
      tuition: 51800.00
    },
    optional: {
      lunch: 7000.00,
      swimming: 2000.00,
      transport: "SEE RATES NEXT PAGE",
      boarding: 26000.00
    }
  },
  {
    grade: "STANDARD 5",
    mandatory: {
      tuition: 51800.00
    },
    optional: {
      lunch: 7000.00,
      swimming: 2000.00,
      transport: "SEE RATES NEXT PAGE",
      boarding: 26000.00
    }
  },
  {
    grade: "STANDARD 6",
    mandatory: {
      tuition: 53800.00
    },
    optional: {
      lunch: 7000.00,
      swimming: 2000.00,
      transport: "SEE RATES NEXT PAGE",
      boarding: 26000.00
    }
  },
  {
    grade: "STANDARD 7",
    mandatory: {
      tuition: 58000.00
    },
    optional: {
      lunch: 7000.00,
      swimming: 2000.00,
      transport: "SEE RATES NEXT PAGE",
      boarding: 26000.00
    }
  },
  {
    grade: "STANDARD 8",
    mandatory: {
      tuition: 67800.00
    },
    optional: {
      lunch: 7000.00,
      swimming: 2000.00,
      transport: "SEE RATES NEXT PAGE",
      boarding: "N/A"
    }
  }
];

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    bank: "NCBA, THE JUNCTION",
    accountNumber: "1000425512"
  },
  {
    bank: "BARCLAYS BANK HAILE SELASSIE BRANCH",
    accountNumber: "092 1229006"
  },
  {
    bank: "KENYA COMMERCIAL BANK, KAREN BRANCH",
    accountNumber: "1123071233"
  },
  {
    bank: "STANDARD CHARTERED BANK, KENYATTA AVENUE",
    accountNumber: "0102010546200"
  }
];

export const PAYMENT_TERMS = [
  "* FEES SHOULD BE PAID IN FULL ON OR BEFORE THE FIRST DAY OF TERM.",
  "* FEES IS PAYABLE BY PERSONAL/COMPANY/BANKERS CHEQUES, OR BY CASH DEPOSIT INTO EITHER OF THE FOLLOWING BANK ACCOUNTS:",
  "* CHEQUES SHOULD BE PAYABLE TO ST. HANNAH'S PREPARATORY SCHOOL",
  "* BANK SLIPS MUST BE PRESENTED FOR RECEIPTING",
  "* CHARGES DEBITED TO THE SCHOOL ACCOUNT ON DISHONOURED CHEQUES WILL BE PASSED ONTO THE DRAWER"
];
