import { SKILLS } from "@/data/resume";
import Image from "next/image";
import React from "react";
import { BlurFade } from "../ui/blur-fade";
const BLUR_FADE_DELAY = 0.04;
const Skills = () => {
  return (
    <div className="min-h-0  flex flex-wrap gap-2">
      {SKILLS.map((skill) => (
        <BlurFade key={skill.skill} delay={BLUR_FADE_DELAY * 8}>
          {" "}
          <div className="  border-1 border-dashed rounded-md px-2.5 py-1.5 border-black/30 bg-white shadow-lg drop-shadow dark:bg-black dark:text-white flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  dark:border-white/40 btn-hover gap-x-1 cursor-pointer w-fit">
            <Image
              src={skill.icon}
              alt={skill.icon}
              width={30}
              height={30}
              className="h-3 w-3"
            />
            {skill.skill}
          </div>
        </BlurFade>
      ))}
    </div>
  );
};

export default Skills;
