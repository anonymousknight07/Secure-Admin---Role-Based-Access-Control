import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Users, Shield, Key, Activity } from 'lucide-react';
import { useDashboardStore } from '@/lib/dashboard-store';
import { AreaChart } from '@tremor/react';
import { format } from 'date-fns';

export function DashboardOverview() {
  const { 
    totalUsers, 
    activeRoles, 
    permissions, 
    activeSessions,
    monthlyStats,
    startRealtimeUpdates,
    stopRealtimeUpdates
  } = useDashboardStore();

  useEffect(() => {
    startRealtimeUpdates();
    return () => stopRealtimeUpdates();
  }, [startRealtimeUpdates, stopRealtimeUpdates]);

  const chartData = monthlyStats.map(stat => ({
    date: format(stat.month, 'MMM yyyy'),
    Users: stat.users,
    Roles: stat.roles,
    Permissions: stat.permissions,
  }));

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-500/10 rounded-full">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Users</p>
              <h3 className="text-2xl font-bold">{totalUsers.toLocaleString()}</h3>
              <p className="text-xs text-muted-foreground">+180 from last month</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-500/10 rounded-full">
              <Shield className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Roles</p>
              <h3 className="text-2xl font-bold">{activeRoles}</h3>
              <p className="text-xs text-muted-foreground">+12 new roles</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-500/10 rounded-full">
              <Key className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Permissions</p>
              <h3 className="text-2xl font-bold">{permissions}</h3>
              <p className="text-xs text-muted-foreground">Across all roles</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-orange-500/10 rounded-full">
              <Activity className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Sessions</p>
              <h3 className="text-2xl font-bold">{activeSessions}</h3>
              <p className="text-xs text-muted-foreground">Current active users</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">System Overview</h3>
        <p className="text-sm text-muted-foreground mb-4">6-month trend of users, roles, and permissions</p>
        <AreaChart
          className="h-72 mt-4"
          data={chartData}
          index="date"
          categories={["Users", "Roles", "Permissions"]}
          colors={["blue", "green", "purple"]}
        />
      </Card>
    </div>
  );
}