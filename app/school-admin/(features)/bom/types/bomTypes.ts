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

