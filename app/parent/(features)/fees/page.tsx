'use client'

// Hooks
import { useFees } from '@/parent/(features)/fees/hooks/useFees'

// Components
import { DefaultWelcomeBanner } from '@/parent/(features)/fees/components/DefaultWelcomeBanner'
import { FeeTabs } from '@/parent/(features)/fees/components/FeeTabs'
import { DefaultFeeStatement } from '@/parent/(features)/fees/components/DefaultFeeStatement'
import { FeeStructure } from '@/parent/(features)/fees/components/FeeStructure'

export default function FeesPage() {
  const { activeTab, handleTabChange } = useFees()

  return (
    <div className="p-4">
      <h1 className="title text-dark-blue mb-4">Fees</h1>
      <DefaultWelcomeBanner />
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full">
        <FeeTabs 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        {activeTab === 'statement' ? (
          <DefaultFeeStatement />
        ) : (
          <FeeStructure />
        )}
      </div>
    </div>
  )
}