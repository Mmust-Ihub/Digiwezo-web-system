"use client";

import { Facebook, Instagram, X as Twitter } from "lucide-react";
import Image from "next/image";
interface QuickLink {
  name: string;
  href: string;
}

interface PartnerLink {
  name: string;
  href: string;
}

interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "#contact" },
  { name: "About Us", href: "#about" },
];

const partnerLinks: PartnerLink[] = [
  { name: "Mmust", href: "https://mmust.ac.ke" },
  { name: "Mmust-iHub", href: "https://mmustihub.com" },
];

const socialLinks: SocialLink[] = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-gradient text-primary py-12 px-6 md:px-20 flex flex-col">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-3 gap-10 md:gap-16 items-start h-full justify-end">
        
        <div className="">
          <Image src="/logo.png" width={1000} height={1000} alt="DigiWezo logo" className="w-20 h-20 object-contain scale-200" />
          <p className="font-semibold text-background">Contact Us</p>
          <p className="text-sm text-foreground">+254 796 564 709</p>
          <p className="text-sm text-foreground">info@digiwezo.co.ke</p>
        </div>

      
        <div className="space-y-3">
          <p className="font-semibold text-background">Quick Links</p>
          <ul className="space-y-1 text-sm text-foreground">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-6">
          <div className="space-y-3">
            <p className="font-semibold text-background">Partner Links</p>
            <ul className="space-y-1 text-sm text-foreground">
              {partnerLinks.map((partner, i) => (
                <li key={i}>
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {partner.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-background">Let's Connect</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 border border-white/10 transition"
                  >
                    <Icon size={14} className="text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        
        <div className="space-y-3">
          <p className="font-semibold text-background">
            Get Our Latest Updates
          </p>
          <form className="flex w-full">
            <input
              type="email"
              placeholder="Email"
              className="grow px-3 py-2 text-sm rounded-l-md border border-primary focus:outline-none bg-background"
            />
            <button
              type="submit"
              className="bg-primary text-background px-4 py-2 text-sm rounded-r-md hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm mt-6 text-foreground space-y-1 flex-1 flex flex-col justify-center items-center">
        <p>
          <span className="text-background font">©</span> 2025 All Rights
          Reserved by DigiWezo
        </p>
        <p>Web Design by Mmust i-Hub</p>
      </div>
    </footer>
  );
}
