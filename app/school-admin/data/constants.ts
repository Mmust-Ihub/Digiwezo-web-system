import {
  LayoutDashboard,
  FileText,
  Cloud,
  ClipboardList,
  Briefcase,
  Users,
  GraduationCap,
  MessageSquare,
  User,
  Settings,
} from "lucide-react";

export const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/school-admin" },
  { title: "Classes", icon: FileText, path: "/school-admin/classes" },
  { title: "File Library", icon: Cloud, path: "/school-admin/file-library" },
  { title: "Attendance", icon: ClipboardList, path: "/school-admin/attendance" },
  { title: "BOM", icon: Briefcase, path: "/school-admin/bom" },
  { title: "Teachers", icon: Users, path: "/school-admin/teachers" },
  { title: "Students", icon: GraduationCap, path: "/school-admin/students" },
  { title: "Staffs", icon: Users, path: "/school-admin/staffs" },
  { title: "Messages", icon: MessageSquare, path: "/school-admin/messages" },
  { title: "Account", icon: User, path: "/school-admin/account" },
  { title: "Settings", icon: Settings, path: "/school-admin/settings" },
];

