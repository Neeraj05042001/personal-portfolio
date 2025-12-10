import { Instrument_Serif } from "next/font/google";
import React from "react";
// import { Globe } from "../ui/globe";
// import Earth from "./Globe2";
import { Button } from "../ui/button";
import Image from "next/image";
import { MapIcon, MapPin } from "lucide-react";
import Earth from "./Globe2";
// import Earth from "../ui/globe";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
});

const TimeZoneGlobe = () => {
  return (
    // from-[#81a2fd98] to-[#7b9cda]
    <div className="relative">
      <h3
        className={`bg-linear-to-b from-blue-800 to-pink-800  bg-clip-text px-4 text-center font-bold  text-[28px] text-transparent leading-[100%] tracking-wide md:mt-5 dark:from-[#edeffd] ${instrument.className} `}
      >
        I'm very flexible with time Zone communications
      </h3>

      <div className="">
        <div className="px-4 pt-6 flex justify-center items-center  gap-2">
          <Button
            variant="outline"
            className="py-0.5 gap-1 px-2 dark:bg-[#161616] bg-linear-to-t from-white/10 to-pink-800/30 shadow-xl"
          >
            <Image
              src="/images/flag/uk.png"
              alt="uk-flag"
              height={22}
              width={22}
              className=""
            />
            <span className="text-sm tracking-wide">UK</span>
          </Button>

          <Button
            variant="outline"
            className="py-0.5 gap-1 px-2 dark:bg-[#161616] bg-linear-to-t from-[#81a2fd98] to-[#7b9cda] shadow-xl"
          >
            <Image
              src="/images/flag/india.png"
              alt="uk-flag"
              height={22}
              width={22}
              className=""
            />
            <span className="text-sm tracking-wide">India</span>
          </Button>

          <Button
            variant="outline"
            className="py-0.5 gap-1 px-2 dark:bg-[#161616] bg-linear-to-t from-white/10 to-pink-800/30 shadow-xl"
          >
            <Image
              src="/images/flag/usa.png"
              alt="uk-flag"
              height={22}
              width={22}
              className=""
            />
            <span className="text-sm tracking-wide">USA</span>
          </Button>
        </div>
        <Earth className="absolute w-120 top-28 -left-20 overflow-hidden" />
        <div className="absolute md:top-70 top-55 p-4 pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
          <MapPin className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
          <p className="max-w-lg text-neutral-400">REMOTE</p>
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            India
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TimeZoneGlobe;
