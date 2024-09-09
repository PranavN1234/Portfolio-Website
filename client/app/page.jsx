"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { FaCommentDots } from "react-icons/fa"; // Import the message icon
import { useState, useEffect } from "react";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Resume from "@/components/sections/Resume";
import Work from "@/components/sections/Work";
import Publications from "@/components/sections/Publications";
import Contact from "@/components/sections/Contact";
import Divider from "@/components/Divider"; // Import Divider component
import ChatModal from "@/components/ChatModal";

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // Initially false to prevent it from being open on load
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatically open the chat 10 seconds after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true); // Open the chat modal
    }, 7000); // 10 seconds in milliseconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleDownload = () => {
    const link = "https://drive.google.com/file/d/1mbo3Oez41RMqT6ugMNpOKo5vntmJVFEq/view?usp=sharing"; // Google Drive link
    window.open(link, "_blank"); // Open the link in a new tab
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        {/* Home Section */}
        <div id="home" className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-[#8c5e58]">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-[#A2707A]">Pranav Iyer</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-[#8c5e58]/80">
              I am a recent graduate in Computer Engineering from NYU and an ex Software Engineer at Bank of America 
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-[#8c5e58] border-[#8c5e58] hover:bg-[#8c5e58] hover:text-[#ecf8f8]"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[#A2707A] rounded-full flex justify-center items-center text-[#A2707A] text-base hover:bg-[#A2707A] hover:text-[#ecf8f8] hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        {/* Home Stats */}
        <Stats />

        {/* Divider */}
        <Divider />

        {/* Resume Section */}
        <div id="resume">
          <Resume />
        </div>

        {/* Divider */}
        <Divider />

        {/* Work Section */}
        <div id="work">
          <Work />
        </div>

        {/* Divider */}
        <Divider />

        {/* Publications Section */}
        <div id="publications">
          <Publications />
        </div>

        {/* Divider */}
        <Divider />

        {/* Contact Section */}
        <div id="contact">
          <Contact />
        </div>
      </div>
      
      {/* Chat Modal Component */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} isMobile={isMobile} />

      {/* Button to Toggle Chat Modal */}
      {!isChatOpen && (
        <button
          className={`fixed ${isMobile ? 'bottom-4 left-1/2 transform -translate-x-1/2' : 'bottom-4 right-4'} bg-[#8c5e58] text-white p-3 rounded-full shadow-lg hover:bg-[#A2707A]`}
          onClick={() => setIsChatOpen(true)}
        >
          <FaCommentDots size={isMobile ? 24 : 36} /> {/* Use the message icon here with different sizes */}
        </button>
      )}
    </section>
  );
};

export default Home;
