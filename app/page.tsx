import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { FlipWordsDemo } from "@/components/FlipWords";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
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
            <div className="flex flex-col xl:flex-row items-center gap-3">
              <Link
                href={
                  "https://drive.google.com/file/d/1dIh09VtJ5RS6q6_qCdmuWYTGnRLUngat/view?usp=sharing"
                }
                target="_blank"
              >
                <Button variant={"outline"} className="uppercase gap-1">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <Socials />
            </div>
          </div>
          <div className="order-1 xl:order-none relative">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
