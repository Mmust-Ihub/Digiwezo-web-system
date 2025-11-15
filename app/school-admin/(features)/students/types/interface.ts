import { LucideIcon } from "lucide-react";

export interface Tab {
  label: string;
  value: string;
  icon?: LucideIcon;
}
<<<<<<< HEAD

export interface Option {
  label: string;
  value: string;
}

export interface PhoneValue {
  countryCode: string;
  number: string;
}

export interface PersonalInformationType {
  admissionNumber: string;
  name: string;
  form: string;
  stream: string;
  gender: string;
  boardingStatus: string;
  primaryPhone: PhoneValue;
  secondaryPhone: PhoneValue;
  residence: string;
  studentImage?: File | null;
}

export type FieldType = "text" | "select" | "phone" | "file";

export interface FormFieldConfig {
  name: keyof PersonalInformationType;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: Option[];
  isRequired?: boolean;
  helperText?: string;
  accept?: string;
}
=======
>>>>>>> aboutUs
