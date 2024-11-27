import { create } from 'zustand';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  createdAt: Date;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  createdAt: Date;
}

export interface Permission {
  id: string;
  name: string;
  description: string;
  scope: 'user' | 'system';
  createdAt: Date;
}

interface AdminStore {
  users: User[];
  roles: Role[];
  permissions: Permission[];
  addUser: (user: User) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  addRole: (role: Role) => void;
  updateRole: (id: string, role: Partial<Role>) => void;
  deleteRole: (id: string) => void;
  addPermission: (permission: Permission) => void;
  updatePermission: (id: string, permission: Partial<Permission>) => void;
  deletePermission: (id: string) => void;
}

export const useAdminStore = create<AdminStore>((set) => ({
  users: [],
  roles: [],
  permissions: [
    {
      id: '1',
      name: 'create_user',
      description: 'Ability to create new user accounts',
      scope: 'user',
      createdAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      name: 'edit_user',
      description: 'Ability to modify user account details',
      scope: 'user',
      createdAt: new Date('2024-01-16'),
    },
    {
      id: '3',
      name: 'delete_user',
      description: 'Ability to remove user accounts',
      scope: 'user',
      createdAt: new Date('2024-01-17'),
    },
    {
      id: '4',
      name: 'manage_roles',
      description: 'Ability to create and modify roles',
      scope: 'system',
      createdAt: new Date('2024-01-18'),
    },
    {
      id: '5',
      name: 'view_users',
      description: 'Ability to view user information',
      scope: 'user',
      createdAt: new Date('2024-01-19'),
    },
  ],
  addUser: (user) =>
    set((state) => ({ users: [...state.users, user] })),
  updateUser: (id, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      ),
    })),
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
  addRole: (role) =>
    set((state) => ({ roles: [...state.roles, role] })),
  updateRole: (id, updatedRole) =>
    set((state) => ({
      roles: state.roles.map((role) =>
        role.id === id ? { ...role, ...updatedRole } : role
      ),
    })),
  deleteRole: (id) =>
    set((state) => ({
      roles: state.roles.filter((role) => role.id !== id),
    })),
  addPermission: (permission) =>
    set((state) => ({ permissions: [...state.permissions, permission] })),
  updatePermission: (id, updatedPermission) =>
    set((state) => ({
      permissions: state.permissions.map((permission) =>
        permission.id === id ? { ...permission, ...updatedPermission } : permission
      ),
    })),
  deletePermission: (id) =>
    set((state) => ({
      permissions: state.permissions.filter((permission) => permission.id !== id),
    })),
}));