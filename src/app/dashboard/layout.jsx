import SideBar from '@/features/dashboard/components/SideBar';
import { SessionProvider } from 'next-auth/react';

export default function DashboardLayout({ children }) {
  return (
    <SessionProvider>
      <div className="flex h-screen">
        <SideBar />

        <main className="flex-1 bg-gray-100 overflow-y-scroll">{children}</main>
      </div>
    </SessionProvider>
  );
}
