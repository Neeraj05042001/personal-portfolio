"use client"
import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to track visitor');
        }

        const data = await response.json();
        setVisitorCount(data.count);
        
        // Mark this session as counted
        sessionStorage.setItem('portfolio_visited', 'true');
      } else {
        // Just fetch the current count
        const response = await fetch('/api/visitors');
        
        if (!response.ok) {
          throw new Error('Failed to fetch visitor count');
        }

        const data = await response.json();
        setVisitorCount(data.count);
      }
    } catch (err) {
      console.error('Error tracking visitor:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg animate-pulse">
        <Eye className="w-5 h-5 text-gray-400" />
        <span className="text-sm text-gray-500">Loading visitors...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-lg">
        <Eye className="w-5 h-5 text-red-500" />
        <span className="text-sm text-red-600">Unable to load count</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Eye className="w-6 h-6 text-white animate-pulse" />
      <div className="text-white">
        <div className="text-xs font-medium uppercase tracking-wider opacity-90">
          Total Visitors
        </div>
        <div className="text-3xl font-bold tabular-nums">
          {visitorCount?.toLocaleString() || '0'}
        </div>
      </div>
    </div>
  );
}