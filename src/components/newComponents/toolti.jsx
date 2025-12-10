// components/Tooltip.jsx
import React from 'react';

const Tooltip = ({ children, content }) => {
  return (
    <div className="relative group flex items-center">
      {children}
      {/* Tooltip text */}
      <span className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1
                     bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-800
                     text-xs rounded-md whitespace-nowrap
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     pointer-events-none z-50">
        {content}
      </span>
    </div>
  );
};

export default Tooltip;