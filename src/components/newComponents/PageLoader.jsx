"use client";
import { useEffect, useState } from "react";
import DynamicText from "../kokonutui/dynamic-text";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let pageLoaded = false;
    let minimumTimeElapsed = false;

    // Check when page is fully loaded
    const handleLoad = () => {
      pageLoaded = true;
      checkBothComplete();
    };

    // Wait for minimum 2 seconds
    const timer = setTimeout(() => {
      minimumTimeElapsed = true;
      checkBothComplete();
    }, 3000);

    // Only hide loader when BOTH conditions are met
    const checkBothComplete = () => {
      if (pageLoaded && minimumTimeElapsed) {
        setIsFading(true);
        setTimeout(() => setIsLoading(false), 500); // Fade out duration
      }
    };

    if (document.readyState === "complete") {
      pageLoaded = true;
      checkBothComplete();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background  transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <DynamicText />
      {/* <div className="text-center">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div> */}
    </div>
  );
}
