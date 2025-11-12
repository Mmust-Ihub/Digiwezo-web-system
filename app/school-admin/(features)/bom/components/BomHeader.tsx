import { StatsCard } from "./StatsCard";
import { BomStats } from "@school-admin/(features)/bom/types/bomTypes";

interface BomHeaderProps {
  stats: BomStats;
}

export const BomHeader = ({ stats }: BomHeaderProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Board of Management</h1>
      </div>
      
      <div className="flex gap-6 flex-wrap">
        <StatsCard 
          type="total"
          count={stats.totalMembers}
          label="Total Members"
        />
        <StatsCard 
          type="male"
          count={stats.maleMembers}
          label="Male"
        />
        <StatsCard 
          type="female"
          count={stats.femaleMembers}
          label="Female"
        />
      </div>
    </div>
  );
};