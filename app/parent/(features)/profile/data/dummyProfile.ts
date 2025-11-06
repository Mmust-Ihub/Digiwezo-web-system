import { UserProfile } from '@/parent/(features)/profile/types/profile';

const PETER_JOHNSON_PROFILE: UserProfile = {
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

export async function getInitialProfileData(): Promise<UserProfile> {
  console.log('Server: Fetching initial profile data...');
  
  await new Promise(resolve => setTimeout(resolve, 500)); 

  return PETER_JOHNSON_PROFILE;
}
