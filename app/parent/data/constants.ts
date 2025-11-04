import { LayoutDashboard, FileText, MessageSquare, CreditCard, User } from "lucide-react";

export const navItems = [
    { title: "Dashboard", icon: LayoutDashboard, path: "/parent" },
    { title: "Progress & Report", icon: FileText, path: "/parent/progress" },
    { title: "Messages", icon: MessageSquare, path: "/parent/messages" },
    { title: "Fees", icon: CreditCard, path: "/parent/fees" },
    { title: "Profile", icon: User, path: "/parent/profile" },
];