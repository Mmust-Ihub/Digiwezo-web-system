import StudentProfile from "./components/Student";
import TeacherProfile from "./components/Teacher";


export default function ProfilePage() {
  return (
    <div className="p-4">
      
     <TeacherProfile/>
     <StudentProfile/>
    </div>
  );
}