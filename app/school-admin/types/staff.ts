export interface Staff {
  id: string;
  name: string;
  email: string;
  phone: string;
  gender: "male" | "female";
  role?: string;
  department?: string;
  status?: "active" | "inactive";
  avatar?: string;
  joinDate?: string;
}

export interface StaffFilters {
  search: string;
}

export interface StaffStats {
  total: number;
  male: number;
  female: number;
}

