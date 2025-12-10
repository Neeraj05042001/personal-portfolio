"use client";
import React from "react";

import { motion } from "framer-motion";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
const StaggeredText = ({}) => {
  return (
    <div>
      <FlipLink>Let's work together</FlipLink>
      <FlipLink>on your next project</FlipLink>

      <AnimatedShinyText>Hello hunny bunny</AnimatedShinyText>
    </div>
  );
};

export default StaggeredText;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href="#"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black "
    >
      <motion.div variants={{ inital: { y: 20 }, hovered: { y: 40 } }}>
        {children}
      </motion.div>
    </motion.a>
  );
};
