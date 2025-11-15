"use client";

import { cn } from "@/lib/utils";
import { sideItems } from "@school-admin/data/sideconstants";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-[12vh] h-[88vh] w-64 bg-primary flex flex-col justify-between py-0 pt-2">
      <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
        {sideItems.map((item, index) => {
           const isActive =
             pathname === item.path ||
             (item.path === "/school-admin"
<<<<<<< HEAD
               ? false
=======
               ? false 
>>>>>>> aboutUs
               : pathname.startsWith(`${item.path}/`));

          return (
            <Link
              key={index}
              href={item.path}
              className={cn(
                "flex items-center gap-6 px-4 py-3 rounded-lg transition-colors mb-1",
                "hover:bg-white/10 text-white hover:text-white/90",
                isActive && "bg-white text-primary font-medium"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>

      <div className="px-4 mt-auto">
        <button className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/10 rounded-lg transition-colors w-full">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};
