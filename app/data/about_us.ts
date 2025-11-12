
export interface Stat {
  value: number;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const statsData: Stat[] = [
  { value: 200, label: "Active Institutions" },
  { value: 25, label: "Mentorship Programs" },
  { value: 98, label: "Student Satisfaction" },
  { value: 15000, label: "Learners Impacted" },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Calvin Muemah",
    role: "Lead Developer",
    image: "/team/calvin-muemah.jpg",
  },
  {
    name: "Jane Doe",
    role: "AI Engineer",
    image: "/team/jane-doe.jpg",
  },
  {
    name: "John Smith",
    role: "UI/UX Designer",
    image: "/team/john-smith.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    image: "/team/sarah-johnson.jpg",
  },
  {
    name: "Michael Lee",
    role: "Backend Engineer",
    image: "/team/michael-lee.jpg",
  },
  {
    name: "Lisa Kim",
    role: "Frontend Developer",
    image: "/team/lisa-kim.jpg",
  },
];
