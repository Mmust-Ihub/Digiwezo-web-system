import { ProfileCard } from '@/parent/(features)/profile/components/ProfileCard'
import { ProfileForm } from '@/parent/(features)/profile/components/ProfileForm';
import { UserProfile } from '@/parent/(features)/profile/types/profile'


async function getInitialProfileData(): Promise<UserProfile> {
  await new Promise(resolve => setTimeout(resolve, 500)); 

  return {
    name: "Peter Johnson",
    admissionNumber: "2734",
    grade: "6",
    gender: "Male",
    residence: "",
    upi: "",
    emergencyContactName: "Eric Johnson",
    relationship: "Father",
    primaryContact: "+254756118634",
    secondaryContact: "",
  };
}

export default async function ProfilePage() {
  const initialData = await getInitialProfileData();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-primary mb-6">Profile</h1>
      
      <div className="flex bg-white p-8 shadow-xl rounded-lg min-h-[500px]">
        
        <ProfileCard 
          name={initialData.name} 
          avatarSrc={initialData.avatarSrc}
        />

        <ProfileForm initialData={initialData} />
      </div>

    </div>
  );
}