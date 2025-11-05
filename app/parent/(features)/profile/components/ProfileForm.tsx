"use client";

import { useProfileData } from '@/parent/(features)/profile/hooks/useProfileData';
import { UserProfile } from '@/parent/(features)/profile/types/profile';

const FormInput = ({ label, name, value, onChange, placeholder, type = 'text' }: any) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-500 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="p-2 border border-primary rounded-md focus:ring-blue-500 focus:border-blue-500"
      required
    />
  </div>
);

interface ProfileFormProps {
  initialData: UserProfile;
}


export function ProfileForm({ initialData }: ProfileFormProps) {
  const { formData, handleChange, handleSubmit, isPending, error } = useProfileData(initialData);

  return (
    <div className="flex-1 pl-8">
      <h3 className="text-sub-title font-semibold text-primary mb-4 border-b pb-2">
        Personal Information
      </h3>

      {error && (
        <p className="p-3 mb-4 text-sm font-medium text-red-700 bg-red-100 rounded-lg">
          Error: {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-10 gap-y-4">
        <div className="space-y-4">
          <FormInput
            label="Admission Number"
            name="admissionNumber"
            value={formData.admissionNumber}
            onChange={handleChange}
            placeholder="e.g., 2734"
          />
          <FormInput
            label="Grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            placeholder="e.g., 6"
          />
          <FormInput
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="e.g., Male"
          />
          <FormInput
            label="Residence"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
            placeholder="e.g., Nairobi"
          />
          <FormInput
            label="UPI"
            name="upi"
            value={formData.upi}
            onChange={handleChange}
            placeholder="e.g., 12345678"
          />
        </div>

        <div className="space-y-4">
          <FormInput
            label="Emergency Contact Name"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleChange}
            placeholder="e.g., Eric Johnson"
          />
          <FormInput
            label="Relationship"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            placeholder="e.g., Father"
          />
          <FormInput
            label="Primary Contact"
            name="primaryContact"
            value={formData.primaryContact}
            onChange={handleChange}
            placeholder="e.g., +2547XXXXXXXX"
            type="tel"
          />
          <FormInput
            label="Secondary Contact"
            name="secondaryContact"
            value={formData.secondaryContact}
            onChange={handleChange}
            placeholder="Optional contact number"
            type="tel"
          />
        </div>

        <div className="col-span-2 pt-8 flex justify-start">
          <button
            type="submit"
            disabled={isPending}
            className={`
              font-bold py-3 px-8 rounded-lg transition-colors duration-200
              ${isPending 
                ? 'bg-secondary text-gray-700 cursor-not-allowed' 
                : 'bg-secondary hover:bg-yellow-400 text-black shadow-md'
              }
            `}
          >
            {isPending ? 'Updating...' : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
}