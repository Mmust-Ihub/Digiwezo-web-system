import { ProfileSection } from "@/interfaces/interface";

export const studentSections: ProfileSection[] = [
  {
    title: "Personal Information",
    fields: [
      { label: "Admission Number", name: "admissionNo" },
      { label: "Grade", name: "grade" },
      { label: "Gender", name: "gender" },
      { label: "Residence", name: "residence" },
      { label: "UPI", name: "upi" },
    ],
  },
  {
    title: "Emergency Contact",
    fields: [
      { label: "Emergency Contact Name", name: "emergencyName" },
      { label: "Relationship", name: "relationship" },
      { label: "Primary Contact", name: "primaryContact" },
      { label: "Secondary Contact", name: "secondaryContact" },
    ],
  },
];
