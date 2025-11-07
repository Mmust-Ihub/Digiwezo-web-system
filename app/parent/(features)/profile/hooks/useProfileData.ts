"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { UserProfile } from "@/parent/(features)/profile/types/profile";

interface UseProfileDataResult {
    formData: UserProfile;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    isLoading: boolean;
    error: string | null;
}

export function useProfileData(initialData: UserProfile): UseProfileDataResult {
    const [formData, setFormData] = useState<UserProfile>(initialData);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            //   const response = await fetch("/api/profile", {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(formData),
            //   });

            //   if (!response.ok) {
            //     const result = await response.json();
            //     throw new Error(result.message || "Failed to update profile.");
            //   }

            alert("✅ Profile updated successfully:");
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        isLoading,
        error,
    };
}
