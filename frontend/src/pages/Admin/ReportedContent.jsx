import React from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import ReportListItem from '../../components/Admin/ReportListItem';
import { Search, Bell, Archive } from 'lucide-react';

export default function ReportedContent() {
  const reports = [
    {
      id: 1,
      type: 'RESOURCE',
      title: 'Reported Resource: Biology Notes 2023',
      reason: 'Inaccurate information in Chapter 4',
      reportedBy: 'Mike123',
      date: 'Today',
    },
    {
      id: 2,
      type: 'COMMENT',
      title: 'Reported Comment: Comment on Physics Exam',
      reason: 'Inappropriate language',
      reportedBy: 'SarahH',
      date: 'Yesterday',
    },
    {
      id: 3,
      type: 'USER',
      title: 'Reported User: User: JohnDoe99',
      reason: 'Spamming irrelevant links in chat',
      reportedBy: 'AlexJ',
      date: 'Oct 20, 2023',
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0b1329] text-slate-200 font-sans">
      {/* Reusable Sidebar Component */}
      <Sidebar />

      {/* Main Content View */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Navbar */}
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

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* Header Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-wide">Reported Content</h1>
              <p className="text-sm text-slate-400 mt-1">Manage community reports for resources, comments, and users.</p>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] hover:bg-[#273549] text-sm font-medium text-slate-200 rounded-xl border border-slate-700 transition-colors self-start sm:self-auto">
              <Archive className="h-4 w-4 text-slate-400" />
              View Archive
            </button>
          </div>

          {/* Reports Stack */}
          <div className="space-y-5">
            {reports.map((report) => (
              <ReportListItem key={report.id} report={report} />
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}