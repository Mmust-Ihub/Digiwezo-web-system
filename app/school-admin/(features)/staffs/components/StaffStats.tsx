import { StaffStats as Stats } from "@school-admin/types/staff";
import { Users, User } from "lucide-react";

interface StaffStatsProps {
  stats: Stats;
}

export const StaffStats = ({ stats }: StaffStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-background rounded-lg shadow-md p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center relative">
            <Users className="w-6 h-6 text-primary absolute" />
            <Users className="w-6 h-6 text-primary absolute -ml-1" />
            <Users className="w-6 h-6 text-primary absolute -ml-2" />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">{stats.total}</p>
            <p className="text-sm text-custom-grey">Total Staff</p>
          </div>
        </div>
      </div>

      <div className="bg-background rounded-lg shadow-md p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <User className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">{stats.male}</p>
            <p className="text-sm text-custom-grey">Male</p>
          </div>
        </div>
      </div>

      <div className="bg-background rounded-lg shadow-md p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <User className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">{stats.female}</p>
            <p className="text-sm text-custom-grey">Female</p>
          </div>
        </div>
      </div>
    </div>
  );
};

