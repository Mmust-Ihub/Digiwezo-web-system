import FormFileField from "@/components/ui/formfilefieldupload";
import FormPhoneField from "@/components/ui/formPhoneField";
import FormSelectField from "@/components/ui/formSelectField";
import FormTextField from "@/components/ui/formTextField";
import { PersonalInformationType } from "@/validators/student-schema";
import { Controller, Control, FieldErrors, FieldError } from "react-hook-form";
import {
  FormFieldConfig,
  PhoneValue,
} from "@/school-admin/(features)/students/types/interface";


interface DynamicFieldRendererProps {
  field: FormFieldConfig;
  control: Control<PersonalInformationType>;
  errors: FieldErrors<PersonalInformationType>;
  isLoading: boolean;
}

export default function DynamicFieldRenderer({
  field,
  control,
  errors,
  isLoading,
}: DynamicFieldRendererProps) {
  const getFieldError = (fieldName: keyof PersonalInformationType) => {
    const error = errors[fieldName];

    if (fieldName === "primaryPhone" || fieldName === "secondaryPhone") {
   const phoneError = error as
     | { number?: FieldError; countryCode?: FieldError }
     | undefined;

     return phoneError?.number?.message || (error as FieldError)?.message;
    }

    return error?.message as string | undefined;
  };

  return (
    <Controller
      control={control}
      name={field.name}
      render={({ field: controllerField }) => {
        const fieldType = field.type;

        if (fieldType === "text") {
          return (
            <FormTextField
              label={field.label}
              name={field.name}
              value={controllerField.value as string}
              onChange={controllerField.onChange}
              placeholder={field.placeholder}
              error={getFieldError(field.name)}
              isRequired={field.isRequired}
              isLoading={isLoading}
            />
          );
        }

        if (fieldType === "select") {
          return (
            <FormSelectField
              label={field.label}
              name={field.name}
              value={controllerField.value as string}
              onChange={controllerField.onChange}
              options={field.options || []}
              placeholder={field.placeholder}
              error={getFieldError(field.name)}
              isRequired={field.isRequired}
              isLoading={isLoading}
            />
          );
        }

        if (fieldType === "phone") {
          return (
            <FormPhoneField
              label={field.label}
              name={field.name}
              value={
                (controllerField.value as PhoneValue) || {
                  countryCode: "+254",
                  number: "",
                }
              }
              onChange={controllerField.onChange}
              error={getFieldError(field.name)}
              helperText={field.helperText}
              isRequired={field.isRequired}
              isLoading={isLoading}
            />
          );
        }

        if (fieldType === "file") {
          return (
            <FormFileField
              label={field.label}
              name={field.name}
              onChange={controllerField.onChange}
              error={getFieldError(field.name)}
              isRequired={field.isRequired}
              isLoading={isLoading}
              accept={field.accept}
            />
          );
        }

        return <div />;
      }}
    />
  );
}
