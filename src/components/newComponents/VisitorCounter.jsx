"use client";

import { Eye } from "lucide-react";
import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    trackVisitor();
  }, []);

  const getOrdinalSuffix = (num) => {
    if (!num) return { number: "0", suffix: "th" };

    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    let suffix;

    // Special cases for 11th, 12th, 13th
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      suffix = "th";
    } else {
      // Regular cases
      switch (lastDigit) {
        case 1:
          suffix = "st";
          break;
        case 2:
          suffix = "nd";
          break;
        case 3:
          suffix = "rd";
          break;
        default:
          suffix = "th";
      }
    }

    return { number: num.toLocaleString(), suffix };
  };

  const trackVisitor = async () => {
    try {
      // Check if this visitor has already been counted in this session
      const hasVisited = sessionStorage.getItem("portfolio_visited");

      if (!hasVisited) {
        // Increment the counter for new visitors
        const response = await fetch("/api/visitors", {
          method: "POST",
        });

        if (!response.ok) throw new Error("Failed to track visitor");

        const data = await response.json();
        setVisitorCount(data.count);

        // Mark this session as counted
        sessionStorage.setItem("portfolio_visited", "true");
      } else {
        // Just fetch the current count
        const response = await fetch("/api/visitors");

        if (!response.ok) throw new Error("Failed to fetch visitor count");

        const data = await response.json();
        setVisitorCount(data.count);
      }
    } catch (err) {
      console.error("Error tracking visitor:", err);
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

  const { number, suffix } = getOrdinalSuffix(visitorCount);

  return (
    <>
      <div>
        <div className="px-6 py-2 flex justify-center items-center gap-2 font-serif border bg-[#FBFBFB] dark:bg-neutral-900 rounded-lg shadow-2xl">
          <span className="bg-[#E3E3E3] dark:bg-neutral-600 p-2 rounded-xl">
            <Eye />
          </span>
          <h4 className="text-gray-700/90 dark:text-white/60">
            You are the{" "}
            <span className="text-black dark:text-white">
              {number}
              <sup className="text-xs text-black dark:text-white">{suffix}</sup> 
            </span> Visitor
          </h4>
        </div>
      </div>
    </>
  );
}
