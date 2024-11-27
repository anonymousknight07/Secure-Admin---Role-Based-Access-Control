import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

import {
  LayoutDashboard,
  Users,
  Shield,
  Key,
} from 'lucide-react';

const navItems = [
  {
    title: 'Overview',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Users',
    href: '/dashboard/users',
    icon: Users,
  },
  {
    title: 'Roles',
    href: '/dashboard/roles',
    icon: Shield,
  },
  {
    title: 'Permissions',
    href: '/dashboard/permissions',
    icon: Key,
  },
];

export function DashboardNav() {
  return (
    <nav className="w-64 min-h-[calc(100vh-4rem)] border-r border-gray-800 bg-black/50 backdrop-blur-xl p-4">
      <div className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === '/dashboard'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              )
            }
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}