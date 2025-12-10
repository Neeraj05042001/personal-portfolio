import { Inter as FontSans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { Dock } from "@/components/ui/dock";
import { DockDemo } from "@/components/ui/FloatingDock";
import Navbar from "@/components/newComponents/Navbar";
import PageLoader from "@/components/newComponents/PageLoader";
import { BlurFade } from "@/components/ui/blur-fade";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
});

export const metadata = {
  title: DATA.name,
  description: DATA.description,
};
const BLUR_FADE_DELAY = 4;
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "border min-h-screen bg-background  antialiased max-w-[700px] mx-auto  px-6 font-sans ",
          fontSans.variable,
          instrument.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        <PageLoader/>
          /<BlurFade delay={BLUR_FADE_DELAY}>
            {children}
          <Navbar/>
          </BlurFade>
          {/* <DockDemo /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
