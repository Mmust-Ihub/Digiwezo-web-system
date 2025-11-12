import { useState } from "react";
import { FormData } from "@school-admin/(features)/bom/types/addMemberTypes";

export const useAddMemberForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    gender: "",
    phone: "",
    idNumber: "",
    address: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      gender: "",
      phone: "",
      idNumber: "",
      address: ""
    });
  };

  const handleSubmit = async (
    e: React.FormEvent,
    onSubmit: (memberData: FormData) => void,
    onClose: () => void
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      resetForm();
      onClose();
    } catch (error) {
      console.error("Error adding member:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    resetForm,
    handleSubmit
  };
};