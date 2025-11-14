"use client"

import { cn } from "@/lib/utils";
import { sideItems } from "@school-admin/data/sideconstants";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
    const pathname = usePathname()
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-blue-400 flex flex-col">
            <div className="p-6">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-primary rounded-full" />
                    </div>
                    <span className="text-custom-white font-bold text-lg">DigiWezo</span>
                </div>
            </div>
            <nav className="flex-1 px-4 space-y-1">
                {sideItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                "hover:bg-white/10 text-custom-white/90",
                                isActive && "bg-custom-white text-custom-grey font-medium"
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
