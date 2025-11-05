import { z } from "zod";

export const DemoRequestSchema = z.object({
  name: z.string().min(1, "Your name is required"),
  email: z.string().email("Enter a valid email").min(5, "Email is required"),
  phone: z
    .string()
    .min(10, "Phone number must have at least 10 digits")
    .max(13, "Phone number cannot exceed 13 digits"),
  role: z.string().min(3, "Please specify your role"),
  school: z.string().min(3, "Please enter your school or institution"),
  date: z
    .string()
    .min(1, "Demo date is required")
    .default(new Date().toISOString().split("T")[0]),
});

export type DemoRequestType = z.infer<typeof DemoRequestSchema>;

export const fields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email address",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
  },
  {
    name: "role",
    label: "Role",
    type: "text",
    placeholder: "Enter your role (Admin, Teacher, etc.)",
  },
  {
    name: "school",
    label: "School",
    type: "text",
    placeholder: "Enter your school or institution name",
  },
  {
    name: "date",
    label: "Preferred Demo Date",
    type: "date",
    placeholder: "Select a preferred date",
  },
] as const;
