import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Shield, Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <p className="text-sm text-muted-foreground mb-6">Common administrative tasks</p>
      
      <div className="space-y-2">
        <Button
          variant="secondary"
          className="w-full justify-start"
          onClick={() => navigate('/dashboard/users')}
        >
          <Users className="mr-2 h-4 w-4" />
          Manage Users
        </Button>
        
        <Button
          variant="secondary"
          className="w-full justify-start"
          onClick={() => navigate('/dashboard/roles')}
        >
          <Shield className="mr-2 h-4 w-4" />
          Manage Roles
        </Button>
        
        <Button
          variant="secondary"
          className="w-full justify-start"
          onClick={() => navigate('/dashboard/permissions')}
        >
          <Key className="mr-2 h-4 w-4" />
          Manage Permissions
        </Button>
      </div>
    </Card>
  );
}