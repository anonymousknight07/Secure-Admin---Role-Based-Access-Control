import { create } from 'zustand';
import { subMonths, startOfMonth, eachMonthOfInterval } from 'date-fns';

interface DashboardStats {
  totalUsers: number;
  activeRoles: number;
  permissions: number;
  activeSessions: number;
  monthlyStats: {
    month: Date;
    users: number;
    roles: number;
    permissions: number;
  }[];
  recentActivity: {
    id: string;
    action: string;
    target: string;
    timestamp: Date;
    user: string;
  }[];
}

interface DashboardStore extends DashboardStats {
  updateStats: () => void;
  addActivity: (activity: Omit<DashboardStats['recentActivity'][0], 'id'>) => void;
  startRealtimeUpdates: () => void;
  stopRealtimeUpdates: () => void;
}

const generateMonthlyData = () => {
  const end = new Date();
  const start = subMonths(startOfMonth(end), 5);
  
  return eachMonthOfInterval({ start, end }).map(month => ({
    month,
    users: Math.floor(Math.random() * 300) + 200,
    roles: Math.floor(Math.random() * 50) + 150,
    permissions: Math.floor(Math.random() * 100) + 100,
  }));
};

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  totalUsers: 2543,
  activeRoles: 184,
  permissions: 892,
  activeSessions: 1432,
  monthlyStats: generateMonthlyData(),
  recentActivity: [],
  updateStats: () => {
    set((state) => ({
      totalUsers: state.totalUsers + Math.floor(Math.random() * 10),
      activeRoles: state.activeRoles + Math.floor(Math.random() * 2),
      permissions: state.permissions + Math.floor(Math.random() * 3),
      activeSessions: Math.floor(Math.random() * 500) + 1000,
      monthlyStats: [...generateMonthlyData()],
    }));
  },
  addActivity: (activity) => {
    set((state) => ({
      recentActivity: [
        {
          id: Math.random().toString(36).substr(2, 9),
          ...activity,
        },
        ...state.recentActivity,
      ].slice(0, 10),
    }));
  },
  startRealtimeUpdates: () => {
    const interval = setInterval(() => {
      get().updateStats();
    }, 3000);
    
    // Store the interval ID in localStorage
    localStorage.setItem('dashboardUpdateInterval', interval.toString());
  },
  stopRealtimeUpdates: () => {
    const intervalId = localStorage.getItem('dashboardUpdateInterval');
    if (intervalId) {
      clearInterval(parseInt(intervalId));
      localStorage.removeItem('dashboardUpdateInterval');
    }
  },
}));