import { Card } from '@/components/ui/card';
import { RoleTable } from '@/components/RoleManagement/RoleTable';

export function RoleManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Role Management</h2>
        <p className="text-muted-foreground">
          Create and manage roles and their permissions
        </p>
      </div>

      <Card className="p-6">
        <RoleTable />
      </Card>
    </div>
  );
}