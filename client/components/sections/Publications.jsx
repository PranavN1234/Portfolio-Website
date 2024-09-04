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

const publications = [
  {
    num: "01",
    category: "Agile Model",
    title: "XPS-MoSCoW: A Prioritization-Based Hybrid Agile Model of SCRUM and Extreme Programming(ACM)",
    description:
      "This paper presents a hybrid model for software development that combines the strengths of the SCRUM and Extreme programming models. Our proposed XPS-MoSCoW Hybrid programming model integrates features from both models and prioritizes tasks using MoSCoW prioritization rules. Through implementation in a startup, our hybrid model has demonstrated superior performance compared to static models.",
    stack: [{ name: "SCRUM" }, { name: "Extreme Programming" }, { name: "MoSCoW Prioritization" }],
    image: "/assets/work/agile.jpeg",
    live: "https://dl.acm.org/doi/abs/10.4018/IJSI.297989",
  },
  {
    num: "02",
    category: "Network Analysis",
    title: "Egocentric Analysis of GitHub User Network(IEEE)",
    description:
      "This project aims to address the challenge of mapping influence in social networks with a focus on the GitHub application. We propose a technique that maps prominent users, allowing for categorization and identification of subgroups with meaningful connections.",
    stack: [{ name: "GitHub API" }, { name: "Social Networks" }, { name: "Page Rank Algorithm" }],
    image: "/assets/work/egonetwork.png",
    live: "https://ieeexplore.ieee.org/document/9456183",
  },
  {
    num: "03",
    category: "Virtualization",
    title: "Finding the Optimal Virtual Machine Setup for Nested Virtualization(IEEE)",
    description:
      "This paper presents a comparative analysis of nested virtualization between Oracle's VirtualBox and VMware's Workstation. By setting up virtual machines on both platforms and measuring performance, we determined which hypervisor is better suited for nested virtualization tasks.",
    stack: [{ name: "VirtualBox" }, { name: "VMware Workstation" }, { name: "Nested Virtualization" }],
    image: "/assets/work/virtualm.jpeg",
    live: "https://ieeexplore.ieee.org/document/9579665",
  },
  {
    num: "04",
    category: "Signature Verification",
    title: "One Shot Verification of Handwritten Signatures using Siamese Networks(IEEE)",
    description:
      "Our paper introduces an efficient offline signature verification method that automates the process of validating handwritten signatures on official documents, ensuring authenticity and detecting forgery using a Siamese network.",
    stack: [{ name: "Siamese Network" }, { name: "Handwritten Signatures" }, { name: "One-shot Learning" }],
    image: "/assets/work/handwritten.png",
    live: "https://ieeexplore.ieee.org/document/9697248",
  },
];

const Publications = () => {
  const [publication, setPublication] = useState(publications[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update publication state based on current slide index
    setPublication(publications[currentIndex]);
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
          title="Publications"
          subtitle="A showcase of my work and publications."
        />
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {publication.num}
              </div>
              {/* publication category */}
              <h2 className="text-[42px] font-bold leading-none text-[#8c5e58] group-hover:text-[#A2707A] transition-all duration-500 capitalize">
                {publication.category} paper
              </h2>
              {/* publication description */}
              <p className="text-[#8c5e58]/80">{publication.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {publication.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-[#A2707A]">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== publication.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-[#8c5e58]/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live paper button */}
                <Link href={publication.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#e7ecef] flex justify-center items-center group">
                        <BsArrowUpRight className="text-[#8c5e58] text-3xl group-hover:text-[#A2707A]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Paper</p>
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
              {publications.map((publication, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-[#eee4e1]">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-[#8c5e58]/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full flex items-center justify-center p-4">
                        <Image
                          src={publication.image}
                          fill
                          className="object-contain"
                          alt={publication.title}
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

export default Publications;
