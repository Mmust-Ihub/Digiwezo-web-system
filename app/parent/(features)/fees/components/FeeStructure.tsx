'use client'

import { FC } from 'react'
import { Button } from '@/components/ui/button'
import { BANK_ACCOUNTS, FEE_STRUCTURE_DATA, PAYMENT_TERMS } from '@/parent/(features)/fees/data/fee-structure'
import { TABLE_HEADERS, SUB_HEADERS } from '@/parent/(features)/fees/types/fee-structure'
import { useFeeStructure } from '@/parent/(features)/fees/hooks/useFeeStructure'

export const FeeStructure: FC = () => {
  const { 
    selectedGrade,
    displayedData,
    isLoading,
    handleGradeChange,
    generateStructure,
    downloadStructure
  } = useFeeStructure()
  
  const headerBaseClasses = "py-2 px-4 text-sm font-bold text-foreground border-2 border-custom-grey/20 bg-gray-50"
  const cellBaseClasses = "py-2 px-4 text-sm text-foreground border-2 border-custom-grey/20"

  return (
    <div className="flex items-end gap-6">
      <div className="border border-custom-grey/20 rounded-lg p-4 sm:p-6 max-w-[840px]">
        <div className="mb-6">
          <div className="flex justify-between items-end gap-4 mb-6">
            <div className="space-y-2 max-w-[400px]">
            <h3 className="text-base font-semibold text-foreground">Grade</h3>
            <div className="relative">
              <select 
                value={selectedGrade}
                onChange={(e) => handleGradeChange(e.target.value)}
                className="w-full border border-secondary rounded-lg py-2 px-4 pr-10 text-sm text-foreground appearance-none focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-white"
              >
                <option value="">Select Grade</option>
                <option value="all">All Grades</option>
                {FEE_STRUCTURE_DATA.map((item, index) => (
                  <option key={index} value={item.grade}>{item.grade}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
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

        {/* Fee Structure Table */}
        <div className="border-2 border-custom-grey/20 rounded overflow-x-auto mb-6">
          <table className="w-full border-collapse min-w-[680px]">
            <thead>
              <tr>
                {TABLE_HEADERS.map((header) => (
                  <th 
                    key={header.id}
                    className={`${headerBaseClasses} ${header.id === 'optional' ? 'text-center' : 'text-left'}`}
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
                    className={`${headerBaseClasses} text-left`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedData.map((item, index) => (
                <tr key={index}>
                  <td className={cellBaseClasses}>{item.grade}</td>
                  <td className={cellBaseClasses}>{item.mandatory.tuition.toLocaleString()}.00</td>
                  <td className={cellBaseClasses}>{item.optional.lunch.toLocaleString()}.00</td>
                  <td className={cellBaseClasses}>
                    {typeof item.optional.swimming === 'number' 
                      ? `${item.optional.swimming.toLocaleString()}.00` 
                      : item.optional.swimming}
                  </td>
                  <td className={cellBaseClasses}>{item.optional.transport}</td>
                  <td className={cellBaseClasses}>{item.optional.boarding}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Terms of Payment */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-foreground">TERMS OF PAYMENT:</h3>
          <div className="space-y-2">
            {PAYMENT_TERMS.map((term, index) => (
              <p key={index} className="text-sm text-foreground">{term}</p>
            ))}
            <div className="pl-6 space-y-2 mt-2">
              {BANK_ACCOUNTS.map((account, index) => (
                <p key={index} className="text-sm text-foreground">
                  <span className="font-semibold">{account.bank}</span>
                  {account.branch && <span> {account.branch}</span>}
                  <span className="ml-8">A/C NO. {account.accountNumber}</span>
                </p>
              ))}
            </div>
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