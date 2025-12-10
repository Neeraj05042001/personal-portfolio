import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { AnimatedBeamMultipleOutputDemo } from "./bento-grid-1";
import { AnimatedBeamDemo } from "./bento-grid-1b";
import TimeZoneGlobe from "./TimeZoneGlobe";
import { LocateFixedIcon, MapPin } from "lucide-react";
import ShinyText from "../ShinyText";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import { Highlighter } from "../ui/highlighter";
import MarqueeGrid2 from "./MarqueeGrid2";
import grid4 from "./grid4";
import Grid4 from "./grid4";
import TestimonialMarquee from "./TestimonialMarquee";

export const Letter = () => {
  return (
    <>
      <div className="absolute top-5 md:top-2 w-full text-center  flex flex-col gap-3 items-center justify-center  ">
        <h4 className="text-2xl md:text-lg font-bold tracking-tight drop-shadow-lg ">
          Transforming
        </h4>

        <div className=" -mt-4">
          <LayoutTextFlip className="" />
        </div>
        <div className="md:hidden">
          <Highlighter padding="2px" action="circle" color="#87CEFA">
            into
          </Highlighter>
        </div>
      </div>
      <div className="absolute bottom-20 left-35 md:bottom-7 md:left-29">
        <div className="md:hidden">
          <Highlighter padding={0.1} action="underline" color="#FF9800">
            into reality
          </Highlighter>
        </div>
        <div className="hidden md:block">
          <Highlighter padding="2px" action="circle" color="#FF9800">
            into reality
          </Highlighter>
        </div>
      </div>
    </>
  );
};
const features = [
  {
    Icon: FileTextIcon,
    name: "",
    description: "grid-1",
    href: "/",
    cta: "",
    background: <AnimatedBeamDemo />,
    className: " md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2",
  },
  {
    Icon: InputIcon,
    name: "grid-2",
    description: "",
    href: "/",
    cta: "",
    background: <MarqueeGrid2 />,
    className:
      " md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 row-start-2 row-end-4",
  },
  {
    Icon: MapPin,
    name: "grid-3",
    description: "REMOTE ",
    href: "/",
    cta: "",
    background: <TimeZoneGlobe />,
    className: "md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "grid-4",
    description: "",
    href: "/",
    cta: "",
    background: <Grid4 />,
    className:
      "md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4 relative ",
  },
  {
    Icon: BellIcon,
    name: "grid-5",
    description: "",
    href: "/",
    cta: "Learn more",
    background: <TestimonialMarquee/>,
    className: "md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-5",
  },
];

export function BentoDemo() {
  return (
    <BentoGrid className="grid md:auto-rows-[220px] md:grid-cols-2">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
