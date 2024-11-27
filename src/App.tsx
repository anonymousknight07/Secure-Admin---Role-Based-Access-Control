import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from '@/pages/LandingPage';
import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import { DashboardLayout } from '@/pages/DashboardLayout';
import { DashboardOverview } from '@/components/DashboardOverview';
import { UserManagementPage } from '@/pages/UserManagementPage';
import { RoleManagementPage } from '@/pages/RoleManagementPage';
import { PermissionManagementPage } from '@/pages/PermissionManagementPage';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import { useAuthStore } from '@/lib/auth';

export default function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/signin"
          element={!isAuthenticated ? <SignIn /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/signup"
          element={!isAuthenticated ? <SignUp /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/signin" />}
        >
          <Route index element={<DashboardOverview />} />
          <Route path="users" element={<UserManagementPage />} />
          <Route path="roles" element={<RoleManagementPage />} />
          <Route path="permissions" element={<PermissionManagementPage />} />
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}