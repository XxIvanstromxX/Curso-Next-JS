export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <aside className="w-52">
        <nav className="flex flex-col gap-2 p-4">
          <a href="/dashboard">Dashboard</a>
          <a href="/dashboard/profile">Profile</a>
          <a href="/dashboard/settings">Settings</a>
        </nav>
      </aside>

      <main className="flex-1 p-4 bg-zinc-50 font-sans dark:bg-blue-900">
        {children}
      </main>
    </div>
  );
}
