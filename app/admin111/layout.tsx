export default function Admin111Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex flex-col">
      <header className="p-4 bg-gray-100 border-b">
        <h1 className="text-xl font-semibold capitalize">admin111 Dashboard</h1>
      </header>

      <main className="flex-1 p-6">
        {children}
      </main>
    </section>
  );
}