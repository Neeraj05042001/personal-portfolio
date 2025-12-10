"use client";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useState, useEffect } from "react";

const defaultItems = [
  {
    id: 1,
    name: "Neeraj Kumar",
    designation: "Front-End Developer",
    images: [
      "https://res.cloudinary.com/deowedlsd/image/upload/v1765400700/IMG_20250905_062845_391_grlnat.webp",
      "https://res.cloudinary.com/deowedlsd/image/upload/c_fill,w_120,h_160,ar_3:4/v1765400701/Snapchat-2011934729_zfboif.jpg",
      "https://res.cloudinary.com/deowedlsd/image/upload/c_fill,w_120,h_160,ar_3:4/v1765400701/Screenshot_20251211-021210.Instagram_kiaoh3.png",
    ],
  },
];

export default function InteractiveTooltip({ items = defaultItems }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImageIndices, setCurrentImageIndices] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  // Rotate images every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices((prevIndices) => {
        const newIndices = { ...prevIndices };
        items.forEach((item) => {
          if (item.images && item.images.length > 1) {
            newIndices[item.id] =
              (prevIndices[item.id] + 1) % item.images.length;
          }
        });
        return newIndices;
      });
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, [items]);

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item, idx) => {
        // Get current image - handles both array and single image
        const currentImage = item.images
          ? item.images[currentImageIndices[item.id]]
          : item.images;

        return (
          <div
            className="group relative -mr-4"
            key={item.name}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="bg-background/95 border-border absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-lg border px-4 py-2 text-xs shadow-xl backdrop-blur-sm"
                >
                  <div className="from-primary/5 to-primary/5 absolute inset-0 rounded-lg bg-gradient-to-b via-transparent" />
                  <div className="via-primary absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent to-transparent" />
                  <div className="via-primary/60 absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent to-transparent" />
                  <div className="text-foreground relative z-30 text-base font-bold">
                    {item.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {item.designation}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <img
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={currentImage}
              alt={item.name}
              className="border-background ring-primary/20 group-hover:ring-primary/40 relative !mr-0 h-30 w-30 rounded-full border-2 object-cover object-top !p-0 ring-2 transition duration-500 group-hover:z-30 group-hover:scale-105"
            />
          </div>
        );
      })}
    </>
  );
}
