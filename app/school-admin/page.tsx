import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export default function SchoolAdminPage() {
  return (
    <div className="p-4">
      <Header/>
      <Sidebar/>
    </div>
  );
}