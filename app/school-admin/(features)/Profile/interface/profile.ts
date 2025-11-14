export interface ProfileField {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export interface ProfileSection {
  title: string;
  fields: ProfileField[];
}
