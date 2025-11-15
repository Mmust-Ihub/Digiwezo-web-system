import { memo } from "react";
import { ArrowLeft } from "lucide-react";
import { BOM_CONSTANTS } from "@school-admin/(features)/bom/constants/bomConstants";
import { modalStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface ModalBackButtonProps {
  onClick: () => void;
}

export const ModalBackButton = memo(function ModalBackButton({ 
  onClick 
}: ModalBackButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={modalStyles.backButton}
    >
      <ArrowLeft className="w-4 h-4 mr-2 inline" />
      {BOM_CONSTANTS.BUTTONS.BACK}
    </button>
  );
});