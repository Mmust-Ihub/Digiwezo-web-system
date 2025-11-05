import { AboutCardData, TestimonialCardData } from "@/interfaces/interface";

export const aboutData: AboutCardData[] = [
  {
    image: "/assets/timetable.png",
    label: "Timetable & scheduling",
  },
  {
    image: "/assets/report.png",
    label: "Exam & Grading",
  },
  {
    image: "/assets/communication.png",
    label: "Seamless Communication",
  },
  {
    image: "/assets/tracking.png",
    label: "Performance Tracking",
  },
];

export const testimonials: TestimonialCardData[] = [
  {
    text: "This system has transformed our school operations! Managing student records and communication has never been easier.",
    name: "Dr. Michael Johnson",
    role: "Principal, Uwezo High",
    image: "/assets/person1.png",
  },
  {
    text: "I love how I can track my child's performance in real-time!",
    name: "Lucy Mwangi",
    role: "Parent",
    image: "/assets/person2.png",
  },
  {
    text: "Grading and exam management used to be time-consuming, but this system has made the process so much easier!",
    name: "David Thompson",
    role: "Teacher",
    image: "/assets/person3.png",
  },
];
export const services = [
  {
    id: 1,
    title: "Seamless School Onboarding",
    desc: "Quickly launch your eLearning environment. We handle registration, customization, and user access, so you can focus on teaching",
    img: "/assets/services/together.png",
  },
  {
    id: 2,
    title: "Streamlined System Integration",
    desc: "Connect your LMS and SIS effortlessly. Payment and Subcription Management. We ensure data syncs smoothly, saving you time and reducing errors..",
    img: "/assets/services/cloud.png",
  },

  {
    id: 3,
    title: "Seamless Communication",
    desc: "School-Wide Announcements, Messaging & Forums, Event & Calendar Management.",
    img: "/assets/services/cms.png",
  },
  {
    id: 4,
    title: "Content Management System",
    desc: "Upload and share learning materials with ease. Access pre-loaded resources and keep your content organized in one place.",
    img: "/assets/services/communication.png",
  },
  {
    id: 5,
    title: "Reporting & Analytics",
    desc: "School Performance Dashboards, Custom Reports, Track engagement",
    img: "/assets/services/dashboard.png",
  },
  {
    id: 6,
    title: "Seamless and efficient eLearning environment",
    desc: "Empowering educational institutions with comprehensive solutions to streamline onboarding, enhance system integration, and foster collaboration",
    img: "/assets/tracking.png",
  },
];

 export const contactFormFields = [
  {
    name: "name",
    label: "Name",
    placeholder: "Byrone Kingsly",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "user@gmail.com",
    type: "text",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    placeholder: "+254712345678",
    type: "text",
  },
  {
    name: "message",
    label: "Type your message here",
    placeholder: "Type your reply message",
    type: "textarea",
  },
];
