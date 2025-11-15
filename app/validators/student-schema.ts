import { z } from "zod";

const phoneSchema = z.object({
  countryCode: z.string().min(1, "Country code is required"),
  number: z
    .string()
    .min(9, "Phone number must have at least 9 digits")
    .max(13, "Phone number cannot exceed 13 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),
});

export const PersonalInformationSchema = z.object({
  admissionNumber: z
    .string()
    .min(1, "Admission number is required")
    .regex(/^[A-Za-z0-9-]+$/, "Invalid admission number format"),

  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

  form: z.string().min(1, "Form is required"),

  stream: z.string().min(1, "Stream is required"),

  gender: z.string().min(1, "Gender is required"),

  boardingStatus: z.string().min(1, "Boarding status is required"),

  primaryPhone: phoneSchema,

  secondaryPhone: phoneSchema.optional().or(
    z.object({
      countryCode: z.string(),
      number: z.string(),
    })
  ),

  residence: z.string().min(1, "Residence is required"),

  studentImage: z
    .instanceof(File)
    .optional()
    .nullable()
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024,
      "Image size must be less than 5MB"
    )
    .refine(
      (file) =>
        !file || ["image/jpeg", "image/jpg", "image/png"].includes(file.type),
      "Only .jpg, .jpeg, and .png formats are supported"
    ),
});

export type PersonalInformationType = z.infer<typeof PersonalInformationSchema>;
