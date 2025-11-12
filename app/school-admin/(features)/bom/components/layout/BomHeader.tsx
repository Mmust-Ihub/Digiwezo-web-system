import { StatsCard } from "@school-admin/(features)/bom/components/ui/StatsCard";
import { BomStats } from "@school-admin/(features)/bom/types/bomTypes";
import { bomHeaderStyles } from "@school-admin/(features)/bom/styles/componentStyles";

interface BomHeaderProps {
  stats: BomStats;
}

export const BomHeader = ({ stats }: BomHeaderProps) => {
  return (
    <div className={bomHeaderStyles.container}>
      <div>
        <h1 className={bomHeaderStyles.title}>Board of Management</h1>
      </div>
      
      <div className={bomHeaderStyles.statsContainer}>
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