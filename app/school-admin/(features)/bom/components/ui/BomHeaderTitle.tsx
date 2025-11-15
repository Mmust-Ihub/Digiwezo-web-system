import { memo } from "react";
import { BOM_CONSTANTS } from "@school-admin/(features)/bom/constants/bomConstants";
import { bomHeaderStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

export const BomHeaderTitle = memo(function BomHeaderTitle() {
  return (
    <div>
      <h1 className={bomHeaderStyles.title}>{BOM_CONSTANTS.PAGE_TITLE}</h1>
    </div>
  );
});
