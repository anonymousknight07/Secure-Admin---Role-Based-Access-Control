import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, LogOut, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { useAuthStore } from '@/lib/auth';

export function DashboardHeader() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { user, signOut } = useAuthStore();

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-orange-500" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Secure Admin
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-12 w-12"
          >
            {theme === 'dark' ? (
              <Sun className="h-8 w-8 stroke-red-500 stroke-2 text-red-500" />
            ) : (
              <Moon className="h-8 w-8 stroke-red-500 stroke-2 text-red-500" />
            )}
          </Button>
          <span className="text-sm text-gray-400">Welcome, {user?.name}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
}