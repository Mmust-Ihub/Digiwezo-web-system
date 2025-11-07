import { useState, ChangeEvent } from "react";

import * as z from "zod";
import { useZodForm } from "./useZodForm";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+?[0-9\s-()]{8,}$/, "Invalid phone number format"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
}

export function useContact() {
  const form = useZodForm(contactFormSchema, {
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      alert(`Failed to send message. Please try again.${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  return {
    handleChange,
    handleSubmit,
    errors,
    setErrors,
    setIsSubmitting,
    isSubmitting,
    formData,
    setFormData,
    form
  };
}
