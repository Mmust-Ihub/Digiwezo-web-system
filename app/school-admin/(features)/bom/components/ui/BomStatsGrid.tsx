import { memo } from "react";
import { StatsCard } from "@school-admin/(features)/bom/components/ui/StatsCard";
import { BomStats } from "@school-admin/(features)/bom/types/bomTypes";
import { BOM_CONSTANTS } from "@school-admin/(features)/bom/constants/bomConstants";
import { bomHeaderStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface BomStatsGridProps {
  stats: BomStats;
}

export const BomStatsGrid = memo(function BomStatsGrid({ stats }: BomStatsGridProps) {
  return (
    <div className={bomHeaderStyles.statsContainer}>
      <StatsCard 
        type="total"
        count={stats.totalMembers}
        label={BOM_CONSTANTS.STATS_LABELS.TOTAL_MEMBERS}
      />
      <StatsCard 
        type="male"
        count={stats.maleMembers}
        label={BOM_CONSTANTS.STATS_LABELS.MALE_MEMBERS}
      />
      <StatsCard 
        type="female"
        count={stats.femaleMembers}
        label={BOM_CONSTANTS.STATS_LABELS.FEMALE_MEMBERS}
      />
    </div>
  );
});
