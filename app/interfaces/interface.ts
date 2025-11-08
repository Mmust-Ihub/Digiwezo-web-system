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
}
export interface NavigationLink {
  name: string;
  href: string;
}
export interface QuickLink {
  name: string;
  href: string;
}

export interface PartnerLink {
  name: string;
  href: string;
}

export interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
}