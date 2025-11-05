"use client";

import { useState, useTransition, ChangeEvent, FormEvent } from 'react';
import { UserProfile } from '@/parent/(features)/profile/types/profile';

interface UseProfileDataResult {
  formData: UserProfile;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
  error: string | null;
}


export function useProfileData(initialData: UserProfile): UseProfileDataResult {
  const [formData, setFormData] = useState<UserProfile>(initialData);

  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); 

    startTransition(async () => {
      try {
        const response = await fetch('/api/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const result = await response.json();
          throw new Error(result.message || 'Failed to update profile.');
        }

        console.log('Profile updated successfully:', formData);

      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unexpected error occurred.');
        }
      }
    });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isPending,
    error,
  };
}