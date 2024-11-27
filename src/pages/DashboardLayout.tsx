import { Outlet } from 'react-router-dom';
import { DashboardHeader } from '@/components/DashboardHeader';
import { DashboardNav } from '@/components/DashboardNav';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <DashboardHeader />
      <div className="flex">
        <DashboardNav />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}