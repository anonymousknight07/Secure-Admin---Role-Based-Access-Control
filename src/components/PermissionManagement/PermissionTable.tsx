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
import { Search, KeyRound, Edit2, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { useAdminStore } from '@/lib/store';
import { PermissionDialog } from './PermissionDialog';

export function PermissionTable() {
  const [search, setSearch] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState<Permission | null>(null);
  const { permissions, deletePermission } = useAdminStore();

  const filteredPermissions = permissions.filter((permission) =>
    permission.name.toLowerCase().includes(search.toLowerCase()) ||
    permission.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (permission: Permission) => {
    setSelectedPermission(permission);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search permissions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button
          onClick={() => {
            setSelectedPermission(null);
            setIsDialogOpen(true);
          }}
          className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700"
        >
          <KeyRound className="mr-2 h-4 w-4" />
          Add Permission
        </Button>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Scope</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPermissions.map((permission) => (
              <TableRow key={permission.id}>
                <TableCell className="font-medium">{permission.name}</TableCell>
                <TableCell>{permission.description}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={permission.scope === 'system' 
                      ? 'bg-purple-500/10 text-purple-500'
                      : 'bg-blue-500/10 text-blue-500'
                    }
                  >
                    {permission.scope}
                  </Badge>
                </TableCell>
                <TableCell>{format(new Date(permission.createdAt), 'MMM d, yyyy')}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(permission)}
                    className="h-12 w-12 mr-2"
                  >
                    <Edit2 className="h-5 w-5 stroke-[#FF0000] stroke-[3]" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deletePermission(permission.id)}
                    className="h-12 w-12"
                  >
                    <Trash2 className="h-5 w-5 stroke-[#FF0000] stroke-[3]" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {filteredPermissions.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  No permissions found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <PermissionDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        permission={selectedPermission}
      />
    </div>
  );
}