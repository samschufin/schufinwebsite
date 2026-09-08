"use client";

import React, { useState } from 'react';

const dashboards = [
  {
    industry: 'Trade Contractor',
    color: 'bg-blue-200 dark:bg-blue-900',
    tabColor: 'bg-[#29ABE2] text-white',
    company: 'Dusty Boots Builder Co.',
    icon: '🛠️',
    content: 'This is the Trade Contractor dashboard (placeholder).',
  },
  {
    industry: 'E-Commerce',
    color: 'bg-yellow-100 dark:bg-yellow-700',
    tabColor: 'bg-yellow-400 text-gray-900',
    company: 'Shopify Superstore',
    icon: '🛒',
    content: 'This is the E-Commerce dashboard (placeholder).',
  },
  {
    industry: 'Healthcare Practice',
    color: 'bg-pink-100 dark:bg-pink-800',
    tabColor: 'bg-pink-400 text-gray-900',
    company: 'Healthy Life Clinic',
    icon: '🩺',
    content: 'This is the Healthcare Practice dashboard (placeholder).',
  },
];

export default function DashboardsPage() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center pt-40 pb-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-5xl">
        {/* Title and Subtext */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4">Explore Sample Dashboards</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2 leading-relaxed">
            Every business is different—but seeing real examples can spark ideas.<br />
            Below are custom dashboards built for three fictional companies across different industries.<br />
            While the data is completely made-up, the layouts and insights reflect real dashboards I build for clients.<br />
            Every dashboard we create is customized to your business&apos;s goals, challenges, and financial priorities.<br />
            <span className="text-[#29ABE2] font-medium">Click the company most like yours to explore what financial clarity could look like for you.</span>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 justify-center mb-2">
          {dashboards.map((d, idx) => (
            <button
              key={d.industry}
              onClick={() => setSelected(idx)}
              className={`px-8 py-2 rounded-t-xl border-2 border-gray-400 font-semibold text-xl md:text-2xl transition-all duration-200 focus:outline-none shadow-sm
                ${selected === idx ? d.tabColor + ' z-10 border-b-0 shadow-lg' : 'bg-gray-800 text-gray-200 border-b-2 border-b-gray-400 hover:bg-[#29ABE2]/20'}
              `}
              style={{ marginTop: selected === idx ? '0px' : '12px' }}
            >
              {d.industry}
            </button>
          ))}
        </div>

        {/* Folder/Content Area */}
        <div
          className={`w-full flex flex-col items-center rounded-b-3xl rounded-t-xl border-2 border-gray-400 p-8 ${dashboards[selected].color} min-h-[400px] transition-colors duration-300 shadow-xl`}
          style={{ marginTop: '-2px' }}
        >
          <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-6 bg-white/80 dark:bg-gray-900/80 px-6 py-2 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 shadow">
            <span>{dashboards[selected].icon}</span>
            {dashboards[selected].company}
          </div>
          <div className="text-lg md:text-xl text-gray-900 dark:text-gray-100">
            {dashboards[selected].content}
          </div>
        </div>
      </div>
    </div>
  );
} 