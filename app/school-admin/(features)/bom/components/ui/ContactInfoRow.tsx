import { memo } from "react";
import { FormData } from "@school-admin/(features)/bom/types/addMemberTypes";
import { FormInput } from "@school-admin/(features)/bom/components/ui/FormFields";
import { BOM_CONSTANTS } from "@school-admin/(features)/bom/constants/bomConstants";
import { modalStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface ContactInfoRowProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
}

export const ContactInfoRow = memo(function ContactInfoRow({ 
  formData, 
  onChange 
}: ContactInfoRowProps) {
  return (
    <div className={modalStyles.formRow}>
      <FormInput
        label={BOM_CONSTANTS.FORM_LABELS.PHONE}
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={onChange}
        required
      />
      <FormInput
        label={BOM_CONSTANTS.FORM_LABELS.ID_NUMBER}
        name="idNumber"
        type="text"
        value={formData.idNumber}
        onChange={onChange}
        required
      />
    </div>
  );
});
