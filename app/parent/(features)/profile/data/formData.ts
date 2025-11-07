interface FieldConfig {
  label: string;
  name: keyof any; 
  placeholder: string;
  type?: 'text' | 'tel' | 'email' | 'number';
}

export const personalInfoFields: FieldConfig[] = [
  { label: "Admission Number", name: "admissionNumber", placeholder: "e.g., 2734" },
  { label: "Grade", name: "grade", placeholder: "e.g., 6" },
  { label: "Gender", name: "gender", placeholder: "e.g., Male" },
  { label: "Residence", name: "residence", placeholder: "e.g., Nairobi" },
  { label: "UPI", name: "upi", placeholder: "e.g., 12345678" },
];

export const contactInfoFields: FieldConfig[] = [
  { label: "Emergency Contact Name", name: "emergencyContactName", placeholder: "e.g., Eric Johnson" },
  { label: "Relationship", name: "relationship", placeholder: "e.g., Father" },
  { label: "Primary Contact", name: "primaryContact", placeholder: "e.g., +2547XXXXXXXX", type: 'tel' },
  { label: "Secondary Contact", name: "secondaryContact", placeholder: "Optional contact number", type: 'tel' },
];

export const profileFormSections = [
    { title: "Personal Information", fields: personalInfoFields },
    { title: "Emergency Contact", fields: contactInfoFields },
];
