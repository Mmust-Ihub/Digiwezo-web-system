import { memo, useMemo } from "react";
import { MaleIcon } from "@school-admin/(features)/bom/icons/MaleIcon";
import { FemaleIcon } from "@school-admin/(features)/bom/icons/FemaleIcon";
import { PeopleIcon } from "@school-admin/(features)/bom/icons/PeopleIcon";
import { statsCardStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface StatsCardProps {
  type: "total" | "male" | "female";
  count: number;
  label: string;
}

export const StatsCard = memo(function StatsCard({ type, count, label }: StatsCardProps) {
  const icon = useMemo(() => {
    switch(type) {
      case "total":
        return <PeopleIcon className={statsCardStyles.icon} />;
      case "male":
        return <MaleIcon className={statsCardStyles.icon} />;
      case "female":
        return <FemaleIcon className={statsCardStyles.icon} />;
      default:
        return <PeopleIcon className={statsCardStyles.icon} />;
    }
  }, [type]);
  
  return (
    <div className={statsCardStyles.container}>
      <div className={statsCardStyles.content}>
        <div className={statsCardStyles.iconContainer}>
          {icon}
        </div>
        <div className={statsCardStyles.textContainer}>
          <div className={statsCardStyles.count}>{count}</div>
          <div className={statsCardStyles.label}>{label}</div>
        </div>
      </div>
    </div>
  );
});

