import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import { Ripple } from "../ui/ripple";

const reviews = [
  {
    name: "Next.js",
    img: "/nextjs.svg",
  },
  {
    name: "React",
    img: "/react-2.svg",
  },
  {
    name: "JavaScript",
    img: "/images/flag/js.svg",
  },
  {
    name: "TypeScript",
    img: "/typescript.svg",
  },
  {
    name: "CSS",
    img: "/css.png",
  },
  {
    name: "Tailwind CSS",
    img: "/tailwindcss.svg",
  },

  {
    name: "Motion.dev",
    img: "/motion-dev",
  },
  {
    name: "Figma",
    img: "/figma.svg",
  },
  {
    name: "Notion",
    img: "/notion",
  },
  {
    name: "Markdown",
    img: "/markdown.svg",
  },
  {
    name: "Node.js",
    img: "/nodejs",
  },
  {
    name: "Express",
    img: "/express",
  },
];

const secondRow = [
  {
    name: "MongoDB",
    img: "/mongo-svgrepo-com.svg",
  },
  {
    name: "Clerk",
    img: "/clk.svg",
  },
  {
    name: "Zustand",
    img: "/zustand.png",
  },
  {
    name: "Zod",
    img: "/zod.webp",
  },
  {
    name: "PostgresSQL",
    img: "/postgresql.svg",
  },
  {
    name: "Shadcn UI",
    img: "/shad.svg",
  },
  {
    name: "GSAP",
    img: "/gsap.svg",
  },
];

const thirdRow = [
  {
    name: "Git",
    img: "/git-bash.svg",
  },
  {
    name: "Github",
    img: "/github-mustachae.svg",
  },
  {
    name: "Github Actions",
    img: "/square-github.svg",
  },
  {
    name: "Vercel",
    img: "/vercel.svg",
  },
  {
    name: "Netlify",
    img: "/netlify.png",
  },
];
const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border px-4 py-1  ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-4  w-full">
        <img
          className="rounded md:size-6"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-xs md:text-xs font-medium dark:text-white ">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-8 md:gap-4">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {/* Third row */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {thirdRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>

      {/* <Ripple/> */}
    </div>
  );
}
