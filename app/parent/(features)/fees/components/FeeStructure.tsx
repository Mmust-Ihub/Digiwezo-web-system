'use client'

import { FC } from 'react'
import { Button } from '@/components/ui/button'
import { useFeeStructure } from '@/parent/(features)/fees/hooks/useFeeStructure'
import { FeeStructureHeader } from '@/parent/(features)/fees/components/FeeStructureHeader'
import { FeeStructureTable } from '@/parent/(features)/fees/components/FeeStructureTable'
import { FeeStructureTerms } from '@/parent/(features)/fees/components/FeeStructureTerms'
import { feeStructureStyles as styles } from '@/parent/(features)/fees/components/styles/fee-structure.styles'

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
        <FeeStructureHeader 
          selectedGrade={selectedGrade}
          isLoading={isLoading}
          onGradeChange={handleGradeChange}
          onGenerate={generateStructure}
        />
        <FeeStructureTable data={displayedData} />
        <FeeStructureTerms />
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
