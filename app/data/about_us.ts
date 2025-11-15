
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
    name: "jane-doe",
    role: "Lead Developer",
    image: "/team/jane-doe.jpg",
  },
  {
    name: "Jane Doe",
    role: "AI Engineer",
    image: "/team/jane-doe.jpg",
  },
  {
    name: "John Smith",
    role: "UI/UX Designer",
    image: "/team/jane-doe.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    image: "/team/jane-doe.jpg",
  },
  {
    name: "Michael Lee",
    role: "Backend Engineer",
    image: "/team/jane-doe.jpg",
  },
  {
    name: "Lisa Kim",
    role: "Frontend Developer",
    image: "/team/jane-doe.jpg",
  },
];
