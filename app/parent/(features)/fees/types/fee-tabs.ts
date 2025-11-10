export type TabType = 'statement' | 'structure';

export interface TabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export interface TabButton {
  id: TabType;
  label: string;
}

export const TAB_BUTTONS: TabButton[] = [
  { id: 'statement', label: 'Fees Statement' },
  { id: 'structure', label: 'Fees Structure' },
];