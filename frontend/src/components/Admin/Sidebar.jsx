import React from 'react';
import {
  LayoutDashboard,
  FolderOpen,
  GraduationCap,
  File,
  Users2,
  Settings,
  LogOut,
} from 'lucide-react';

import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const mainNav = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin/dashboard',
    },
    {
      name: 'Resources',
      icon: FolderOpen,
      path: '/admin/resource-moderation',
    },
    {
      name: 'AI Assessment',
      icon: GraduationCap,
      path: '/admin/assessment',
    },
    {
      name: 'Report',
      icon: File,
      path: '/admin/reports',
    },
    {
      name: 'Users',
      icon: Users2,
      path: '/admin/users',
    },
  ];

  return (
    <aside className="w-64 bg-[#0f172a] border-r border-slate-800 flex flex-col justify-between p-4">
      <div>
        {/* Brand Logo */}
        <div className="flex items-center gap-3 px-3 py-4 mb-6">
          <div className="h-9 w-9 bg-sky-500 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-sky-500/20">
            E
          </div>

          <span className="text-lg font-bold text-white tracking-wider">
            E-Academy
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {mainNav.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500/10 to-transparent text-sky-400 border-l-4 border-sky-500 pl-3'
                      : 'text-slate-400 hover:bg-[#1e293b] hover:text-slate-200'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={`h-5 w-5 ${
                        isActive ? 'text-sky-400' : 'text-slate-400'
                      }`}
                    />

                    {item.name}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-slate-800 space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:bg-[#1e293b] hover:text-slate-200 transition-colors">
          <Settings className="h-5 w-5" />
          Settings
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:bg-rose-500/10 hover:text-rose-400 transition-colors">
          <LogOut className="h-5 w-5" />
          Log out
        </button>
      </div>
    </aside>
  );
}