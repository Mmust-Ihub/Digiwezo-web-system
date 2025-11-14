import { ProfileSection } from "@/school-admin/(features)/Profile/interface/profile";

export const teacherSections: ProfileSection[] = [
  {
    title: "Personal Details",
    fields: [
      { label: "TSC No.", name: "tscNo" },
      { label: "Name", name: "name" },
      { label: "Gender", name: "gender" },
      { label: "National ID.", name: "nationalId" },
      { label: "Date Of Birth", name: "dob" },
      { label: "Nationality", name: "nationality" },
      { label: "Religion", name: "religion" },
      { label: "Email", name: "email" },
      { label: "Language", name: "language" },
      { label: "Disability", name: "disability" },
      { label: "Telephone Number", name: "phone" },
      { label: "Home Address", name: "address" },
    ],
  },
  {
    title: "Emergency Contact",
    fields: [
      { label: "Name", name: "emergencyName" },
      { label: "Telephone No.", name: "emergencyPhone" },
      { label: "Relationship", name: "relationship" },
    ],
  },
];
