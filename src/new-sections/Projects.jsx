import GradientText from "@/components/GradientText";
import { ProjectCard } from "@/components/newComponents/ProjectCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { Highlighter } from "@/components/ui/highlighter";
import { SparklesText } from "@/components/ui/sparkles-text";
import { TextLayoutFlip } from "@/components/ui/TextLayoutFlip";
import { DATA } from "@/data/resume";
import { Instrument_Serif } from "next/font/google";
import React from "react";
const BLUR_FADE_DELAY = 0.04;

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
});
const Projects = () => {
  return (
    <section id="projects " className="">
      <div className="space-y-12 w-full py-2">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            {/* ----- */}
            <div className="max-w-[700px] mx-auto pt-1 ">
              <h2
                className={`w-full text-2xl md:text-4xl mx-auto mb-4 text-black font-bold dark:text-white max-w-4xl flex justify-center items-center ${instrument.className} `}
              >
                <Highlighter action="underline" color="#87CEFA">
                  <div className="flex items-center text-2xl md:text-4xl gap-3 ">
                    <SparklesText className="text-5xl md:text-6xl lg:text-7xl italic ">
                      Curated
                    </SparklesText>
                    <GradientText className=" text-5xl md:text-6xl lg:text-7xl italic ">
                      Work
                    </GradientText>
                  </div>
                </Highlighter>
              </h2>

              <TextLayoutFlip />
            </div>

            {/* --- */}
            {/* <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites.
              </p>
            </div> */}
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
                gradient={project.gradient}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
