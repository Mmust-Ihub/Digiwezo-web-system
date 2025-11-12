import { Header } from "@school-admin/components/Header";
import { Sidebar } from "@school-admin/components/Sidebar";

export default function SchoolAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex flex-col bg-background">
      
      <Header/>
      <Sidebar/>

      <main className="flex-1 p-6">
        {children}
      </main>
    </section>
  );
}