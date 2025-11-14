import { ProfileSection } from "@/school-admin/(features)/Profile/interface/profile";

export const studentProfile: ProfileSection = {
  title: "Personal Information",
  fields: [
    { label: "Admission Number", name: "admissionNumber" },
    { label: "Grade", name: "grade" },
    { label: "Gender", name: "gender" },
    { label: "Residence", name: "residence" },
    { label: "UPI", name: "upi" },
    { label: "Emergency Contact Name", name: "emergencyName" },
    { label: "Relationship", name: "relationship" },
    { label: "Primary Contact", name: "primaryContact" },
    { label: "Secondary Contact", name: "secondaryContact" },
  ],
};
