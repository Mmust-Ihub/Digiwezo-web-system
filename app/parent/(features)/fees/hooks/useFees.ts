import { useState } from 'react';
import type { TabType } from '@/parent/(features)/fees/types/fee-tabs';

export const useFees = () => {
  const [activeTab, setActiveTab] = useState<TabType>('statement');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return {
    activeTab,
    handleTabChange,
  };
};
