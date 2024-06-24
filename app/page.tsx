import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { FlipWords } from "@/components/ui/flip-words";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="pt-10 gap-6 xl:gap-0 flex flex-col xl:flex-row xl:pt-10 xl:pb-24 items-center justify-between ">
          <div className="text-center xl:text-left order-2 xl:order-none xl:inline flex flex-col items-center justify-center">
            <FlipWordsDemo />
            <div
              className="text-4xl font-semibold w-full flex flex-col 
            items-center xl:inline "
            >
              <h1>Hello</h1>

              <h1>{"I'm"} Hasibur Rahman</h1>
              <h1 className="mb-8 text-lg pt-4 xl:max-w-[600px] text-white/70">
                I excel in combining my creative and technical expertise to
                deliver exceptional web development services.
              </h1>
            </div>
            <div className="flex flex-col xl:gap-3 xl:flex-row items-center gap-3">
              <Button variant={"outline"} className="uppercase gap-1">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <Socials />
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}

function FlipWordsDemo() {
  const words = [
    `Software - Engineer`,
    "Web - Developer",
    "Software - Developer",
    "Frontend - Engineer",
  ];

  return (
    <div className="h-[7rem] flex justify-start items-center text-4xl font-bold">
      <FlipWords words={words} />
    </div>
  );
}
