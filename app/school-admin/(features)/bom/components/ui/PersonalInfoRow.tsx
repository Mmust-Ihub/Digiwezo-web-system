import { memo } from "react";
import { FormData } from "@school-admin/(features)/bom/types/addMemberTypes";
import { FormInput } from "@school-admin/(features)/bom/components/ui/FormFields";
import { BOM_CONSTANTS } from "@school-admin/(features)/bom/constants/bomConstants";
import { modalStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface PersonalInfoRowProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
}

export const PersonalInfoRow = memo(function PersonalInfoRow({ 
  formData, 
  onChange 
}: PersonalInfoRowProps) {
  return (
    <div className={modalStyles.formRow}>
      <FormInput
        label={BOM_CONSTANTS.FORM_LABELS.FULL_NAME}
        name="fullName"
        type="text"
        value={formData.fullName}
        onChange={onChange}
        required
      />
      <FormInput
        label={BOM_CONSTANTS.FORM_LABELS.EMAIL_ADDRESS}
        name="email"
        type="email"
        value={formData.email}
        onChange={onChange}
        required
      />
    </div>
  );
});
