import GradientText from "@/components/GradientText";
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import InteractiveTooltip from "@/components/mvpblocks/interactive-tooltip";
import { BentoDemo } from "@/components/newComponents/bento";
import { ProjectCard } from "@/components/newComponents/ProjectCard";
import Tape from "@/components/newComponents/Tape";
import VisitorCounter from "@/components/newComponents/VisitorCounter";
import Contacts from "@/components/sections/Contacts";
import { ProjectSection } from "@/components/sections/projects2";
import Skills from "@/components/sections/Skills";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Highlighter } from "@/components/ui/highlighter";
import { SparklesText } from "@/components/ui/sparkles-text";
import { TextLayoutFlip } from "@/components/ui/TextLayoutFlip";
import { DATA } from "@/data/resume";
import Projects from "@/new-sections/Projects";
import { Instrument_Serif } from "next/font/google";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
});

const Home = () => {
  return (
    <main className="flex flex-col min-h-[100dvh space-y-10 relative">
      <BackgroundBeamsWithCollision className="py-18">
        {/* Hero Section */}
        <section id="hero " className="">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between pr-10 ">
              <div className="flex-col flex flex-1 space-y-1.5 mt-1">
                <BlurFade
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yoffset={8}
                >
                  Hi, I&apos;m {DATA.name} 👋
                </BlurFade>
                <BlurFade
                  className="max-w-[600px] md:text-xl "
                  delay={BLUR_FADE_DELAY}
                >
                  {DATA.description}
                </BlurFade>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <InteractiveTooltip className="bg-purple-700" />
              </BlurFade>
            </div>
          </div>
        </section>

        {/* About Section below one */}

        <section id="about" className="mt-6">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <p className="  font-sans text-sm text-muted-foreground dark:text-white/80 mb-4 ">
              {DATA.summary}
            </p>
            <p className="font-sans text-sm text-muted-foreground dark:text-white/80 mb-4 ">
              {DATA.summary2}
            </p>
          </BlurFade>
        </section>

        {/* Skills Section */}

        <section className="mt-6 h-fit pt-6 relative rounded-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <Skills />
          </BlurFade>
          <BorderBeam duration={12} size={100} className="" />
        </section>
      </BackgroundBeamsWithCollision>
      {/* Skills Section */}
      {/* Bento Section */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <BentoDemo />
        </BlurFade>
      </section>
      {/* Project Section */}
      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <Projects />
        </BlurFade>
      </section>

      {/* TAPE */}

      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="relative max-w-[700px]">
            <div className="absolute z-10 w-[700px] -right-6 h-10 ">
              <Tape />
            </div>
          </div>
        </BlurFade>
      </section>

      {/* contact us */}
      <section className="mb-25">
        <Contacts />
        <ContactUs1 />
      </section>
      <section className="mb-56 flex items-center justify-center">
        <div>
          <h4>Visitor counter</h4>
          <VisitorCounter />
        </div>
      </section>
    </main>
  );
};

export default Home;
