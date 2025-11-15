import { useRef } from "react";
import { ModalLayoutProps } from "@school-admin/(features)/bom/types/addMemberTypes";
import { ModalBackButton } from "@school-admin/(features)/bom/components/ui/ModalBackButton";
import { ModalSubmitButton } from "@school-admin/(features)/bom/components/ui/ModalSubmitButton";
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

export function ModalHeader({ title }: ModalHeaderProps) {
  return (
    <div className={modalStyles.header}>
      <h2 className={modalStyles.title}>{title}</h2>
    </div>
  );
}

export function ModalFooter({ 
  onClose, 
  onSubmit, 
  isSubmitting 
}: ModalFooterProps) {
  return (
    <div className={modalStyles.footer}>
      <ModalBackButton onClick={onClose} />
      <ModalSubmitButton 
        onClick={onSubmit} 
        isSubmitting={isSubmitting} 
      />
    </div>
  );
}

export function ModalLayout({ 
  isOpen, 
  onClose, 
  children 
}: ModalLayoutProps) {
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
}

