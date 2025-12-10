import React from "react";

import StaggeredLetter from "./staggeredText";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { TextShimmerWaveColor } from "./shimmerWave";
import CopyButton from "./copyBtn";

const Grid4 = () => {
  return (
    <div className="h-80 relative">
      <div className="md:h-50 h-65   ">
        <TextShimmerWaveColor />
        
        {/* <StaggeredLetter /> */}
      </div>
      <div className="absolute top-20">
        
      </div>
    </div>
  );
};

export default Grid4;

// flex md:h-50 h-65 flex-col items-center justify-center bg-center bg-cover bg-red-500
