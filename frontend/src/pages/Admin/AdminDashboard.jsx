import React from 'react';
import Sidebar from '../../components/Admin/Sidebar'
import StatCard from '../../components/Admin/StatCard';
import ModerationQueue from '../../components/Admin/ModerationQueue';
import ReportedUsers from '../../components/Admin/ReportedUsers';
import { 
  Search, 
  Bell, 
  Download, 
  Settings, 
  Clock, 
  AlertTriangle, 
  Users, 
  DollarSign 
} from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: 'Pending Approvals', value: '18', icon: Clock, iconColor: 'text-amber-500' },
    { title: 'Reported Content', value: '5', icon: AlertTriangle, iconColor: 'text-rose-500' },
    { title: 'Total Users', value: '1,240', icon: Users, iconColor: 'text-sky-500' },
    { title: 'Platform Revenue', value: '$4,200', icon: DollarSign, iconColor: 'text-emerald-500' },
  ];

  return (
    <div className="flex min-h-screen bg-[#0b1329] text-slate-200 font-sans">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between px-8 py-4 bg-[#0f172a] border-b border-slate-800">
          {/* Search */}
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search resources, peers, or threads..."
              className="w-full bg-[#1e293b] text-sm text-slate-200 pl-10 pr-4 py-2 rounded-full border border-slate-700 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          {/* User Profile & Notifications */}
          <div className="flex items-center gap-6">
            <button className="relative p-1 text-slate-400 hover:text-slate-200 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-sky-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-200">Alex Johnson</p>
                <p className="text-xs text-sky-400">Premium Student</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                alt="Profile"
                className="w-10 h-10 rounded-full border border-slate-600 object-cover"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Dashboard Header Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-wide">Admin Portal</h1>
              <p className="text-sm text-slate-400 mt-1">Platform moderation and user management.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] hover:bg-[#273549] text-sm font-medium text-slate-200 rounded-lg border border-slate-700 transition-colors">
                <Download className="h-4 w-4" />
                Export Reports
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-sm font-medium text-white rounded-lg transition-colors shadow-lg shadow-sky-500/10">
                <Settings className="h-4 w-4" />
                System Settings
              </button>
            </div>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>

          {/* Moderation & Users Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ModerationQueue />
            </div>
            <div>
              <ReportedUsers />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}