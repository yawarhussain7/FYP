import React from 'react';
import { Edit2, ShieldAlert } from 'lucide-react';

export default function UserTable({ user }) {
  const { name, email, avatar, role, status, joinedDate } = user;

  // Custom mapping variant color arrays based on role categorization
  const roleBadgeStyles = {
    Premium: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    Student: 'bg-slate-700/30 text-slate-400 border-slate-700/50',
    Teacher: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  };

  const isActive = status === 'Active';

  return (
    <tr className="hover:bg-[#11192e]/40 transition-colors group">
      {/* Identity Profile Block */}
      <td className="py-3.5 px-6 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <img 
            src={avatar} 
            alt={name} 
            className="w-9 h-9 rounded-full object-cover border border-slate-800 group-hover:border-slate-700/80 transition-colors"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-200 tracking-wide">{name}</span>
            <span className="text-xs text-slate-500 mt-0.5">{email}</span>
          </div>
        </div>
      </td>

      {/* Role Tag pill identifier */}
      <td className="py-3.5 px-6 whitespace-nowrap">
        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${roleBadgeStyles[role] || 'bg-slate-800 text-slate-400'}`}>
          {role}
        </span>
      </td>

      {/* Real-time Account Status indicators */}
      <td className="py-3.5 px-6 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
          <span className={`text-xs font-semibold ${isActive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {status}
          </span>
        </div>
      </td>

      {/* Enrollment Timestamp Marker */}
      <td className="py-3.5 px-6 whitespace-nowrap text-xs text-slate-400 font-medium">
        {joinedDate}
      </td>

      {/* Functional Management Controls inline row */}
      <td className="py-3.5 px-6 whitespace-nowrap text-right">
        <div className="flex items-center justify-end gap-2">
          <button className="p-1.5 bg-[#16223f]/60 hover:bg-[#1e2d54] border border-slate-800/80 text-slate-400 hover:text-slate-200 rounded-lg transition-colors">
            <Edit2 className="h-3.5 w-3.5" />
          </button>
          <button className="p-1.5 bg-[#16223f]/60 hover:bg-rose-950/20 border border-slate-800/80 text-slate-500 hover:text-rose-400 rounded-lg transition-colors">
            <ShieldAlert className="h-3.5 w-3.5" />
          </button>
        </div>
      </td>
    </tr>
  );
}