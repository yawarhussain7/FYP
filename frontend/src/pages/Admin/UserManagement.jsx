import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import UserTable from '../../components/Admin/UserTable';
import { Search, Bell, UserPlus, Filter } from 'lucide-react';

export default function UserManagement() {
  const usersData = [
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex@example.com',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
      role: 'Premium',
      status: 'Active',
      joinedDate: 'Oct 12, 2023',
    },
    {
      id: 2,
      name: 'Maria Garcia',
      email: 'maria@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      role: 'Student',
      status: 'Active',
      joinedDate: 'Oct 15, 2023',
    },
    {
      id: 3,
      name: 'David Smith',
      email: 'david@example.com',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
      role: 'Teacher',
      status: 'Suspended',
      joinedDate: 'Nov 02, 2023',
    },
    {
      id: 4,
      name: 'Emma Wilson',
      email: 'emma@example.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      role: 'Student',
      status: 'Active',
      joinedDate: 'Nov 10, 2023',
    },
    {
      id: 5,
      name: 'James Brown',
      email: 'james@example.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      role: 'Premium',
      status: 'Active',
      joinedDate: 'Dec 01, 2023',
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0b1329] text-slate-200 font-sans">
      {/* Reusable Sidebar Component */}
      <Sidebar />

      {/* Main Panel Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Universal Top Navigation Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-[#0f172a] border-b border-slate-800">
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search resources, peers, or threads..."
              className="w-full bg-[#1e293b] text-sm text-slate-200 pl-10 pr-4 py-2 rounded-full border border-slate-700 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

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

        {/* Dynamic Page Workspace */}
        <main className="flex-1 p-8 overflow-y-auto flex flex-col">
          
          {/* Header Action Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-wide">User Management</h1>
              <p className="text-sm text-slate-400 mt-1">View, edit, and manage all platform accounts.</p>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-sm font-semibold text-white rounded-xl transition-all duration-150 shadow-md shadow-sky-500/10 self-start sm:self-auto">
              <UserPlus className="h-4 w-4" />
              Add User
            </button>
          </div>

          {/* Filtering Workspace Toolbar */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {/* Inline Local User Search Bar */}
            <div className="relative w-80">
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search users by name or email..."
                className="w-full bg-[#11192e] text-xs text-slate-200 pl-10 pr-4 py-2.5 rounded-xl border border-slate-800/80 focus:outline-none focus:border-slate-700 transition-colors"
              />
            </div>

            {/* Filter Group Dropdowns */}
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#11192e] text-xs font-semibold text-slate-300 border border-slate-800/80 rounded-xl hover:border-slate-700 transition-colors">
              <Filter className="h-3.5 w-3.5 text-slate-400" />
              Role: All
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#11192e] text-xs font-semibold text-slate-300 border border-slate-800/80 rounded-xl hover:border-slate-700 transition-colors">
              <Filter className="h-3.5 w-3.5 text-slate-400" />
              Status: All
            </button>
          </div>

          {/* Core Structured Directory Table Grid Container */}
          <div className="bg-[#11192e]/40 border border-slate-800/80 rounded-2xl overflow-hidden flex-1 flex flex-col justify-between">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/60 bg-[#11192e]/80 text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                    <th className="py-4 px-6 font-semibold">User</th>
                    <th className="py-4 px-6 font-semibold">Role</th>
                    <th className="py-4 px-6 font-semibold">Status</th>
                    <th className="py-4 px-6 font-semibold">Joined</th>
                    <th className="py-4 px-6 text-right font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/40">
                  {usersData.map((user) => (
                    <UserTable key={user.id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Structured Table Footer Pagination controls */}
            <div className="p-4 border-t border-slate-800/60 flex items-center justify-between bg-[#11192e]/30">
              <span className="text-xs text-slate-500">
                Showing <span className="text-slate-400 font-medium">1 to 5</span> of <span className="text-slate-400 font-medium">1,240</span> users
              </span>
              <div className="flex items-center gap-2">
                <button disabled className="px-3 py-1.5 bg-[#16223f]/40 text-xs font-semibold text-slate-600 rounded-lg border border-slate-800/40 cursor-not-allowed">
                  Previous
                </button>
                <button className="px-4 py-1.5 bg-[#16223f] hover:bg-[#1e2d54] text-xs font-semibold text-slate-300 rounded-lg border border-slate-800 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}