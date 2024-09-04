"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import SectionHeading from "@/components/SectionHeading";

const projects = [
    {
      num: "01",
      category: "AI Tool",
      title: "Leya",
      description:
        "AI coding assistant which can directly be ported into the terminal and be used to query complex Git repositories.",
      stack: [{ name: "Python" }, { name: "Git" }, { name: "AI" }],
      image: "/assets/work/leya.png",
      live: "https://pypi.org/project/leya/",
      github: "https://github.com/PranavN1234/Leya",
    },
    {
      num: "02",
      category: "Extension",
      title: "Farmers Market",
      description:
        "An RAG(Retrieval Augmented Generation) based Chrome extension that allows users to query the partselect website for information.",
      stack: [{ name: "Chrome Extension" }, { name: "RAG" }, { name: "JavaScript" }],
      image: "/assets/work/partselect.jpg",
      live: "",
      github: "https://github.com/PranavN1234/case-study",
    },
    {
      num: "03",
      category: "Web Development",
      title: "Portfolio",
      description:
        "Created and deployed a complex portfolio website with ReactJS and Tailwind CSS. The website comes with a personal Chatbot made using OpenAI.",
      stack: [{ name: "ReactJS" }, { name: "Tailwind CSS" }, { name: "OpenAI" }],
      image: "/assets/work/logo-white.png",
      live: "https://pranavn1234.github.io/Portfolio",
      github: "https://github.com/PranavN1234/Portfolio",
    },
    {
      num: "04",
      category: "Data Visualization",
      title: "NBA Stat Visualizer",
      description:
        "The NBA dataset visualizer is a Java project that processes and visualizes 20 years of NBA match data. It uses Java technologies like Spring Batch and JPA for backend processing, and ReactJS for the frontend UI. The application is containerized using Docker for easy deployment.",
      stack: [{ name: "Java" }, { name: "Spring Batch" }, { name: "ReactJS" }],
      image: "/assets/work/nba.png",
      live: "",
      github: "https://github.com/PranavN1234/nbadashboardjava",
    },
    {
      num: "05",
      category: "E-commerce",
      title: "South Indian Sales",
      description:
        "An E-commerce site made using ReactJs and Firebase for the sale of Pickles and household items.",
      stack: [{ name: "ReactJS" }, { name: "Firebase" }, { name: "JavaScript" }],
      image: "/assets/work/Project1.png",
      live: "",
      github: "https://github.com/PranavN1234/PallakadSales",
    },
    {
      num: "06",
      category: "Hackathon Winner",
      title: "Don't Eat Alone",
      description:
        "NYU 2023 Hackathon winning project, an application that allows users to find and meet people over lunch based on reference. Application uses live chat and presence feature using SignalR. Application made using .Net and Angular Js.",
      stack: [{ name: ".Net" }, { name: "AngularJS" }, { name: "SignalR" }],
      image: "/assets/work/eatalone.png",
      live: "",
      github: "https://github.com/PranavN1234/donteatalone",
    },
    {
      num: "07",
      category: "Web App",
      title: "NYU Fantasy",
      description:
        "An app that allows you to play with friends and predict scores with friends and win trophies. It was made on Django and ReactJS.",
      stack: [{ name: "Django" }, { name: "ReactJS" }],
      image: "/assets/work/scorepred.png",
      live: "",
      github: "https://github.com/PranavN1234/ScorePredictor-API",
    },
    {
      num: "08",
      category: "Mobile App",
      title: "Pay to Play",
      description:
        "A React Native application in TypeScript that illustrates the use of paywalls.",
      stack: [{ name: "React Native" }, { name: "TypeScript" }],
      image: "/assets/work/moneychess.avif",
      live: "",
      github: "https://github.com/PranavN1234/PlayWithMe/tree/main",
    },
    {
      num: "09",
      category: "Embedded Systems",
      title: "Elevator Control System",
      description:
        "A Complex Elevator control system designed in C and HiFive Microcontroller.",
      stack: [{ name: "C" }, { name: "Microcontroller" }],
      image: "/assets/work/elevator.jpeg",
      live: "",
      github: "https://github.com/PranavN1234/Elevator-Control-System",
    },
    {
      num: "10",
      category: "Machine Learning",
      title: "Modified ResNet",
      description:
        "Modified the ResNet model to under 5 million parameters for image classification in the CIFAR 10 dataset.",
      stack: [{ name: "Python" }, { name: "ResNet" }],
      image: "/assets/work/Resnet.png",
      live: "",
      github: "https://github.com/PranavN1234/Modified-ResNet",
    },
    {
      num: "11",
      category: "Portal",
      title: "Farmers Market",
      description:
        "A Farmers Market portal that aims to eliminate the middleman, made in PHP and SQL.",
      stack: [{ name: "PHP" }, { name: "SQL" }],
      image: "/assets/work/farmer.avif",
      live: "",
      github: "https://github.com/PranavN1234/Farmers-Market",
    },
  ];

  const Work = () => {
    const [project, setProject] = useState(projects[0]);
  
    const handleSlideChange = (swiper) => {
      // get current slide index
      const currentIndex = swiper.activeIndex;
      // update project state based on current slide index
      setProject(projects[currentIndex]);
    };
  
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="A showcase of my work and projects."
        />
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                {/* project category */}
                <h2 className="text-[42px] font-bold leading-none text-[#8c5e58] group-hover:text-[#A2707A] transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                {/* project description */}
                <p className="text-[#8c5e58]/80">{project.description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-[#A2707A]">
                        {item.name}
                        {/* remove the last comma */}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/* border */}
                <div className="border border-[#8c5e58]/20"></div>
                {/* buttons */}
                <div className="flex items-center gap-4">
                  {/* live project button */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#e7ecef] flex justify-center items-center group">
                          <BsArrowUpRight className="text-[#8c5e58] text-3xl group-hover:text-[#A2707A]" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* github project button */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#e7ecef] flex justify-center items-center group">
                          <BsGithub className="text-[#8c5e58] text-3xl group-hover:text-[#A2707A]" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-[#eee4e1]">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-[#8c5e58]/10 z-10"></div>
                        {/* image */}
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                          <Image
                            src={project.image}
                            fill
                            className="object-contain"
                            alt={project.title}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* slider buttons */}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-[#eee4e1] hover:bg-[#8c5e58] text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default Work;