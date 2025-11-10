import { useState } from 'react'
import { fee_structure_data } from '@parent/(features)/fees/data/fee-structure'
import type { FormattedFeeStructureItem } from '@parent/(features)/fees/types/fee-hooks'
import { formatFeeItem } from '@parent/(features)/fees/utils/feeStructureFormatters'
import { generateFeeStructurePDF } from '@parent/(features)/fees/utils/feeStructurePDF'

export const useFeeStructure = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>('')
  const [displayedData, setDisplayedData] = useState<FormattedFeeStructureItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleGradeChange = (grade: string) => {
    setSelectedGrade(grade)
    setDisplayedData([]) // Clear the table when grade changes
  }

  const generateStructure = () => {
    if (!selectedGrade) return

    setIsLoading(true)
    setTimeout(() => {
      const filteredData = selectedGrade === 'all' 
        ? fee_structure_data 
        : fee_structure_data.filter(item => item.grade === selectedGrade)
      setDisplayedData(filteredData.map(formatFeeItem))
      setIsLoading(false)
    }, 500)
  }

  const downloadStructure = () => {
    generateFeeStructurePDF(displayedData, selectedGrade)
  }

  return {
    selectedGrade,
    displayedData,
    isLoading,
    handleGradeChange,
    generateStructure,
    downloadStructure
  }
}
