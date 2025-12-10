"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Instrument_Serif, Outfit } from "next/font/google";
import { BlurFade } from "../ui/blur-fade";
import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";
import { GlowCard } from "../nurui/spotlight-card";
import { AnimatedTextGenerate } from "../ui/animated-textgenerate";
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});


const BLUR_FADE_DELAY = 0.04;
const techStack = [
  {
    skill: "JavaScript",
    icon: "/javascript.svg",
  },
  {
    skill: "React",
    icon: "/react-2.svg",
  },
  {
    skill: "Next.js",
    icon: "/nextjs.svg",
  },
  {
    skill: "Node.js",
    icon: "/node-16-svgrepo-com.svg",
  },
  {
    skill: "MongoDB",
    icon: "/mongo-svgrepo-com.svg",
  },

  {
    skill: "Tailwind CSS",
    icon: "/tailwindcss.svg",
  },
  {
    skill: "GSAP",
    icon: "/gsap.svg",
  },
  {
    skill: "Framer",
    icon: "/framer.svg",
  },
  {
    skill: "Clerk",
    icon: "/clk.svg",
  },
  {
    skill: "Zustand",
    icon: "/zustand.png",
  },
  {
    skill: "Figma",
    icon: "/figma.svg",
  },
  {
    skill: "PostgreSQL",
    icon: "/postgresql.svg",
  },
  {
    skill: "Cloudinary",
    icon: "/cloud.svg",
  },
  {
    skill: "Shadcn UI",
    icon: "/shad.svg",
  },
  {
    skill: "Chakra UI",
    icon: "/chakra.svg",
  },
  {
    skill: "Inngest",
    icon: "/inngest.jpeg",
  },
  {
    skill: "Arcjet",
    icon: "/arjt.png",
  },
  {
    skill: "Prisma",
    icon: "/light-prisma-svgrepo-com.svg",
  },
  {
    skill: "Gemini AI",
    icon: "/gemini-color.svg",
  },
  {
    skill: "Vercel",
    icon: "/Vercel.svg",
  },
  {
    skill: "Supabase",
    icon: "/supa.svg",
  },
];

