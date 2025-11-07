"use client";

import { useProfileData } from '@/parent/(features)/profile/hooks/useProfileData';
import { UserProfile } from '@/parent/(features)/profile/types/profile';
import { Button } from '@/components/ui/button';
import { ProfileSection } from '@/parent/(features)/profile/components/profileInput'; // Local Section Renderer
import { personalInfoFields, contactInfoFields } from '@/parent/(features)/profile/data/formData'; // Global config

interface ProfileFormProps {
    initialData: UserProfile;
}

export function ProfileForm({ initialData }: ProfileFormProps) {
    const { formData, handleChange, handleSubmit, isLoading, error } = useProfileData(initialData);

    return (
        <div className="flex-1 pl-8">
            {error && (
                <p className="p-3 mb-4 text-sm font-medium text-red-700 bg-red-100 rounded-lg">
                    Error: {error}
                </p>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-10 gap-y-4">

                <div className="col-span-1">
                    <h3 className="text-lg font-semibold text-primary mb-4 border-b pb-2">
                        Personal Information
                    </h3>
                    <ProfileSection
                        fields={personalInfoFields}
                        formData={formData}
                        handleChange={handleChange}
                    />
                </div>

                <div className="col-span-1">
                    <h3 className="text-lg font-semibold text-primary mb-4 border-b pb-2">
                        Emergency Contact Information
                    </h3>
                    <ProfileSection
                        fields={contactInfoFields}
                        formData={formData}
                        handleChange={handleChange}
                    />
                </div>

                <div className="col-span-2 pt-8 flex justify-start">
                    <Button
                        type="submit"
                        disabled={isLoading}
                        variant="secondary"
                    >
                        Update Profile
                    </Button>
                </div>
            </form>
        </div>
    );
}
