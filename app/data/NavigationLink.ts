import { NavigationLink,  SocialLink } from "@/interfaces/interface";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FormField } from "@/interfaces/interface";

export const navlinks: NavigationLink[] = [
  { name: "Services", href: "#services" },
  { name: "Contact Us", href: "#contact" },
  { name: "About Us", href: "#about-us" },
  { name: "Pricing", href: "/pricing" },
];
export const partnerLinks: NavigationLink[] = [
  { name: "Mmust", href: "https://mmust.ac.ke" },
  { name: "Mmust-iHub", href: "https://mmustihub.com" },
];

export const socialLinks: SocialLink[] = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];
export const formFields: FormField[] = [
    {
      name: "admissionNumber",
      placeholder: "Admission Number",
      section: "personal",
    },
    { name: "grade", placeholder: "Grade", section: "personal" },
    {
      name: "gender",
      placeholder: "Select Gender",
      section: "personal",
      type: "select",
      options: ["Male", "Female"],
    },
    { name: "residence", placeholder: "Residence", section: "personal" },
    { name: "upi", placeholder: "UPI", section: "personal" },
    {
      name: "emergencyName",
      placeholder: "Emergency Contact Name",
      section: "emergency",
    },
    { name: "relationship", placeholder: "Relationship", section: "emergency" },
    {
      name: "primaryContact",
      placeholder: "Primary Contact",
      section: "emergency",
    },
    {
      name: "secondaryContact",
      placeholder: "Secondary Contact",
      section: "emergency",
    },
  ];