export function ProjectSection() {
  const project1 = techStack.filter((stack) =>
    [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Clerk",
      "Supabase",
      "Prisma",
      "Inngest",
      "Arcjet",
      "Gemini AI",
      "Vercel",
    ].includes(stack.skill)
  );
  const data = [
    {
      title: "Next Ventures",
      content: (
        <div className="relative ">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <GlowCard className="max-h-62 -mb-8">
              <div className="h-full">
                {/* <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" /> */}
                <img
                  src="https://assets.aceternity.com/templates/startup-2.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="h-60 w-full rounded-2xl object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                {/* <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" /> */}
                {/* <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" /> */}
              </div>
            </GlowCard>

            <div className="my-14 w-full px-5 pb-5 pt-1 rounded-xl bg-muted/60 backdrop-blur-sm border-b border-border">
              <AnimatedTextGenerate
                text="FinSight AI simplifies finance management with AI-powered tracking, smart categorization, budget alerts, and insights through interactive charts and monthly reports."
                className=" text-sm mb-6 "
                textClassName={`text-md md:text-sm text-neutral-800 dark:text-white ${outfit.className} `}
                blurEffect={true}
                speed={1}
                highlightWords={["FinSight", "AI"]}
                highlightClassName=" text-red-500 dark:text-red-400 font-bold"
                linkWords={[
                  "smart",
                  "categorization",
                  "budget",
                  "alerts",
                  "interactive",
                  "monthly",
                ]}
                linkHrefs={["/about", "/", "/", "/", "/", "/", "/"]}
                linkClassNames={[
                  "underline decoration-pink-500 dark:decoration-pink-400 hover:decoration-pink-400 dark:hover:decoration-pink-300 transition",
                  "underline decoration-emerald-500 dark:decoration-sky-400 hover:decoration-sky-400 dark:hover:decoration-sky-300 transition",
                  "underline decoration-blue-500 dark:decoration-blue-400 hover:decoration-blue-400 dark:hover:decoration-blue-300 transition",
                  "underline decoration-green-500 dark:decoration-green-400 hover:decoration-green-400 dark:hover:decoration-green-300 transition",

                  "underline decoration-teal-500 dark:decoration-teal-400 hover:decoration-green-400 dark:hover:decoration-green-300 transition",
                  "underline decoration-red-500 dark:decoration-red-400 hover:decoration-green-400 dark:hover:decoration-green-300 transition",
                ]}
              />
              <ul
                className={` text-accent-foreground/85 -mt-4 flex flex-col gap-y-2 text-base`}
              >
                <li className="flex items-center text-sm ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black rounded-lg"
                  >
                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                  </svg>
                  Track income and expenses across multiple accounts with smart
                  categorization
                </li>
                <li className="flex items-center text-sm font-outfit">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black rounded-lg"
                  >
                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                  </svg>{" "}
                  AI receipt scanning for hassle-free expense recording🧾
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black rounded-lg"
                  >
                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                  </svg>
                  Manage recurring transactions and automate financial logs🔁
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black rounded-lg"
                  >
                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                  </svg>
                  Set budgets with an email alert system when nearing spending
                  limits💰
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black rounded-lg"
                  >
                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                  </svg>
                  Analyze daily transactions or long-term health with
                  interactive charts📈
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black rounded-lg"
                  >
                    <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                  </svg>
                  Receive AI-powered monthly reports with actionable insights{" "}
                </li>
              </ul>

              <div className="   w-full flex flex-col flex-wrap gap-2 relative mx-auto px-0.5 md:px-4   py-2 mt-4  rounded-2xl border-black/30 dark:border-white bg-transparent dark:bg-transparent dark:text-white">
                <div className="w-full flex flex-wrap gap-2">
                  {project1.map((skill) => (
                    <BlurFade key={skill.skill} delay={BLUR_FADE_DELAY * 4}>
                      <div className="relative  border-1  rounded-md px-2.5 py-1.5 border-black/30 bg-white shadow-lg drop-shadow flex items-center text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2   btn-hover gap-x-1 cursor-pointer w-fit dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={30}
                          height={30}
                          className="h-3 w-3 dark:text-white"
                        />
                        {skill.skill}
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>

              <BorderBeam duration={16} size={100} />
            </div>
          </BlurFade>
        </div>
      ),
    },
    // {
    //   title: "Early 2023",
    //   content: (
    //     <div>
    //       <p
    //         className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //         I usually run out of copy, but when I see content this big, I try to
    //         integrate lorem ipsum.
    //       </p>
    //       <p
    //         className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //         Lorem ipsum is for people who are too lazy to write copy. But we are
    //         not. Here are some more example of beautiful designs I built.
    //       </p>
    //       <div className="grid grid-cols-2 gap-4">
    //         <img
    //           src="https://assets.aceternity.com/pro/hero-sections.png"
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //         <img
    //           src="https://assets.aceternity.com/features-section.png"
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //         <img
    //           src="https://assets.aceternity.com/pro/bento-grids.png"
    //           alt="bento template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //         <img
    //           src="https://assets.aceternity.com/cards.png"
    //           alt="cards template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //       </div>
    //     </div>
    //   ),
    // },
    // {
    //   title: "Changelog",
    //   content: (
    //     <div>
    //       <p
    //         className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className="mb-8">
    //         <div
    //           className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Card grid component
    //         </div>
    //         <div
    //           className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Startup template Aceternity
    //         </div>
    //         <div
    //           className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Random file upload lol
    //         </div>
    //         <div
    //           className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Himesh Reshammiya Music CD
    //         </div>
    //         <div
    //           className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
    //           ✅ Salman Bhai Fan Club registrations open
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <img
    //           src="https://assets.aceternity.com/pro/hero-sections.png"
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //         <img
    //           src="https://assets.aceternity.com/features-section.png"
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //         <img
    //           src="https://assets.aceternity.com/pro/bento-grids.png"
    //           alt="bento template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //         <img
    //           src="https://assets.aceternity.com/cards.png"
    //           alt="cards template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
