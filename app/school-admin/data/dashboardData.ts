import { User, Users, Book, School } from "lucide-react";

export const dashboardData = {
  user: {
    name: "Mr. Richard Mulongo",
    subtitle: "Manage the school’s running from your comfort",
    image: "/profile.png", // place in public folder
  },
  stats: [
      { label: "Teachers", value: 12, category: "staff", icon: User },
  { label: "Staff", value: 8, category: "staff", icon: Users },
  { label: "Students", value: 120, category: "student", icon: School },
  { label: "Streams", value: 5, category: "student", icon: Book },
  ],
summary: {
  attendance: { rate: 96, desc: "Overall Attendance 96% today" },
  performance: { grade: "B", desc: "Overall Performance B this term" },
  exams: { count: 3, desc: "Scheduled Exams 3 exams this term" },
  disciplinary: { count: 4, desc: "Cases handled 4 this term" },
},
  actions: [
    { label: "Add Student", icon: "🎓" },
    { label: "Mark Attendance", icon: "📘" },
    { label: "Send Announcement", icon: "📢" },
    { label: "Schedule Exams", icon: "🗓️" },
  ],


 summaries: [
    {
      title: "Attendance Rate",
      key: "attendance",
      img: "/Attendance.png",
      // for value inside image
    },
    {
      title: "Performance Rate",
      key: "performance",
      img: "/Performance.png",
    },
    {
      title: "Upcoming Exams",
      key: "exams",
      img: "/Exams.png",
    },
    {
      title: "Disciplinary Cases",
      key: "disciplinary",
      img: "/cases.png",
    },
  ],
};
