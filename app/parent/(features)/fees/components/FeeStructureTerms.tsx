'use client'

import { PAYMENT_TERMS, BANK_ACCOUNTS } from '@parent/(features)/fees/data/fee-structure'
import { feeStructureStyles as styles } from '@parent/(features)/fees/components/styles/fee-structure.styles'

export const FeeStructureTerms = () => {
  return (
    <div className={styles.terms.container}>
      <h3 className={styles.terms.title}>TERMS OF PAYMENT:</h3>
      <div className={styles.terms.list}>
        {PAYMENT_TERMS.map((term, index) => (
          <p key={index} className={styles.terms.text}>{term}</p>
        ))}
        <div className={styles.terms.bankAccounts}>
          {BANK_ACCOUNTS.map((account, index) => (
            <p key={index} className={styles.terms.text}>
              <span className={styles.terms.bankName}>{account.bank}</span>
              {account.branch && <span> {account.branch}</span>}
              <span className={styles.terms.accountNumber}>A/C NO. {account.accountNumber}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
