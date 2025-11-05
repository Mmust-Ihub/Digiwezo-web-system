"use client";

import { Facebook, Instagram, X as Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-gradient-end to-gradient-start text-primary py-12 px-6 md:px-20">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 items-start">
        
          <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="DigiWezo logo" className="w-20 h-20" />
            
          </div>
          <p className="font-semibold text-background">Contact Us</p>
          <p className="text-sm text-foreground leading-relaxed">+254 796 564 709</p>
          <p className="text-sm text-foreground leading-relaxed">info@digiwezo.co.ke</p>
        </div>

         <div className="space-y-3">
          <p className="font-semibold text-background">Quick Links</p>
          <ul className="space-y-1 text-sm text-foreground">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

         <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-6">
          
          <div className="space-y-3">
            <p className="font-semibold text-background">Partner Links</p>
            <ul className="space-y-1 text-sm text-foreground">
              <li><a href="https://mmust.ac.ke" target="_blank" rel="noopener noreferrer">Mmust</a></li>
              <li><a href="https://mmustihub.com" target="_blank" rel="noopener noreferrer">Mmust-iHub</a></li>
            </ul>
          </div>

           <div className="space-y-3">
            <p className="font-semibold text-background">Let's Connect</p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 border border-white/10 transition">
                <Facebook size={14} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 border border-white/10 transition"
              >
                <Instagram size={14} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 border border-white/10 transition"  >
                <Twitter size={14} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-background">Get Our Latest Updates</p>
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

      <div className="text-center text-sm mt-6 text-foreground space-y-1">
        <p><span className="text-background font">©</span> 2025 All Rights Reserved by DigiWezo</p>
        <p>Web Design by Mmust i-Hub</p>
      </div>
    </footer>
  );
}
