"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  TbBrandMantine,
  TbBrandFirebase,
  TbBrandTypescript,
} from "react-icons/tb";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const about = {
  title: "About me",
  description:
    "Hello! I'm Hasibur Rahman, a passionate and dedicated front-end developer with a BSc degree in Computer Science",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hasibur Rahman",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880)-1733103038",
    },
    {
      fieldName: "Experience",
      fieldValue: "1.5+ yrs",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "hasibur.developer@gmail.com",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description: "",
  items: [
    {
      company: "MoMagic Bangladesh",
      position: "Quality Assurance (Intern)",
      duration: "2022",
    },
    {
      company: "SAZIM Tech LTD.",
      position: "Full-Stack (Intern)",
      duration: "2023",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description: "",
  items: [
    {
      institution: "BRAC UNIVERSITY",
      degree: "Bachelor in Science - Computer Science",
      duration: "2022",
    },
    {
      institution: "UNIVERSITY of TORONTO",
      degree: "Bachelor in Science - Computer Science",
      duration: "2017",
    },
    {
      institution: "MASTERMIND ENGLISH MEDIUM SCHOOL",
      degree: "A-LEVELS",
      duration: "2015",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "",
  skillSet: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <TbBrandMantine />,
      name: "mantine UI",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <TbBrandTypescript />,
      name: "typescript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNode />,
      name: "node.js",
    },
    {
      icon: <TbBrandFirebase />,
      name: "firebase",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh flex items-center
     justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold hover:text-accent">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold hover:text-accent">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold hover:text-accent">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillSet.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 hover:animate-spin">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <h3 className="text-4xl font-bold mb-2 hover:text-accent">
                {about.title}
              </h3>
              {/* <p className="font-medium">
                Hello! {`I'm`}{" "}
                <span className="text-accent">Hasibur Rahman</span>, a
                passionate and dedicated front-end developer with a BSc in
                Computer Science. My journey into the world of web development
                began during my university days when I was captivated by the
                potential to create visually appealing and interactive web
                experiences. With a solid foundation in computer science
                principles, I have honed my skills in HTML, CSS, and JavaScript,
                alongside modern libraries and frameworks such as React and
                NextJs. <br />I thrive on turning complex problems into
                intuitive, user-friendly interfaces and am driven by a
                relentless curiosity to learn and adapt to new technologies. My
                experience ranges from building responsive websites and
                single-page applications to optimizing performance and ensuring
                cross-browser compatibility. I believe the best user experiences
                are crafted when creativity meets technical expertise, and I
                strive to bring both to every project I undertake. <br /> When{" "}
                {`I'm`} not coding, you can find me exploring the latest design
                trends, looking for open-source projects to contribute, or
                diving into a good book on the latest web technologies. I am
                also an advocate for clean code and best practices, always
                aiming to write maintainable and scalable code. {`Let's`}{" "}
                connect and create something amazing together!
              </p> */}
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
              </p>
              <br />
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((info, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4 text-pretty"
                    >
                      <span className="text-white/60">{info.fieldName}: </span>
                      <span className="text-xl hover:text-accent">
                        {info.fieldValue}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
