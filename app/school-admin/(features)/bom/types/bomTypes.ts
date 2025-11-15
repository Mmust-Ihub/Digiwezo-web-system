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

