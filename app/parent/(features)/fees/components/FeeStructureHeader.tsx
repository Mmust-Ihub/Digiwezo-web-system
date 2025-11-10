'use client'

import { Button } from '@/components/ui/button'
import { fee_structure_data } from '@parent/(features)/fees/data/fee-structure'
import { feeStructureStyles as styles } from '@parent/(features)/fees/components/styles/fee-structure.styles'

interface FeeStructureHeaderProps {
  selectedGrade: string
  isLoading: boolean
  onGradeChange: (grade: string) => void
  onGenerate: () => void
}

export const FeeStructureHeader = ({
  selectedGrade,
  isLoading,
  onGradeChange,
  onGenerate
}: FeeStructureHeaderProps) => {
  return (
    <div className={styles.header.container}>
      <div className={styles.header.gradeContainer}>
        <div className={styles.header.gradeSection}>
          <h3 className={styles.header.title}>Grade</h3>
          <div className={styles.select.container}>
            <select 
              value={selectedGrade}
              onChange={(e) => onGradeChange(e.target.value)}
              className={styles.select.input}
            >
              <option value="">Select Grade</option>
              <option value="all">All Grades</option>
              {fee_structure_data.map((item, index) => (
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
          onClick={onGenerate}
          disabled={!selectedGrade || isLoading}
        >
          {isLoading ? 'Loading...' : 'Generate'}
        </Button>
      </div>
    </div>
  )
}
