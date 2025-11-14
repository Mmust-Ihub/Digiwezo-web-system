"use client";

import { AddMemberModalProps } from "@school-admin/(features)/bom/types/addMemberTypes";
import { useAddMemberForm } from "@school-admin/(features)/bom/hooks/forms/useAddMemberForm";
import { ModalLayout, ModalHeader, ModalFooter } from "@school-admin/(features)/bom/components/modals/ModalLayout";
import { AddMemberForm } from "@school-admin/(features)/bom/components/forms/AddMemberForm";
import { modalStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

export function AddMemberModal({ isOpen, onClose, onSubmit }: AddMemberModalProps) {
  const {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit
  } = useAddMemberForm();

  const onFormSubmit = (e: React.FormEvent) => {
    handleSubmit(e, onSubmit, onClose);
  };

  const onSubmitClick = () => {
    const form = document.querySelector('form') as HTMLFormElement;
    if (form) {
      form.requestSubmit();
    }
  };

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>
      <ModalHeader title="Fill in the details of the member" />
      
      <div className={modalStyles.content}>
        <AddMemberForm
          formData={formData}
          onChange={handleInputChange}
          onSubmit={onFormSubmit}
        />
      </div>
      
      <ModalFooter
        onClose={onClose}
        onSubmit={onSubmitClick}
        isSubmitting={isSubmitting}
      />
    </ModalLayout>
  );
}

