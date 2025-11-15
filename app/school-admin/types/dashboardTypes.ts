import { LucideIcon } from "lucide-react";

export interface AdminProfile {
  name: string;
  description?: string; 
  admissionNo: string;
  image?: string;        
}

export interface StatItem {
  label: string;
  value: number;
  category: string;
  icon: LucideIcon;
}

export interface SummaryItem {
  title: string;
  key: keyof DashboardSummary;
  img: string;
}

export interface ActionItem {
  label: string;
  icon: string; 
}

export interface DashboardSummary {
  attendance: {
    rate: number;
    desc: string;
  };
  performance: {
    grade: string;
    desc: string;
  };
  exams: {
    count: number;
    desc: string;
  };
  disciplinary: {
    count: number;
    desc: string;
  };
}

export interface UserInfo {
  name: string;
  subtitle: string;
  image: string;
}

export interface CalendarMonth {
  name: string;
  year: number;
  days: number;
  start: number;
}

export type CalendarSize = "small" | "large";
