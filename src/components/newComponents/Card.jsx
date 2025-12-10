import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Card = forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn("rounded-lg bg-card text-card-foreground", className)}
      {...props}
    />
  );
});

const CardHeader = forwardRef(function CardHeader(
  { className, ...props },
  ref
) {
  return (
    <div ref={ref} className={cn("flex flex-col", className)} {...props} />
  );
});

const CardTitle = forwardRef(function CardTitle(
  { className, ...props },
  ref
) {
  return (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
});

const CardDescription = forwardRef(function CardDescription(
  { className, ...props },
  ref
) {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});

const CardContent = forwardRef(function CardContent(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "text-pretty font-sans text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});

const CardFooter = forwardRef(function CardFooter(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("flex items-center pt-2", className)}
      {...props}
    />
  );
});

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
