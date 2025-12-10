"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";
import Image from "next/image";
import { Letter } from "./bento";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-10 items-center justify-center rounded-full border-2 bg-white p-1 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
      
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
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
      className="relative flex  md:h-[200px] md:w-[320px] items-center justify-center overflow-hidden p-4"
      ref={containerRef}
    >
      <div className="flex size-full  h-[320px] md:max-h-[200px] md:max-w-[280px] flex-col items-stretch justify-between gap-6 ">
        <div className="flex flex-row items-center justify-between ">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.figma />
          </Circle>
        </div>

        <div className="flex flex-row items-center justify-between ">
          <Circle ref={div2Ref}>
            <Icons.react />
          </Circle>
          <Circle ref={div4Ref} className="size-12">
            <Icons.vscode />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.tailwind />
          </Circle>
        </div>

        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.js />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.framer />
          </Circle>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
      <Letter/>
    </div>
  );
}

const Icons = {
  react: () => (
    <Image
      src="/images/flag/react.svg"
      alt="Icon"
      className="w-full h-full"
      height={10}
      width={12}
    />
  ),

  vscode: () => (
    <Image
      src="/images/flag/vs-code-svgrepo-com.svg"
      alt="Icon"
      className="w-full h-full object-contain"
      height={25}
      width={25}
      
    />
  ),
  googleDrive: () => (
     <Image
      src="/images/flag/nextjs.svg"
      alt="Icon"
      className="w-full h-full object-contain"
      height={45}
      width={45}
      
    />
  ),
  js: () => (
     <Image
      src="/images/flag/js.svg"
      alt="Icon"
      className="w-full h-full object-contain rounded-full"
      height={45}
      width={45}
      
    />
  ),
  figma: () => (
     <Image
      src="/images/flag/figma.svg"
      alt="Icon"
      className="w-full h-full object-contain"
      height={45}
      width={45}
      
    />
  ),
  tailwind: () => (
     <Image
      src="/images/flag/tailwind.svg"
      alt="Icon"
      className="w-full h-full object-contain"
      height={45}
      width={45}
      
    />
  ),
  framer: () => (
     <Image
      src="/images/flag/framer.svg"
      alt="Icon"
      className="w-full h-full object-contain"
      height={45}
      width={45}
      
    />
  ),
};


