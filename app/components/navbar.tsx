"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background w-full fixed top-0 left-0 z-50 shadow-md border-b border-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
      
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden"
        >
          {open ? <X size={28}/> : <Menu size={28}/> }
        </button>

        <div className="flex items-center gap-3 md:order-0 order-1 mx-auto md:mx-0 scale-110 md:scale-125">
          <Image 
            src="/logo.png"
            width={65}
            height={65}
            alt="logo"
            className="object-contain"
          />
          
        </div>

        
        <nav className="hidden md:flex items-center gap-20 text-primary font-semibold leading-snug">
          <Link href="/">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
         <Link 
          href="/login"
          className="hidden md:block bg-secondary px-5 py-2 rounded-lg font-semibold text-primary leading-snug shadow-sm"
        >
          Login
        </Link>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-primary py-4 flex flex-col gap-4 text-foreground text-body font-semibold px-4">
          <Link onClick={() => setOpen(false)} href="/">About Us</Link>
          <Link onClick={() => setOpen(false)} href="/services">Services</Link>
          <Link onClick={() => setOpen(false)} href="/pricing">Pricing</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact Us</Link>
          <Link 
            onClick={() => setOpen(false)}
            href="/login"
            className="bg-secondary px-4 py-2 rounded-md font-semibold text-primary w-full text-center"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
