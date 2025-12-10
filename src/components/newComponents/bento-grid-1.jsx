"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";


const Circle = forwardRef(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({ className }) {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>

        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <Icons.openai />
          </Circle>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.googleDocs />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.messenger />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.notion />
          </Circle>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} />
    </div>
  );
}

const Icons = {
  user: () => (
    <svg width="32" height="32" fill="currentColor">
      <circle cx="16" cy="12" r="6" />
      <path d="M4 28c0-6 24-6 24 0" />
    </svg>
  ),

  notion: () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917z"
      />
    </svg>
  ),

  openai: () => (
    <svg width="100" height="100" viewBox="0 0 24 24">
      <path d="M22.2819 9.8211a5.9847 5.9847 ... Z" />
    </svg>
  ),

  googleDrive: () => (
    <svg width="100" height="100" viewBox="0 0 87.3 78">
      <path fill="#0066da" d="m6.6 66.85 3.85 6.65..." />
    </svg>
  ),

  googleDocs: () => (
    <svg width="100" height="100" viewBox="0 0 48 48">
      <rect width="48" height="48" rx="6" fill="#4285f4" />
      <rect x="14" y="18" width="20" height="2" fill="#fff" />
      <rect x="14" y="24" width="20" height="2" fill="#fff" />
      <rect x="14" y="30" width="14" height="2" fill="#fff" />
    </svg>
  ),

  whatsapp: () => (
    <svg width="100" height="100" viewBox="0 0 175 175">
      <circle cx="88" cy="88" r="70" fill="#25D366" />
    </svg>
  ),

  messenger: () => (
    <svg width="100" height="100" viewBox="0 0 48 48">
      <rect width="48" height="48" rx="12" fill="#006AFF" />
    </svg>
  ),
};
