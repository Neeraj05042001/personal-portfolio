import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import { BentoDemo } from "@/components/newComponents/bento";
import { AnimatedBeamMultipleOutputDemo } from "@/components/newComponents/bento-grid-1";
import { AnimatedBeamDemo } from "@/components/newComponents/bento-grid-1b";
import { ConfettiFireworks } from "@/components/newComponents/confettiFire";
import ContactNexus from "@/components/newComponents/ContactForm";
import CopyButton from "@/components/newComponents/copyBtn";
import DotGrid from "@/components/newComponents/DotGrid";
import { LampDemo } from "@/components/newComponents/lamp";
import SocialButton from "@/components/newComponents/socialBtn";
import ParticleButton from "@/components/newComponents/socialBtn";
import StaggeredText from "@/components/newComponents/staggeredText";
import TestimonialMarquee from "@/components/newComponents/TestimonialMarquee";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { DotIcon, StarIcon, StarsIcon } from "lucide-react";
import React from "react";
// import { StarIcon } from "lucide-react";

const words = [
  "Performant",
  " Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

const page = () => {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip ">
      {/* <BentoDemo /> */}
      {/* <AnimatedBeamMultipleOutputDemo />
      <AnimatedBeamDemo /> */}

      {/* <TestimonialMarquee /> */}
      {/* <ContactNexus/> */}

      {/* <ContactUs1/> */}
      {/* <SocialButton/> */}

      <div className="overflow-x-clip pb-32 pt-16 lg:py-24">
        <div className="-mx-1 -rotate-3 bg-gradient-to-r from-orange-300 to-sky-400">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none animate-move-left gap-4 py-3 pr-4 [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, index) => (
                <React.Fragment key={index}>
                  {words.map((word, wordIndex) => (
                    <div
                      key={wordIndex}
                      className="inline-flex items-center gap-4"
                    >
                      <span className="text-sm font-extrabold uppercase text-gray-900">
                        {word}
                      </span>
                      <StarsIcon className="size-6 -rotate-12 text-gray-900" />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      

      <div className="overflow-x-clip pb-32 pt-16 lg:py-24">
  <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 dark:from-emerald-500 dark:via-cyan-500 dark:to-blue-600">
    <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex flex-none animate-move-left gap-4 py-3 pr-4 [animation-duration:30s]">
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {words.map((word, wordIndex) => (
              <div
                key={wordIndex}
                className="inline-flex items-center gap-4"
              >
                <span className="text-sm font-extrabold uppercase text-gray-900 dark:text-white">
                  {word}
                </span>
                <StarsIcon className="size-6 -rotate-12 text-gray-900 dark:text-white" />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default page;
