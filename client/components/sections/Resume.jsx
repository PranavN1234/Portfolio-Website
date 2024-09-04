"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiFlask,
  SiSpring,
  SiOpenai,
  SiGooglecloud,
  SiTypescript,
  SiGo,
  SiJenkins,
} from "react-icons/si";


// About Data
const about = {
  title: "About me",
  description: "I love Chess and Debating! Here is a bit more about me",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Pranav Iyer",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 646-956-9715",
    },
    {
      fieldName: "Full time Experience",
      fieldValue: "1 year",
    },
    {
      fieldName: "Part time Experience",
      fieldValue: "1 year",
    },
    {
      fieldName: "Email",
      fieldValue: "pranavniyer@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish, Tamil, Hindi",
    },
  ],
};

// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I have a combined two years of professional work experience, 14 months Full time and 1 year Part Time",
  items: [
    {
      company: "Sayl",
      position: "Software Engineer",
      duration: "Aug 2024 - Present",
    },
    {
      company: "New York University",
      position: "API Developer Intern (Part Time 20 hr/wk)",
      duration: "May 2023 - May 2024",
    },
    {
      company: "Bank of America",
      position: "Software Engineer 1",
      duration: "July 2021 - August 2022",
    },
  ],
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description: "My Education History since 2013",
  items: [
    {
      institution: "Indian School Muscat",
      degree: "Highschool (94%)",
      duration: "2013-2017",
    },
    {
      institution: "Vellore Institute of Technology",
      degree: "B.Tech - Computer Science & Engineering (GPA: 8.79/10)",
      duration: "2017-2021",
    },
    {
      institution: "New York University, Tandon School of Engineering",
      degree: "MS in Computer Engineering (GPA: 3.94/4.0)",
      duration: "2022 - 2024",
    },
  ],
};

// Skills Data
const skills = {
  title: "My skills",
  description:
    "A range of programming languages, frameworks, databases, and cloud technologies that I've worked with.",
  skillCategories: [
    {
      category: "Programming Languages",
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiGo />, name: "GoLang" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
      ],
    },
    {
      category: "Frameworks/Libraries",
      skills: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <SiSpring />, name: "Spring Boot" },
        { icon: <FaNodeJs />, name: "Node.js" },
      ],
    },
    {
      category: "Technologies and Tools",
      skills: [
        { icon: <FaDocker />, name: "Docker" },
        { icon: <SiOpenai />, name: "OpenAI" },
        { icon: <SiJenkins />, name: "Jenkins" },
      ],
    },
    {
      category: "Cloud",
      skills: [
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiGooglecloud />, name: "GCP" },
      ],
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-[#8c5e58]">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-[#8c5e58]/80 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                {/* Scrollable experience container */}
                <ScrollArea className="max-h-[400px] overflow-y-auto pr-4">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#e7d8c9] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-[#A2707A]">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left text-[#8c5e58]">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-[#A2707A]"></span>
                            <p className="text-[#8c5e58]/80">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-[#8c5e58]">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-[#8c5e58]/80 mx-auto xl:mx-0">
                  {education.description}
                </p>
                {/* Scrollable education container */}
                <ScrollArea className="max-h-[400px] overflow-y-auto pr-4">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#e7d8c9] py-6 px-10 rounded-xl flex flex-col justify-start gap-1"
                        >
                          <span className="text-center text-[#A2707A]">
                            {item.duration}
                          </span>
                          <h3 className="text-xl text-center text-[#8c5e58]">
                            {item.institution}
                          </h3>
                          <p className="text-center text-[#8c5e58]/80">
                            {item.degree}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-[#8c5e58]">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-[#8c5e58]/80 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                {/* Scrollable skills container */}
                <div className="overflow-y-auto max-h-[400px] pr-4">
                  {skills.skillCategories.map((category, idx) => (
                    <div key={idx} className="mb-8">
                      <h4 className="text-2xl font-semibold text-[#8c5e58] mb-4">
                        {category.category}
                      </h4>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {category.skills.map((skill, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#e7d8c9] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-[#A2707A] transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize text-[#8c5e58]">
                                    {skill.name}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left "
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-[#8c5e58]">
                  {about.title}
                </h3>
                <p className="max-w-[600px] text-[#8c5e58]/80 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-wrap items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-[#8c5e58]/80">
                          {item.fieldName}
                        </span>
                        <span className="text-xl text-[#8c5e58]">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
