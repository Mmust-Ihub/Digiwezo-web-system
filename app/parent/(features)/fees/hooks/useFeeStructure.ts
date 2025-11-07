import { useState } from 'react'
import { FEE_STRUCTURE_DATA } from '../data/fee-structure'
import type { FeeStructureItem } from '../types/fees-structure'

export const useFeeStructure = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>('')
  const [displayedData, setDisplayedData] = useState<FeeStructureItem[]>(FEE_STRUCTURE_DATA)
  const [isLoading, setIsLoading] = useState(false)

  const handleGradeChange = (grade: string) => {
    setSelectedGrade(grade)
    setDisplayedData([]) // Clear the table when grade changes
  }

  const generateStructure = () => {
    if (!selectedGrade) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      const filteredData = selectedGrade === 'all' 
        ? FEE_STRUCTURE_DATA 
        : FEE_STRUCTURE_DATA.filter(item => item.grade === selectedGrade)
      setDisplayedData(filteredData)
      setIsLoading(false)
    }, 500)
  }

  const downloadStructure = () => {
    // Create table content
    const headers = ['Grade', 'Tuition', 'Lunch', 'Swimming', 'Transport', 'Boarding']
    const rows = displayedData.map(item => [
      item.grade,
      `${item.mandatory.tuition.toLocaleString()}.00`,
      `${item.optional.lunch.toLocaleString()}.00`,
      typeof item.optional.swimming === 'number' ? `${item.optional.swimming.toLocaleString()}.00` : item.optional.swimming,
      item.optional.transport,
      item.optional.boarding
    ])

    // Create CSV content
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\\n')

    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', `fee_structure_${selectedGrade || 'all'}.csv`)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
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