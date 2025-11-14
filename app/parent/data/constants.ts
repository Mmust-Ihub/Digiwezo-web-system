import { LayoutDashboard, FileText, MessageSquare, CreditCard, User } from "lucide-react";

export const navItems = [
    { title: "Dashboard", icon: LayoutDashboard, path: "/parent/" },
    { title: "Progress & Report", icon: FileText, path: "/parent/progressandreport" },
    { title: "Messages", icon: MessageSquare, path: "/parent/messages" },
    { title: "Fees", icon: CreditCard, path: "/parent/fees" },
    { title: "Profile", icon: User, path: "/parent/profile" },
];

export const subjects = [
    { name: "English", score: 88, color: "bg-blue-600" },
    { name: "Kiswahili", score: 84, color: "bg-green-600" },
    { name: "Mathematics", score: 72, color: "bg-pink-600" },
    { name: "Science & Technology", score: 80, color: "bg-purple-800" },
    { name: "Creative Arts", score: 94, color: "bg-orange-500" },
    { name: "Social Studies", score: 70, color: "bg-red-700" },
    { name: "Physical & Health Education", score: 90, color: "bg-cyan-500" },
];