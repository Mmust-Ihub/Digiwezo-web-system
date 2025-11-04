import { Header } from "@parent/components/Header";
import { Sidebar } from "@parent/components/SideBar";
import { Outlet } from "react-router-dom";

const ParentLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-64 mt-16 p-8">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ParentLayout;
