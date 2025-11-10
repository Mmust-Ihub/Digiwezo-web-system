'use client'

import { FC } from 'react'
import { Button } from '@/components/ui/button'
import { BANK_ACCOUNTS, FEE_STRUCTURE_DATA, PAYMENT_TERMS } from '@/parent/(features)/fees/data/fee-structure'
import { TABLE_HEADERS, SUB_HEADERS } from '@/parent/(features)/fees/types/fee-structure'
import { useFeeStructure } from '@/parent/(features)/fees/hooks/useFeeStructure'
import { feeStructureStyles as styles } from '@/parent/(features)/fees/components/styles/fee-structure.styles'
import { cn } from '@/lib/utils'

export const FeeStructure: FC = () => {
  const { 
    selectedGrade,
    displayedData,
    isLoading,
    handleGradeChange,
    generateStructure,
    downloadStructure
  } = useFeeStructure()

  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <div className={styles.header.container}>
          <div className={styles.header.gradeContainer}>
            <div className={styles.header.gradeSection}>
              <h3 className={styles.header.title}>Grade</h3>
              <div className={styles.select.container}>
                <select 
                  value={selectedGrade}
                  onChange={(e) => handleGradeChange(e.target.value)}
                  className={styles.select.input}
                >
                  <option value="">Select Grade</option>
                  <option value="all">All Grades</option>
                  {FEE_STRUCTURE_DATA.map((item, index) => (
                    <option key={index} value={item.grade}>{item.grade}</option>
                  ))}
                </select>
                <div className={styles.select.icon.container}>
                  <svg className={styles.select.icon.svg} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={generateStructure}
              disabled={!selectedGrade || isLoading}
            >
              {isLoading ? 'Loading...' : 'Generate'}
            </Button>
          </div>
        </div>

        {/* Fee Structure Table */}
        <div className={styles.table.container}>
          <table className={styles.table.base}>
            <thead>
              <tr>
                {TABLE_HEADERS.map((header) => (
                  <th 
                    key={header.id}
                    className={cn(styles.table.header, {
                      'text-center': header.id === 'optional',
                      'text-left': header.id !== 'optional'
                    })}
                    colSpan={header.colSpan}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
              <tr>
                {SUB_HEADERS.map((header) => (
                  <th 
                    key={header.id}
                    className={cn(styles.table.header, 'text-left')}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedData.map((item, index) => (
                <tr key={index}>
                  <td className={styles.table.cell}>{item.grade}</td>
                  <td className={styles.table.cell}>{item.mandatory.tuition}</td>
                  <td className={styles.table.cell}>{item.optional.lunch}</td>
                  <td className={styles.table.cell}>{item.optional.swimming}</td>
                  <td className={styles.table.cell}>{item.optional.transport}</td>
                  <td className={styles.table.cell}>{item.optional.boarding}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Terms of Payment */}
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
      </div>

      <div className="flex justify-end">
        <Button 
          variant="secondary" 
          size="lg"
          onClick={downloadStructure}
          disabled={displayedData.length === 0 || isLoading}
        >
          {isLoading ? 'Downloading...' : 'Download PDF'}
        </Button>
      </div>
    </div>
  )
}