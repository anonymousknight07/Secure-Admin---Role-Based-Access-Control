import { Card } from '@/components/ui/card';
import { UserTable } from '@/components/UserManagement/UserTable';

export function UserManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
        <p className="text-muted-foreground">
          Add, edit, and manage user accounts
        </p>
      </div>

      <Card className="p-6">
        <UserTable />
      </Card>
    </div>
  );
}