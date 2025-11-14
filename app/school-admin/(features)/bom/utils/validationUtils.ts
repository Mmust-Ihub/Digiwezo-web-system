export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+254|0)?[0-9]{9,10}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength;
};

export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.trim().length <= maxLength;
};

export const validateFullName = (name: string): boolean => {
  const trimmedName = name.trim();
  const words = trimmedName.split(/\s+/);
  return words.length >= 2 && trimmedName.length >= 3;
};

export const validateIdNumber = (idNumber: string): boolean => {
  const idRegex = /^[0-9]{8}$/;
  return idRegex.test(idNumber.trim());
};

export const sanitizeInput = (input: string): string => {
  return input.trim();
};

export const sanitizePhoneNumber = (phone: string): string => {
  return phone.replace(/[^\d+]/g, '');
};

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateMemberForm = (formData: {
  fullName: string;
  email: string;
  phone: string;
  idNumber: string;
  address: string;
}): ValidationResult => {
  const errors: string[] = [];

  if (!validateRequired(formData.fullName)) {
    errors.push("Full name is required");
  } else if (!validateFullName(formData.fullName)) {
    errors.push("Please enter a valid full name (at least first and last name)");
  }

  if (!validateRequired(formData.email)) {
    errors.push("Email is required");
  } else if (!validateEmail(formData.email)) {
    errors.push("Please enter a valid email address");
  }

  if (!validateRequired(formData.phone)) {
    errors.push("Phone number is required");
  } else if (!validatePhoneNumber(formData.phone)) {
    errors.push("Please enter a valid phone number");
  }

  if (!validateRequired(formData.idNumber)) {
    errors.push("ID number is required");
  } else if (!validateIdNumber(formData.idNumber)) {
    errors.push("Please enter a valid 8-digit ID number");
  }

  if (!validateRequired(formData.address)) {
    errors.push("Address is required");
  }

  return {
    isValid: errors.length === 0,
    error: errors.length > 0 ? errors.join(", ") : undefined
  };
};

