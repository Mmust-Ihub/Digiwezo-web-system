import { FormFieldProps } from "@school-admin/(features)/bom/types/addMemberTypes";
import { modalStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";
import { memo, useCallback } from "react";

export const FormInput = memo(function FormInput({ 
  label, 
  name, 
  type, 
  value, 
  onChange, 
  required = false 
}: FormFieldProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  }, [name, onChange]);

  return (
    <div className={modalStyles.formGroup}>
      <label className={modalStyles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={modalStyles.input}
        required={required}
      />
    </div>
  );
});

export const FormSelect = memo(function FormSelect({ 
  label, 
  name, 
  value, 
  onChange, 
  options = [], 
  required = false 
}: FormFieldProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(name, e.target.value);
  }, [name, onChange]);

  return (
    <div className={modalStyles.formGroup}>
      <label className={modalStyles.label}>{label}</label>
      <select
        value={value}
        onChange={handleChange}
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
});

export const FormTextarea = memo(function FormTextarea({ 
  label, 
  name, 
  value, 
  onChange, 
  rows = 3, 
  required = false 
}: FormFieldProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(name, e.target.value);
  }, [name, onChange]);

  return (
    <div className={modalStyles.formGroup}>
      <label className={modalStyles.label}>{label}</label>
      <textarea
        value={value}
        onChange={handleChange}
        className={modalStyles.textarea}
        rows={rows}
        required={required}
      />
    </div>
  );
});

