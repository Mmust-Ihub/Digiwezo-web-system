import { memo, useMemo } from "react";
import { MaleIcon } from "@school-admin/(features)/bom/icons/MaleIcon";
import { FemaleIcon } from "@school-admin/(features)/bom/icons/FemaleIcon";
import { PeopleIcon } from "@school-admin/(features)/bom/icons/PeopleIcon";
import { statsCardStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface StatsIconProviderProps {
  type: "total" | "male" | "female";
}

export const StatsIconProvider = memo(function StatsIconProvider({ 
  type 
}: StatsIconProviderProps) {
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
  
  return <>{icon}</>;
});
