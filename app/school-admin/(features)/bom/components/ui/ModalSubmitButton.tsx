import { memo } from "react";
import { PlusIcon } from "@school-admin/(features)/bom/icons/PlusIcon";
import { BOM_CONSTANTS } from "@school-admin/(features)/bom/constants/bomConstants";
import { modalStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface ModalSubmitButtonProps {
  onClick: () => void;
  isSubmitting: boolean;
}

export const ModalSubmitButton = memo(function ModalSubmitButton({ 
  onClick,
  isSubmitting 
}: ModalSubmitButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isSubmitting}
      className={modalStyles.submitButton}
    >
      {isSubmitting ? (
        <div className="w-4 h-4 animate-spin border-2 border-current border-t-transparent rounded-full"></div>
      ) : (
        <PlusIcon className={modalStyles.submitIcon} />
      )}
      {isSubmitting ? BOM_CONSTANTS.BUTTONS.ADDING : BOM_CONSTANTS.BUTTONS.ADD_MEMBER}
    </button>
  );
});