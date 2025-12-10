"use client";
import { Moon, SunDim } from "lucide-react";
import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";
import { TooltipContent, TooltipProvider } from "./tooltip";

export const AnimatedThemeToggler = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const buttonRef = useRef(null);
  const changeTheme = async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        const dark = document.documentElement.classList.toggle("dark");
        setIsDarkMode(dark);
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            ref={buttonRef}
            onClick={changeTheme}
            className={cn(className)}
          >
            {isDarkMode ? <SunDim /> : <Moon />}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? "Switch to Light mode" : "Switch to dark mode"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
