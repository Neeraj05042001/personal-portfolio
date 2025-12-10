"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const imageUrl = [
  {
    id: 0,
    url: "/images/gta/hero-bg.webp",
  },
  {
    id: 1,
    url: "/images/gta/jason-3.webp",
  },
  {
    id: 2,
    url: "/images/gta/lucia-1.webp",
  },
  {
    id: 3,
    url: "/images/gta/photo1.webp",
  },
  {
    id: 4,
    url: "/images/gta/lucia-3.webp",
  },
  {
    id: 5,
    url: "/images/gta/jason-2.webp",
  },
];

let interval;

export const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(imageUrl);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative  h-60 w-60 md:h-60 md:w-46">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-92 md:h-60 md:w-76  rounded-3xl  shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="h-full w-full">
              <Image
                src={card.url}
                alt={card.id}
                height={200}
                width={300}
                className="h-full w-full rounded-t-3xl rounded-b-lg"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
