export interface AboutCardData{
    image:string,
    label:string,
}
export interface TestimonialCardData {
  text: string;
  name: string;
  role: string;
  image: string;
}

export interface BookDemoProp {
  onSubmit: (data: {
    name: string;
    email: string;
    phone: string;
    school: string;
    role: string;
    date:string,
  }) => void;
  isLoading: boolean;
  defaultValues: {
    name: string;
    email: string;
    phone: string;
    school: string;
    role: string;
  };
}export interface NavigationLink {
  name: string;
  href: string;
}
export interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
}
export interface InputField {
  label: string;
  value: string;
}

export interface Section {
  title: string;
  fields: InputField[];
}
export interface LoginPageProps {
  onClose: () => void;
}export interface NavigationLink {
  name: string;
  href: string;
}
export interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
}
export interface ProfileCardProps {
  name: string;
  username: string;
  email: string;
  avatarSrc?: string;
};
