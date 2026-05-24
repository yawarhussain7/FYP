import React from 'react';
import { FileText, Eye, Check, X, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ResourceListItem({ resource, isSelected, onSelect }) {
  const { title, subject, author, timeAgo, aiScore } = resource;
  
  // Custom threshold coloring for AI assessment display
  const isScoreLow = aiScore < 50;

  return (
    <div 
      onClick={onSelect}
      className={`bg-[#11192e] rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border cursor-pointer transition-all duration-200 ${
        isSelected 
          ? 'border-sky-500 shadow-lg shadow-sky-500/5 ring-1 ring-sky-500/30' 
          : 'border-slate-800/80 hover:border-slate-700'
      }`}
    >
      {/* File Metainfo Segment */}
      <div className="flex items-center gap-4 min-w-0">
        <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl shrink-0">
          <FileText className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-slate-100 truncate tracking-wide">
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
              {subject}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
              {author}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
              {timeAgo}
            </span>
          </div>
        </div>
      </div>

      {/* Evaluation Feedback and Control Actions */}
      <div className="flex flex-wrap items-center justify-between md:justify-end gap-6 md:gap-8 shrink-0">
        
        {/* AI Assessment Display */}
        <div className="flex flex-col items-center md:items-end">
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
            AI Assessment
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`text-sm font-bold ${isScoreLow ? 'text-rose-500' : 'text-emerald-400'}`}>
              {aiScore}%
            </span>
            {isScoreLow ? (
              <AlertCircle className="h-4 w-4 text-rose-500" />
            ) : (
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            )}
          </div>
        </div>

        {/* Actions Button Group */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1e293b] hover:bg-[#273549] text-xs font-semibold text-slate-200 rounded-xl border border-slate-700 transition-colors">
            <Eye className="h-3.5 w-3.5" />
            Review
          </button>
          
          <button className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-semibold text-emerald-400 rounded-xl transition-colors">
            <Check className="h-3.5 w-3.5" />
            Approve
          </button>
          
          <button className="flex items-center gap-1.5 px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-xs font-semibold text-rose-400 rounded-xl transition-colors">
            <X className="h-3.5 w-3.5" />
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}