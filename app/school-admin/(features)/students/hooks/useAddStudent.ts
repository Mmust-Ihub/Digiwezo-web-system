import { useZodForm } from "@/hooks/useZodForm";
import { PersonalInformationSchema, PersonalInformationType } from "@/validators/student-schema";
import { useState } from "react";


export function useStudentForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const defaultValues: PersonalInformationType = {
    admissionNumber: "",
    name: "",
    form: "",
    stream: "",
    gender: "",
    boardingStatus: "",
    primaryPhone: {
      countryCode: "+254",
      number: "",
    },
    secondaryPhone: {
      countryCode: "+254",
      number: "",
    },
    residence: "",
    studentImage: null,
  };

  const form = useZodForm(PersonalInformationSchema, {
    defaultValues,
    mode: "onChange",
  });

  const handleSubmit = async (data: PersonalInformationType) => {
    setIsLoading(true);
    setSubmitError(null);

    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (key === "primaryPhone" || key === "secondaryPhone") {
          formData.append(key, JSON.stringify(value));
        } else if (key === "studentImage" && value instanceof File) {
          formData.append(key, value);
        } else if (value !== null && value !== undefined) {
          formData.append(key, String(value));
        }
      });

      const response = await fetch("/api/students", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit student information");
      }

      const result = await response.json();
      console.log("Student added successfully:", result);

      form.reset();

      return result;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An error occurred";
      setSubmitError(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    submitError,
    handleSubmit: form.handleSubmit(handleSubmit),
  };
}
