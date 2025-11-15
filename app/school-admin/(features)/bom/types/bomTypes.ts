export interface BomMember {
  id: number;
  name: string;
  username: string;
  phone: string;
  email?: string;
  verified?: boolean;
}

export interface BomStats {
  totalMembers: number;
  maleMembers: number;
  femaleMembers: number;
}

export interface BomData {
  stats: BomStats;
  members: BomMember[];
}


export interface BomStatsGridProps {
  stats: BomStats;
}

export interface PaginationControlsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
  currentPage?: number;
  totalPages?: number;
}

export interface TableExportActionsProps {
  onPrint?: () => void;
  onDownload?: () => void;
  isDownloading?: boolean;
  isPrinting?: boolean;
}


export interface BomPageHeaderProps {
  stats: BomStats;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onAddMember: () => void;
}

export interface BomPageContentProps {
  filteredMembers: BomMember[];
  onViewMember: (id: number) => void;
  startIndex: number;
  onPrint: () => void;
  onDownload: () => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isDownloading: boolean;
  isPrinting: boolean;
  currentPage: number;
  totalPages: number;
}


export interface MemberRowProps {
  member: BomMember;
  index: number;
  onViewMember?: (id: number) => void;
  startIndex?: number;
}


export interface ModalBackButtonProps {
  onClick: () => void;
}

export interface ModalSubmitButtonProps {
  onClick: () => void;
  isSubmitting: boolean;
}


export interface StatsIconProviderProps {
  type: "total" | "male" | "female";
}

