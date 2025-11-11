"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navlinks } from "@/data/NavigationLink";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import LoginPage from "@/components/layout/page";

export default function Navbar() {
  const { open, setOpen,setLoginOpen,loginOpen } = useAuth();


  return (
    <>
      <nav className="bg-background w-full fixed top-0 left-0 z-50 shadow-md border-b border-background px-4 md:px-8 py-4 flex items-center h-auto md:h-[10vh]">
        
        <div className="flex flex-2 justify-center items-center w-full">
          <Button onClick={() => setOpen(!open)} className="md:hidden mr-2">
            {open ? <X size={28} /> : <Menu size={28} />}
          </Button>
           <Image
            src="/logo.png"
            width={1000}
            height={1000}
            alt="logo"
            className="w-32 md:w-48 object-contain"
          />
        </div>
        <div className="flex-5 hidden md:flex items-center gap-20 text-primary font-semibold leading-snug justify-center">
          {navlinks.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className="font-semibold cursor-pointer hover:text-secondary transition"
            >
              {nav.name}
            </Link>
          ))}
        </div>

        
        <div className="flex flex-1 justify-end">
          <Button
            variant="default"
            className="hidden md:block bg-secondary px-5 py-2"
            onClick={() => setLoginOpen(true)}
          >
            Login
          </Button>
        </div>

        
        {open && (
          <div className="md:hidden bg-background border-t border-primary py-4 flex flex-col gap-4 text-foreground font-semibold px-4">
            {navlinks.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                onClick={() => setOpen(false)}
                className="hover:text-secondary transition"
              >
                {nav.name}
              </Link>
            ))}

            <button
              onClick={() => {
                setLoginOpen(true);
                setOpen(false);
              }}
              className="bg-secondary px-4 py-2 rounded-md font-semibold text-primary w-full text-center"
            >
              Login
            </button>
          </div>
        )}
      </nav>

      
      {loginOpen && <LoginPage onClose={() => setLoginOpen(false)} />}
    </>
  );
}
