export interface UserProfile {

    admissionNumber: string;
  grade: string;
  gender: 'Male' | 'Female' | 'Other'; 
  residence: string;
  upi: string; 

  emergencyContactName: string;
  relationship: string; 
  primaryContact: string; 
  secondaryContact: string; 

  name: string;
  avatarSrc?: string; 
}