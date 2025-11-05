"use client";
import React from "react";
import Link from "next/link";
import {
  LayoutDashboard, BarChart2, MessageSquare, CreditCard, User,LogOut,} from "lucide-react";

const Sidebar: React.FC = () => {
  const links: { name: string; icon: React.ReactNode; href: string }[] = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, href: "/dashboard" },
    { name: "Progress & Report", icon: <BarChart2 size={18} />, href: "/progress-report" },
    { name: "Messages", icon: <MessageSquare size={18} />, href: "/messages" },
    { name: "Fees", icon: <CreditCard size={18} />, href: "/fees" },
    { name: "Profile", icon: <User size={18} />, href: "/profile" },
  ];

  return (
    <aside className="w-64 bg-primary text-white flex flex-col justify-between min-h-screen">
      <div>
        <nav className="mt-6 flex flex-col">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 px-6 py-3 hover:bg-green-800 transition-colors duration-200"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <button className="p-4 text-left text-sm flex items-center gap-2 hover:bg-green-800 transition-colors duration-200">
        <LogOut size={18} />
        <span>Log Out</span>
      </button>
    </aside>
  );
};

export default Sidebar;
