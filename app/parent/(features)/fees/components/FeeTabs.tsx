'use client'

import { FC } from 'react'

import { Button } from '@/components/ui/button'

import type { TabsProps } from '@/parent/(features)/fees/types/fee-tabs'
import { TAB_BUTTONS } from '@/parent/(features)/fees/types/fee-tabs'

export const FeeTabs: FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex gap-4 mb-8 px-2">
      {TAB_BUTTONS.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          variant={activeTab === tab.id ? 'default' : 'outline'}
          className={activeTab === tab.id 
            ? 'bg-primary hover:bg-primary/90 text-white border-primary'
            : 'border-secondary hover:bg-secondary/10 text-foreground hover:text-foreground'
          }
        >
          {tab.label}
        </Button>
      ))}
    </div>
  )
}
