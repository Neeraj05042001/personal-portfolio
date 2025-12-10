"use client";

import { Instrument_Serif } from "next/font/google";
import React, { useEffect, useState } from "react";
import { MarqueeDemo } from "./Marquee";
import { Ripple } from "../ui/ripple";
import { Safari } from "../ui/safari";
import DotGrid from "./DotGrid";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Highlighter } from "../ui/highlighter";
import FractalDotGridExample from "./fractoexample";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
});
const MarqueeGrid2 = () => {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <h2
        className={`w-full mt-6 select-none bg-gradient-to-b from-[#fd81e298] to-[#da7bda] bg-clip-text px-4 pb-2 text-center font-bold text-3xl  md:text-3xl text-transparent leading-[100%] tracking-wide dark:from-[#edeffd] ${instrument.className}`}
      >
        Passionate about cutting-edge technologies
      </h2>
      <MarqueeDemo />
      <div className=" w-full md:h-45 md:top-64 top-112 px-8 h-65 absolute md:px-8 md:pt-5 py-14">
        <Safari className="w-full " imageSrc="/">
          <div style={{ width: "100%", height: "600px", position: "relative" }}>
            <div className={`w-full h-150 relative opacity-0 dark:[opacity:1]`}>
              (
              <DotGrid
                dotSize={4}
                gap={10}
                baseColor={theme === "light" ? "#262626" : "#fff"}
                activeColor="#5227FF"
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
              />
              )
            </div>

            <div className="absolute top-10 w-full  h-full ">
              <div className="font-serif text-center font-semibold leading-[150%]">
                <h3 className="text-[#475569]  dark:text-[#FFFFFF]">
                  Websites that
                </h3>
                <Highlighter
                  action="underline"
                  color="#FBBF24"
                  padding={2}
                  isView={true}
                >
                  <span className="text-blue-600">impact</span>
                </Highlighter>
              </div>
            </div>
          </div>
        </Safari>
      </div>
      <div className="md:h-[680px] h-[780px] relative ">
        <Ripple className=" " />
      </div>
    </div>
  );
};

export default MarqueeGrid2;
