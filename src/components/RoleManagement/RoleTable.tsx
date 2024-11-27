import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShieldPlus, Edit2, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { useAdminStore, type Role } from '@/lib/store';
import { RoleDialog } from './RoleDialog';

export function RoleTable() {
  const [search, setSearch] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const { roles, deleteRole } = useAdminStore();

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (role: Role) => {
    setSelectedRole(role);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search roles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button
          onClick={() => {
            setSelectedRole(null);
            setIsDialogOpen(true);
          }}
          className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700"
        >
          <ShieldPlus className="mr-2 h-4 w-4" />
          Add Role
        </Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRoles.map((role) => (
              <TableRow key={role.id}>
                <TableCell className="font-medium">{role.name}</TableCell>
                <TableCell>{role.description}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.map((permission) => (
                      <Badge
                        key={permission.id}
                        variant="secondary"
                        className="bg-purple-500/10 text-purple-500"
                      >
                        {permission.name}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{format(role.createdAt, 'MMM d, yyyy')}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(role)}
                    className="h-12 w-12 mr-2"
                  >
                    <Edit2 className="h-5 w-5 stroke-[#FF0000] stroke-[3]" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteRole(role.id)}
                    className="h-12 w-12"
                  >
                    <Trash2 className="h-5 w-5 stroke-[#FF0000] stroke-[3]" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {filteredRoles.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  No roles found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <RoleDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        role={selectedRole}
      />
    </div>
  );
}