import { StarsIcon } from "lucide-react";
import React from "react";
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
const Tape = () => {
  return (
    // <div className="overflow-x-clip pb-32 pt-1 md:py-2">
    //   <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 dark:from-emerald-500 dark:via-cyan-500 dark:to-blue-600">
    //     <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    //       <div className="flex flex-none animate-move-left gap-4 py-3 pr-4 [animation-duration:30s]">
    //         {[...new Array(2)].fill(0).map((_, index) => (
    //           <React.Fragment key={index}>
    //             {words.map((word, wordIndex) => (
    //               <div
    //                 key={wordIndex}
    //                 className="inline-flex items-center gap-4"
    //               >
    //                 <span className="text-sm font-extrabold uppercase text-gray-900 dark:text-white">
    //                   {word}
    //                 </span>
    //                 <StarsIcon className="size-6 -rotate-12 text-gray-900 dark:text-white" />
    //               </div>
    //             ))}
    //           </React.Fragment>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="overflow-x-clip pb-32 pt-1 lg:py-2">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 dark:from-fuchsia-600 dark:via-pink-600 dark:to-rose-600">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none animate-move-left gap-4 py-3 pr-4 [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {words.map((word, wordIndex) => (
                  <div
                    key={wordIndex}
                    className="inline-flex items-center gap-4"
                  >
                    <span className="text-sm font-extrabold uppercase text-white">
                      {word}
                    </span>
                    <StarsIcon className="size-6 -rotate-12 text-white" />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;
