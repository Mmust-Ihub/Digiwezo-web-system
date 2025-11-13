import { NavigationLink,  SocialLink } from "@/interfaces/interface";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const navlinks: NavigationLink[] = [
  
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "#contact" },
  { name: "About Us", href: "#about" }
];
export const partnerLinks: NavigationLink[] = [
  { name: "Mmust", href: "https://mmust.ac.ke" },
  { name: "Mmust-iHub", href: "https://mmustihub.com" },
];

export const socialLinks: SocialLink[] = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];