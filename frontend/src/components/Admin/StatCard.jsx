import React from 'react';

export default function StatCard({ title, value, icon: Icon, iconColor }) {
  return (
    <div className="bg-[#11192e] p-5 rounded-2xl border border-slate-800/80 flex justify-between items-start">
      <div className="space-y-2">
        <p className="text-sm font-medium text-slate-400">{title}</p>
        <p className="text-2xl font-bold text-white tracking-tight">{value}</p>
      </div>
      <div className={`p-2 bg-slate-800/40 rounded-xl ${iconColor}`}>
        <Icon className="h-5 w-5" />
      </div>
    </div>
  );
}