import { inter } from "@/layout";
import { Bell, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-border flex items-center justify-between px-8 z-10">
      <Link href="/" className="flex items-center gap-3">
        <div className="right-20 relative w-[285px] h-[285px]">
          <Image
            src="/logo.png"
            alt="DigiWezo Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className={` ${inter.className} text-2xl font-bold text-cyan-500`}>BOOKER ACADEMY</h1>
      </Link>
      <div className="flex items-center gap-4">
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
