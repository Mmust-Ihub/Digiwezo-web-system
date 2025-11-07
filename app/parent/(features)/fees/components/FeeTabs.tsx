'use client'

import { FC } from 'react'

interface TabsProps {
  activeTab: 'statement' | 'structure'
  onTabChange: (tab: 'statement' | 'structure') => void
}

export const FeeTabs: FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex gap-4 mb-8 px-2">
      <button
        onClick={() => onTabChange('statement')}
        className={`px-8 py-2.5 rounded-lg text-sm font-medium transition-colors
          ${activeTab === 'statement' 
            ? 'bg-primary text-white' 
            : 'bg-white text-custom-grey border border-[#E7EA33] hover:bg-gray-50'
          }`}
      >
        Fees Statement
      </button>
      <button
        onClick={() => onTabChange('structure')}
        className={`px-8 py-2.5 rounded-lg text-sm font-medium transition-colors
          ${activeTab === 'structure' 
            ? 'bg-primary text-white' 
            : 'bg-white text-custom-grey border border-[#E7EA33] hover:bg-gray-50'
          }`}
      >
        Fees Structure
      </button>
    </div>
  )
}