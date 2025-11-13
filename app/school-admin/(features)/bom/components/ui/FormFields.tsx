import { FormFieldProps } from "@school-admin/(features)/bom/types/addMemberTypes";
import { modalStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

export const FormInput = ({ 
  label, 
  name, 
  type, 
  value, 
  onChange, 
  required = false 
}: FormFieldProps) => (
  <div className={modalStyles.formGroup}>
    <label className={modalStyles.label}>{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      className={modalStyles.input}
      required={required}
    />
  </div>
);

export const FormSelect = ({ 
  label, 
  name, 
  value, 
  onChange, 
  options = [], 
  required = false 
}: FormFieldProps) => (
  <div className={modalStyles.formGroup}>
    <label className={modalStyles.label}>{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      className={modalStyles.select}
      required={required}
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export const FormTextarea = ({ 
  label, 
  name, 
  value, 
  onChange, 
  rows = 3, 
  required = false 
}: FormFieldProps) => (
  <div className={modalStyles.formGroup}>
    <label className={modalStyles.label}>{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      className={modalStyles.textarea}
      rows={rows}
      required={required}
    />
  </div>
);