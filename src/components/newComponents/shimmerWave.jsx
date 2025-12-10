import { TextShimmerWave } from "../../../components/motion-primitives/text-shimmer-wave";
import CopyButton from "./copyBtn";

export function TextShimmerWaveColor() {
  return (
    <div className="w-full h-full  flex flex-col items-center justify-center ">
      <div>
        <TextShimmerWave
          className=" text-[rgb(0,0,0,65%)] dark:text-[rgb(255,255,255,90%)] -translate-y-4 w-full text-balance  text-center font-bold font-instrument-serif text-3xl md:text-2xl"
          duration={1}
          spread={1}
          zDistance={1}
          scaleDistance={1.1}
          rotateYDistance={20}
        >
          Let's work together on your next project
        </TextShimmerWave>
      </div>
      <div className="w-full flex items-center justify-center ">
        {" "}
        <CopyButton />
      </div>
    </div>
  );
}
