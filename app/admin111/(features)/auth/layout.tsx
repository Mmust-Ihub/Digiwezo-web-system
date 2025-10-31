export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-4">
      {/*  Add auth-specific navigation, breadcrumbs, etc. here */}
      {children}
    </section>
  );
}