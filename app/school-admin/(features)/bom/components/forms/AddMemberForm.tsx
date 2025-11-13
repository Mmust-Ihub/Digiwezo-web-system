import { FormData } from "@school-admin/(features)/bom/types/addMemberTypes";
import { FormInput, FormSelect, FormTextarea } from "@school-admin/(features)/bom/components/ui/FormFields";
import { modalStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface AddMemberFormProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" }
];


export const AddMemberForm = ({ 
  formData, 
  onChange, 
  onSubmit 
}: AddMemberFormProps) => {
  return (
    <form onSubmit={onSubmit} className={modalStyles.form}>
      <div className={modalStyles.formRow}>
        <FormInput
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={onChange}
          required
        />
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          required
        />
      </div>

      <div className={modalStyles.formRow}>
        <FormSelect
          label="Gender"
          name="gender"
          type="select"
          value={formData.gender}
          onChange={onChange}
          options={genderOptions}
          required
        />
      </div>

      <div className={modalStyles.formRow}>
        <FormInput
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={onChange}
          required
        />
        <FormInput
          label="ID Number"
          name="idNumber"
          type="text"
          value={formData.idNumber}
          onChange={onChange}
          required
        />
      </div>

      <FormTextarea
        label="Address"
        name="address"
        type="textarea"
        value={formData.address}
        onChange={onChange}
        rows={3}
        required
      />
    </form>
  );
};