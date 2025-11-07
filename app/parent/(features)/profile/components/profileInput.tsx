"use client";

import React, { ChangeEvent } from 'react';
import { Input } from '@/components/ui/inputWithLabel';
import { UserProfile } from '@/parent/(features)/profile/types/profile'; 
import { personalInfoFields, contactInfoFields } from '@/parent/(features)/profile/data/formData'; 

interface ProfileSectionProps {
  fields: typeof personalInfoFields | typeof contactInfoFields;
  formData: UserProfile;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ fields, formData, handleChange }) => {
  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <Input
          key={field.name as string}
          label={field.label}
          name={field.name as keyof UserProfile}
          value={formData[field.name as keyof UserProfile] as string}
          onChange={handleChange}
          placeholder={field.placeholder}
          type={field.type}
        />
      ))}
    </div>
  );
};
