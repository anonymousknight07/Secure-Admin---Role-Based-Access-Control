import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      signIn: async (email: string, password: string) => {

        await new Promise((resolve) => setTimeout(resolve, 1000));
        
  
        set({
          user: {
            id: '1',
            email,
            name: email.split('@')[0],
          },
          isAuthenticated: true,
        });
      },
      signUp: async (email: string, password: string, name: string) => {

        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        set({
          user: {
            id: '1',
            email,
            name,
          },
          isAuthenticated: true,
        });
      },
      signOut: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);