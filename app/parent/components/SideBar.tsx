"use client"

import { cn } from "@/lib/utils";
import { navItems } from "@parent/data/constants";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
    const pathname = usePathname()
    return (
        <aside className="py-6 fixed left-0 h-screen w-64 bg-primary flex flex-col z-40">

            <nav className="flex-1 px-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                "hover:bg-white/10 text-white/90",
                                isActive && "bg-white text-gray-900 font-medium"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.title}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4">
                <button className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/10 rounded-lg transition-colors w-full">
                    <LogOut className="w-5 h-5" />
                    <span>Log Out</span>
                </button>
            </div>
        </aside>
    );
};
