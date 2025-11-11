import { Header } from "@school-admin/components/Header";
import { Sidebar } from "@school-admin/components/Sidebar";

export default function SchoolAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="ml-64 mt-16 p-8">{children}</main>
    </div>
  );
}
