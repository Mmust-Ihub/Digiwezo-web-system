import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { PlusIcon } from "@school-admin/(features)/bom/icons/PlusIcon";
import { ModalLayoutProps } from "@school-admin/(features)/bom/types/addMemberTypes";
import { modalStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";
import { useModalBehavior } from "@school-admin/(features)/bom/hooks/ui/useModalBehavior";

interface ModalHeaderProps {
  title: string;
}

interface ModalFooterProps {
  onClose: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export const ModalHeader = ({ title }: ModalHeaderProps) => (
  <div className={modalStyles.header}>
    <h2 className={modalStyles.title}>{title}</h2>
  </div>
);

export const ModalFooter = ({ 
  onClose, 
  onSubmit, 
  isSubmitting 
}: ModalFooterProps) => (
  <div className={modalStyles.footer}>
    <button
      type="button"
      onClick={onClose}
      className={modalStyles.backButton}
    >
      <ArrowLeft className="w-4 h-4 mr-2 inline" />
      Back
    </button>
    
    <button
      onClick={onSubmit}
      disabled={isSubmitting}
      className={modalStyles.submitButton}
    >
      {isSubmitting ? (
        <div className="w-4 h-4 animate-spin border-2 border-current border-t-transparent rounded-full"></div>
      ) : (
        <PlusIcon className={modalStyles.submitIcon} />
      )}
      {isSubmitting ? "Adding..." : "Add Member"}
    </button>
  </div>
);

export const ModalLayout = ({ 
  isOpen, 
  onClose, 
  children 
}: ModalLayoutProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { handleOverlayClick } = useModalBehavior({ isOpen, onClose });

  if (!isOpen) return null;

  return (
    <div 
      className={modalStyles.overlay}
      onClick={handleOverlayClick}
    >
      <div 
        ref={modalRef}
        className={modalStyles.container}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};