import { memo } from "react";
import { FormData } from "@school-admin/(features)/bom/types/addMemberTypes";
import { FormSelect, FormTextarea } from "@school-admin/(features)/bom/components/ui/FormFields";
import { PersonalInfoRow } from "@school-admin/(features)/bom/components/ui/PersonalInfoRow";
import { ContactInfoRow } from "@school-admin/(features)/bom/components/ui/ContactInfoRow";
import { BOM_CONSTANTS } from "@school-admin/(features)/bom/constants/bomConstants";
import { modalStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";
import { genderOptions } from "@school-admin/(features)/bom/utils/memberUtils";

interface AddMemberFormProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const AddMemberForm = memo(function AddMemberForm({ 
  formData, 
  onChange, 
  onSubmit 
}: AddMemberFormProps) {
  return (
    <form onSubmit={onSubmit} className={modalStyles.form}>
      <PersonalInfoRow 
        formData={formData}
        onChange={onChange}
      />

      <div className={modalStyles.formRow}>
        <FormSelect
          label={BOM_CONSTANTS.FORM_LABELS.GENDER}
          name="gender"
          type="select"
          value={formData.gender}
          onChange={onChange}
          options={genderOptions}
          required
        />
      </div>

      <ContactInfoRow 
        formData={formData}
        onChange={onChange}
      />

      <FormTextarea
        label={BOM_CONSTANTS.FORM_LABELS.ADDRESS}
        name="address"
        type="textarea"
        value={formData.address}
        onChange={onChange}
        rows={3}
        required
      />
    </form>
  );
});

