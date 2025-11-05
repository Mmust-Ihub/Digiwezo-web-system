import { ProfileCard } from '@/parent/(features)/profile/components/ProfileCard';
import { ProfileForm } from '@/parent/(features)/profile/components/ProfileForm';

import { getInitialProfileData } from '@/parent/(features)/profile/data/dummyProfile';

export default async function ProfilePage() {
  const initialData = await getInitialProfileData();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      
      <h1 className="text-title font-extrabold text-primary mb-8 border-b pb-4">
        Profile
      </h1>
      
      <div className="flex flex-col md:flex-row bg-white p-8 shadow-2xl rounded-xl max-w-6xl mx-auto border border-gray-100">
        
        <ProfileCard 
          name={initialData.name} 
        />

        <ProfileForm initialData={initialData} />
      </div>

    </div>
  );
}
