"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "../../components/ui/button";
interface NavigationLink {
  name: string;
  href: string;
}
const navlinks: NavigationLink[] = [
  
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "#contact" },
  { name: "About Us", href: "#about" }
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-background w-full fixed top-0 left-0 z-50 shadow-md border-b border-background px-8 py-8 flex flex-row items-center h-screen md:h-[10vh]">
      {" "}
      <div className="flex flex-2 justify-center items-center h-full w-full">
        {" "}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {" "}
          {open ? <X size={28} /> : <Menu size={28} />}{" "}
        </button>{" "}
        <Image
          src="/logo.png"
          width={1000}
          height={1000}
          alt="logo"
          className="w-4/5 object-cover"
        />{" "}
      </div>{" "}
      <div className="flex-5 h-full hidden md:flex items-center gap-20 text-primary font-semibold leading-snug justify-center">
        {" "}
        {navlinks.map((nav, index) => (
          <a
            key={index}
            href={nav.href}
            className="font-semibold cursor-pointer hover:text-secondary transition"
          >
            {" "}
            {nav.name}{" "}
          </a>
        ))}{" "}
      </div>{" "}
      <div className="flex flex-1">
        {" "}
        <Button
          variant="default"
          className="hidden md:block bg-secondary px-5 py-2 w-full"
        >
          {" "}
          Login{" "}
        </Button>{" "}
      </div>{" "}
      {open && (
        <div className="md:hidden bg-background border-b border-primary py-4 flex flex-col gap-4 text-foreground text-body font-semibold px-4">
          {" "}
          {navlinks.map((nav, index) => (
            <a
              key={index}
              href={nav.href}
              onClick={() => setOpen(false)}
              className="font-semibold cursor-pointer hover:text-secondary transition"
            >
              {" "}
              {nav.name}{" "}
            </a>
          ))}{" "}
          <a
            onClick={() => setOpen(false)}
            href="#"
            className="bg-secondary px-4 py-2 rounded-md font-semibold text-primary w-full text-center"
          >
            {" "}
            Login{" "}
          </a>{" "}
        </div>
      )}{" "}
    </nav>
  );
}
