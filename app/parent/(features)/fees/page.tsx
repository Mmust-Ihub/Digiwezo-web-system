'use client'

import { useState } from 'react'
import { WelcomeBanner } from './components/WelcomeBanner'
import { FeeTabs } from './components/FeeTabs'
import { FeeStatement } from './components/FeeStatement'
import { BANNER_CONFIG } from './data/banner'
import { DUMMY_FEE_RECEIPT } from './data/dummy-data'
import { FeeStructure } from './components/FeeStructure'

export default function FeesPage() {
  const [activeTab, setActiveTab] = useState<'statement' | 'structure'>('statement')

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
          onTabChange={setActiveTab}
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