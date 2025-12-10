"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 flex-col  justify-between py-4 text-sm font-medium text-foreground transition-all hover:underline text-left",
        "[&[data-state=open]>svg]:rotate-45",
        "transition-transform duration-300 ease-in-out",
        className
      )}
      {...props}>
      {children}
      <div className="flex gap-6 items-center border-2 border-blue-500 border-dashed w-fit px-6 font-semibold bg-muted/60 py-2 rounded-lg cursor-pointer justify-center  text-xs md:text-sm ml-[5%] md:ml-[20%]">
        <h3 className="">Click to reveal the features</h3>
        <Plus
        className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 ease-in-out" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm text-foreground transition-all",
      "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
    )}
    {...props}>
    <div
      className={cn(
        "w-full p-5 rounded-xl bg-muted/60 backdrop-blur-sm border border-border animate-shake-smooth flex items-center",
        className
      )}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };