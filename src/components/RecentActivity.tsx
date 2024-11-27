import { Card } from '@/components/ui/card';
import { useDashboardStore } from '@/lib/dashboard-store';
import { formatDistanceToNow } from 'date-fns';

export function RecentActivity() {
  const { recentActivity } = useDashboardStore();

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <p className="text-sm text-muted-foreground mb-6">Latest system events</p>
      
      <div className="space-y-4">
        {recentActivity.length === 0 ? (
          <p className="text-sm text-muted-foreground">No recent activities</p>
        ) : (
          recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between py-2 border-b last:border-0"
            >
              <div>
                <p className="text-sm font-medium">
                  {activity.user} {activity.action} {activity.target}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}