import React from 'react';

export default function ReportedUsers() {
  const users = [
    { id: 1, name: 'User 1', reason: 'Spam comments', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' },
    { id: 2, name: 'User 2', reason: 'Spam comments', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { id: 3, name: 'User 3', reason: 'Spam comments', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100' },
  ];

  return (
    <div className="bg-[#11192e] rounded-2xl border border-slate-800/80 p-6">
      <h2 className="text-base font-semibold text-white mb-6">Reported Users</h2>
      
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={user.img} alt={user.name} className="w-9 h-9 rounded-full object-cover border border-slate-700" />
              <div>
                <h3 className="text-sm font-semibold text-slate-200">{user.name}</h3>
                <p className="text-xs text-rose-500 font-medium mt-0.5">{user.reason}</p>
              </div>
            </div>
            <button className="px-3 py-1.5 bg-[#1e293b] hover:bg-[#273549] text-xs font-semibold text-slate-300 rounded-lg border border-slate-700 transition-colors">
              Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}