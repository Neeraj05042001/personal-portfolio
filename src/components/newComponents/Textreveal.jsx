"use client"

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Speed of the typewriter effect
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const TextReveal = ({ text, className }) => {
  const words = text.split(" ");

  return (
    <motion.p
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }} // Animates once when 80% visible
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          // The 'inline-block' and 'mr-1' classes are crucial for ensuring
          // each word is treated as a separate animated unit and has a space.
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TextReveal;
