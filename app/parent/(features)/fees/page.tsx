'use client'

import { WelcomeBanner } from '@/parent/(features)/fees/components/WelcomeBanner'
import { FeeTabs } from '@/parent/(features)/fees/components/FeeTabs'
import { FeeStatement } from '@/parent/(features)/fees/components/FeeStatement'
import { BANNER_CONFIG } from '@/parent/(features)/fees/data/banner'
import { DUMMY_FEE_RECEIPT } from '@/parent/(features)/fees/data/dummy-data'
import { FeeStructure } from '@/parent/(features)/fees/components/FeeStructure'
import { useFees } from '@/parent/(features)/fees/hooks/useFees'

export default function FeesPage() {
  const { activeTab, handleTabChange } = useFees()

  return (
    <div className="p-4">
      <h1 className="title text-dark-blue mb-4">Fees</h1>
      <WelcomeBanner 
        username={BANNER_CONFIG.username}
        message={BANNER_CONFIG.message}
      />
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full">
        <FeeTabs 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        {activeTab === 'statement' ? (
          <FeeStatement receipt={DUMMY_FEE_RECEIPT} />
        ) : (
          <FeeStructure />
        )}
      </div>
    </div>
  )
}