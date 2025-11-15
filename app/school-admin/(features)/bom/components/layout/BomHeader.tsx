import { memo } from "react";
import { BomHeaderTitle } from "@school-admin/(features)/bom/components/ui/BomHeaderTitle";
import { BomStatsGrid } from "@school-admin/(features)/bom/components/ui/BomStatsGrid";
import { BomStats } from "@school-admin/(features)/bom/types/bomTypes";
import { bomHeaderStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface BomHeaderProps {
  stats: BomStats;
}

export const BomHeader = memo(function BomHeader({ stats }: BomHeaderProps) {
  return (
    <div className={bomHeaderStyles.container}>
      <BomHeaderTitle />
      <BomStatsGrid stats={stats} />
    </div>
  );
});

