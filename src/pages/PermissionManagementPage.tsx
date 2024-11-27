import { Card } from '@/components/ui/card';
import { PermissionTable } from '@/components/PermissionManagement/PermissionTable';

export function PermissionManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Permission Management</h2>
        <p className="text-muted-foreground">
          Define and manage system permissions
        </p>
      </div>

      <Card className="p-6">
        <PermissionTable />
      </Card>
    </div>
  );
}