import { AboutCardData, TestimonialCardData } from "@/interfaces/interface";

 export const aboutData:AboutCardData[] = [
       {
        image:"/assets/timetable.png",
        label:'Timetable & scheduling',
    },
    {
        image:"/assets/report.png",
        label:'Exam & Grading'
    },
    {
        image:"/assets/communication.png",
        label:'Seamless Communication'
    },
    {
        image:"/assets/tracking.png",
        label:'Performance Tracking'
    },
 
];

export  const testimonials:TestimonialCardData[] = [
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