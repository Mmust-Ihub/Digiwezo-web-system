import { inter } from "@/layout";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative w-12 h-12">
          <Image
            src="/logo.png"
            alt="DigiWezo Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className={`${inter.className} text-2xl font-bold text-primary`}>
          BOOKER ACADEMY
        </h1>
      </Link>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-gray-700" />
        </div>
      </div>
    </header>
  );
};

