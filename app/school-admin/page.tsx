import { Header } from "@school-admin/components/Header";
import { Sidebar } from "@school-admin/components/Sidebar";
import SummaryCards from "./components/SummaryCards";
import QuickActions from "./components/QuickActions";
import CalendarSection from "./components/CalendarSection";
import AdminCard from "./components/AdminCard";

export default function SchoolAdminPage() {
  return (
    <div className=" flex-1 p-6 ml-64 min-h-screen bg-custom-white">
      <Header />
      <Sidebar />

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <AdminCard />
        </div>
        <div className="w-full lg:w-1/3">
          <CalendarSection size="large" />
        </div>
      </div>
      <SummaryCards />
      <QuickActions />
    </div>
  );
}
