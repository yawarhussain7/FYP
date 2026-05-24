import React from 'react';
import { Flag } from 'lucide-react';

export default function ReportListItem({ report }) {
  const { title, type, reason, reportedBy, date } = report;

  // Configuration for type badges based on target classification
  const badgeStyles = {
    RESOURCE: 'bg-slate-800/60 text-slate-400 border-slate-700',
    COMMENT: 'bg-slate-800/60 text-slate-400 border-slate-700',
    USER: 'bg-slate-800/60 text-slate-400 border-slate-700',
  };

  return (
    <div className="bg-[#11192e] rounded-2xl p-6 border border-slate-800/80 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:border-slate-800 transition-colors">
      
      {/* Left Column: Core Info & Flag Identifier */}
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <div className="p-3 bg-rose-500/10 text-rose-400 rounded-xl shrink-0 mt-0.5">
          <Flag className="h-5 w-5 fill-rose-400/10" />
        </div>
        
        <div className="space-y-3 w-full min-w-0">
          {/* Title and Target Entity Tag */}
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-base font-semibold text-slate-200 tracking-wide">
              {title}
            </h3>
            <span className={`text-[10px] font-bold px-2 py-0.5 tracking-wider rounded-md border uppercase ${badgeStyles[type] || 'bg-slate-800 text-slate-400'}`}>
              {type}
            </span>
          </div>

          {/* Reasoning Callout Block */}
          <div className="bg-[#0b1329]/60 border border-slate-800/50 rounded-xl px-4 py-3 text-sm max-w-xl">
            <span className="text-slate-400 font-medium">Reason provided: </span>
            <span className="text-slate-200 font-semibold">{reason}</span>
          </div>

          {/* Subtext Metadata */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span>Reported by <span className="text-slate-400 font-medium">{reportedBy}</span></span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>

      {/* Right Column: Moderation Lifecycle Buttons */}
      <div className="flex flex-col gap-2 w-full md:w-36 shrink-0 pt-0.5">
        <button className="w-full py-2 bg-[#1e293b] hover:bg-[#273549] text-xs font-semibold text-slate-200 rounded-xl border border-slate-700 transition-colors">
          Review Item
        </button>
        
        <button className="w-full py-2 bg-rose-950/20 hover:bg-rose-900/30 text-xs font-semibold text-rose-400 rounded-xl border border-rose-900/30 transition-colors">
          Take Action
        </button>
        
        <button className="w-full py-2 bg-transparent hover:text-slate-300 text-xs font-semibold text-slate-500 transition-colors mt-1">
          Dismiss Report
        </button>
      </div>

    </div>
  );
}