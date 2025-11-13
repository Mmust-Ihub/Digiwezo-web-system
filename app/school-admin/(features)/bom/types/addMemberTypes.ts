export interface FormData {
  fullName: string;
  email: string;
  gender: string;
  phone: string;
  idNumber: string;
  address: string;
}

export interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (memberData: FormData) => void;
}

export interface FormFieldProps {
  label: string;
  name: keyof FormData;
  type: string;
  value: string;
  onChange: (field: keyof FormData, value: string) => void;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
}

export interface ModalLayoutProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

