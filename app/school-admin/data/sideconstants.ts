import {  LayoutDashboard,  FileText,  MessageSquare,  CreditCard,  User,  Users, CalendarCheck,  Settings,  Briefcase
} from "lucide-react";

export const sideItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/school-admin" },
  { title: "Classes", icon: Users, path: "/school-admin/classes" },
  { title: "File Library", icon: FileText, path: "/school-admin/file-library" },
  { title: "Attendance", icon: CalendarCheck, path: "/school-admin/attendance" },
  { title: "BOM", icon: CreditCard, path: "/school-admin/bom" },
  { title: "Teachers", icon: User, path: "/school-admin/teachers" },
  { title: "Students", icon: Users, path: "/school-admin/students" },
  { title: "Staffs", icon: Briefcase, path: "/school-admin/staffs" },
  { title: "Messages", icon: MessageSquare, path: "/school-admin/messages" },
  { title: "Profile", icon: User, path: "/school-admin/profile" },
  { title: "Settings", icon: Settings, path: "/school-admin/settings" },
];

