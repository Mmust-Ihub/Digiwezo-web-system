import { Header } from "@parent/components/Header";
import { Sidebar } from "@parent/components/SideBar";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex flex-col overflow-auto">
      <div className="sticky top-0 z-30 h-[12vh]">
        <Header />
      </div>

      <div className="flex flex-row">
        <Sidebar />
        <div className="h-full w-full bg-background  overflow-x-clip ml-64 p-8 py-6 pb-12">
          {children}
        </div>
      </div>
    </div>
  );
}