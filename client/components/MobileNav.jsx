"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "#home" },
  { name: "resume", path: "#resume" },
  { name: "work", path: "#work" },
  { name: "publications", path: "#publications" },
  { name: "contact", path: "#contact" },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#8c5e58]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#ecf8f8]">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <a href="#home" className="text-4xl font-semibold text-[#8c5e58]">
            Pranav Iyer<span className="text-[#A2707A]">.</span>
          </a>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <a
                href={link.path}
                key={index}
                className="text-xl capitalize text-[#8c5e58] hover:text-[#A2707A] transition-all"
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
