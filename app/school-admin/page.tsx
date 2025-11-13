import { Header } from "@school-admin/components/Header";
import { Sidebar } from "@school-admin/components/Sidebar";
import StatsCards from "./components/StatsCards";
import SummaryCards from "./components/SummaryCards";
import QuickActions from "./components/QuickActions";
import DashboardHeader from "./components/DashboardHeader";
import  CalendarSection  from "./components/CalendarSection";


export default function SchoolAdminPage() {
  return (
    <div className=" flex-1 p-6 ml-64 min-h-screen">
      <Header/>
      <Sidebar/>

      <div className="flex flex-col lg:flex-row gap-6">
         {/* Left column: DashboardHeader + StatsCards */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
              <DashboardHeader />
              <StatsCards />
            </div>

            {/* Right column: Calendar */}
            <div className="w-full lg:w-1/3">
              <CalendarSection size="large" />
            </div>
        </div>

    <SummaryCards/>
    <QuickActions/>

    </div>
  );
}