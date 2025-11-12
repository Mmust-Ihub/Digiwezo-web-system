import { Users, User } from "lucide-react";
import { statsCardStyles } from "@school-admin/(features)/bom/styles/componentStyles";

interface StatsCardProps {
  type: "total" | "male" | "female";
  count: number;
  label: string;
}

export const StatsCard = ({ type, count, label }: StatsCardProps) => {
  const getIcon = () => {
    switch(type) {
      case "total":
        return <Users className={statsCardStyles.icon} />;
      case "male":
        return <User className={statsCardStyles.icon} />;
      case "female":
        return <User className={statsCardStyles.icon} />;
      default:
        return <Users className={statsCardStyles.icon} />;
    }
  };
  
  return (
    <div className={statsCardStyles.container}>
      <div className={statsCardStyles.content}>
        <div className={statsCardStyles.iconContainer}>
          {getIcon()}
        </div>
        <div className={statsCardStyles.textContainer}>
          <div className={statsCardStyles.count}>{count}</div>
          <div className={statsCardStyles.label}>{label}</div>
        </div>
      </div>
    </div>
  );
};