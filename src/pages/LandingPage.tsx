import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ChevronRight } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Secure Admin
            </span>
          </div>
          <Link to="/signin">
            <Button variant="ghost">Sign In</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 min-h-[calc(100vh-73px)] flex flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 gap-12 flex-1">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Secure Management
              </span>
              <br />
              for Your Organization
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
              Efficiently manage users, roles, and permissions with our secure admin dashboard. Built with modern security practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/signin">
                <Button size="lg" variant="outline">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 relative w-full">
            <div className="w-full h-[400px] rounded-lg bg-gradient-to-r from-orange-500/10 to-purple-600/10 backdrop-blur-3xl border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-600/20 blur-3xl -z-10"></div>
              <div className="p-8">
                <div className="space-y-4">
                  <div className="h-8 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-md"></div>
                  <div className="h-32 bg-gradient-to-r from-orange-500/10 to-purple-600/10 rounded-md"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-md"></div>
                    <div className="h-24 bg-gradient-to-r from-orange-500/10 to-purple-600/10 rounded-md"></div>
                    <div className="h-24 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20">
          <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800 backdrop-blur-xl transition-colors duration-300 hover:bg-red-900/30 hover:border-red-800">
            <h3 className="text-xl font-semibold mb-4">User Management</h3>
            <p className="text-gray-400">Easily manage users with intuitive controls for creating, updating, and removing user accounts.</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800 backdrop-blur-xl transition-colors duration-300 hover:bg-red-900/30 hover:border-red-800">
            <h3 className="text-xl font-semibold mb-4">Role-Based Access</h3>
            <p className="text-gray-400">Define and manage roles with granular permissions to ensure proper access control.</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800 backdrop-blur-xl transition-colors duration-300 hover:bg-red-900/30 hover:border-red-800">
            <h3 className="text-xl font-semibold mb-4">Security First</h3>
            <p className="text-gray-400">Built with security best practices to protect your organization's sensitive data.</p>
          </div>
        </div>
      </main>
    </div>
  );
}