import React from 'react';
import { FileText, Check, X } from 'lucide-react';

export default function ModerationQueue() {
  const queueItems = [
    { id: 1, title: 'Advanced Algebra Final', author: 'Mike T.', score: 92 },
    { id: 2, title: 'History Essay Draft', author: 'Sarah C.', score: 45 },
    { id: 3, title: 'Biology Lab 3', author: 'John D.', score: 88 },
  ];

  return (
    <div className="bg-[#11192e] rounded-2xl border border-slate-800/80 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-semibold text-white">Resource Moderation Queue</h2>
        <button className="text-xs font-semibold text-sky-400 hover:underline">View All</button>
      </div>

      <div className="space-y-3">
        {queueItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-[#16223f] rounded-xl border border-slate-800/50 hover:border-slate-700/60 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-sky-500/10 text-sky-400 rounded-xl">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">Uploaded by <span className="text-slate-300">{item.author}</span></p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-xs font-medium text-slate-400">
                AI Score: <span className={item.score > 80 ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>{item.score}%</span>
              </span>
              <div className="flex items-center gap-2">
                <button className="p-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg transition-colors">
                  <Check className="h-4 w-4" />
                </button>
                <button className="p-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}