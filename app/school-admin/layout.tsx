import { Header } from "@school-admin/components/Header";
import { Sidebar } from "@school-admin/components/Sidebar";

export default function SchoolAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="h-[12vh]">
        <Header />
      </div>

      <div className="flex flex-row h-[88vh]">
        <Sidebar />
        <div className="h-full w-full bg-background overflow-y-auto overflow-x-clip ml-64">
          {children}
        </div>
      </div>
    </div>
  );
}
