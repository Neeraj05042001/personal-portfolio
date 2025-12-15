'use client';

import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    trackVisitor();
  }, []);

  const trackVisitor = async () => {
    try {
      // Check if this visitor has already been counted in this session
      const hasVisited = sessionStorage.getItem('portfolio_visited');
      
      if (!hasVisited) {
        // Increment the counter for new visitors
        const response = await fetch('/api/visitors', {
          method: 'POST',
        });

        if (!response.ok) throw new Error('Failed to track visitor');

        const data = await response.json();
        setVisitorCount(data.count);
        
        // Mark this session as counted
        sessionStorage.setItem('portfolio_visited', 'true');
      } else {
        // Just fetch the current count
        const response = await fetch('/api/visitors');
        
        if (!response.ok) throw new Error('Failed to fetch visitor count');

        const data = await response.json();
        setVisitorCount(data.count);
      }
    } catch (err) {
      console.error('Error tracking visitor:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
        <span className="text-sm text-gray-500">Loading...</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
      <svg 
        className="w-6 h-6 text-white" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
        />
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
        />
      </svg>
      <div className="text-white">
        <div className="text-xs font-medium uppercase tracking-wider">
          Total Visitors
        </div>
        <div className="text-3xl font-bold">
          {visitorCount?.toLocaleString() || '0'}
        </div>
      </div>
    </div>
  );
}