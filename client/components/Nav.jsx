"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "publications", path: "/publications" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize font-medium transition-all ${
              isActive
                ? "text-[#A2707A] border-b-2 border-[#A2707A]" // Active: Pinkish color with a border
                : "text-[#8c5e58] hover:text-[#A2707A]" // Inactive: Brown color with Pinkish hover
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
