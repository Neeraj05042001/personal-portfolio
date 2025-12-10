"use client";;
import { Check, Copy, LoaderCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

const defaultIcons = {
  idle: <Copy size={16} />,
  loading: <LoaderCircle className="animate-spin" size={16} />,
  success: <Check size={16} />,
};

export default function ButtonCopy({
  onCopy,
  idleIcon = defaultIcons.idle,
  loadingIcon = defaultIcons.loading,
  successIcon = defaultIcons.success,
  className = "",
  duration = 2000,
  loadingDuration = 1000,
  disabled = false
}) {
  const [buttonState, setButtonState] = useState("idle");

  const handleClick = useCallback(async () => {
    setButtonState("loading");
    if (onCopy) {
      await onCopy();
    }
    setTimeout(() => {
      setButtonState("success");
    }, loadingDuration);
    setTimeout(() => {
      setButtonState("idle");
    }, loadingDuration + duration);
  }, [onCopy, loadingDuration, duration]);

  const icons = {
    idle: idleIcon,
    loading: loadingIcon,
    success: successIcon,
  };

  return (
    <div className="flex justify-center">
      <div
        aria-label={buttonState === "loading" ? "Copying..." : "Copy"}
        className={`relative w-auto cursor-pointer overflow-hidden disabled:opacity-50 ${className}`}
        disabled={buttonState !== "idle" || disabled}
        onClick={handleClick}
        type="button">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="flex w-full items-center justify-center"
            exit={{ opacity: 0, y: 25, filter: "blur(10px)" }}
            initial={{ opacity: 0, y: -25, filter: "blur(10px)" }}
            key={buttonState}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}>
            {icons[buttonState]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
