import { memo } from "react";
import { StatsIconProvider } from "@school-admin/(features)/bom/components/ui/StatsIconProvider";
import { statsCardStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface StatsCardProps {
  type: "total" | "male" | "female";
  count: number;
  label: string;
}

export const StatsCard = memo(function StatsCard({ type, count, label }: StatsCardProps) {
  return (
    <div className={statsCardStyles.container}>
      <div className={statsCardStyles.content}>
        <div className={statsCardStyles.iconContainer}>
          <StatsIconProvider type={type} />
        </div>
        <div className={statsCardStyles.textContainer}>
          <div className={statsCardStyles.count}>{count}</div>
          <div className={statsCardStyles.label}>{label}</div>
        </div>
      </div>
    </div>
  );
});

