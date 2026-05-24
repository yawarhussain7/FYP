import React, { useState } from 'react';


import Sidebar from '../../components/Admin/Sidebar'

import ResourceListItem from '../../components/Admin/ResourceListItem';
import { Search, Bell, Eye, Check, X } from 'lucide-react';

export default function ResourceModeration() {
  const [activeTab, setActiveTab] = useState('Pending Queue');
  const [selectedItemId, setSelectedItemId] = useState(2); // History Revolution Essay highlighted by default

  const filterTabs = ['Pending Queue', 'Approved', 'Rejected'];

  const initialResources = [
    {
      id: 1,
      title: 'Advanced Algebra Final Notes.pdf',
      subject: 'Mathematics',
      author: 'Alex J.',
      timeAgo: '2 hours ago',
      aiScore: 92,
      status: 'pending'
    },
    {
      id: 2,
      title: 'History Revolution Essay.docx',
      subject: 'History',
      author: 'Sarah C.',
      timeAgo: '2 hours ago',
      aiScore: 45,
      status: 'pending'
    },
    {
      id: 3,
      title: 'Biology Cell Structure Lab.pdf',
      subject: 'Biology',
      author: 'John D.',
      timeAgo: '2 hours ago',
      aiScore: 88,
      status: 'pending'
    },
    {
      id: 4,
      title: 'Intro to Chemistry Notes.pdf',
      subject: 'Chemistry',
      author: 'Mike T.',
      timeAgo: '2 hours ago',
      aiScore: 95,
      status: 'pending'
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

        {/* Dynamic Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* Header & View Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-wide">Resource Moderation</h1>
              <p className="text-sm text-slate-400 mt-1">Review and approve uploaded materials based on AI feedback.</p>
            </div>
            
            {/* Filter Pill Tab Group */}
            <div className="bg-[#11192e] p-1 rounded-xl border border-slate-800 flex items-center self-start sm:self-auto">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                    activeTab === tab
                      ? 'bg-[#1e293b] text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Moderation Queue Stack */}
          <div className="space-y-4">
            {initialResources.map((resource) => (
              <ResourceListItem
                key={resource.id}
                resource={resource}
                isSelected={selectedItemId === resource.id}
                onSelect={() => setSelectedItemId(resource.id)}
              />
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}