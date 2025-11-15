import { inter } from "@/layout";
import { Bell, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="relative h-full top-0 left-0 right-0  bg-white border-b border-border flex items-center  px-4 z-10">
      <div className="w-64">

      <Link href="/" className="flex items-center gap-3">
        
          <Image
            src="/logo.png"
            alt="DigiWezo Logo"
            width={1000}
            height={1000}
            className="object-cover w-48"
            priority
          />
      </Link>
      </div>
      <div className="flex flex-1">

        <h1 className={` ${inter.className} items-start text-2xl font-bold text-cyan-500`}>BOOKER ACADEMY</h1>
      </div>
      <div className="flex items-center gap-4 ">
        <button title="notification" className="relative p-2 hover:bg-muted rounded-full transition-colors">
          <Bell className="w-5 h-5 text-primary fill" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-700" />
          </div>
          <span className={`${inter.className}font-medium text-cyan-500`}>Hi, Admin</span>
        </div>
      </div>
    </header>
  );
};
