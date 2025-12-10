"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function TextLayoutFlip() {
  return (
    <div>
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-1 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlip
          text=""
          words={[
            "From Simple Scripts to Enterprise Solutions",
            "From Frontend Magic to Backend Systems",
            "From Scalable Webapp to Complex Mobile Apps ",
            "From User Interfaces to Cloud Infrastructure",
          ]}
        />
      </motion.div>
      <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
        Turning innovative concepts into seamless digital experiences.
      </p>
    </div>
  );
}
