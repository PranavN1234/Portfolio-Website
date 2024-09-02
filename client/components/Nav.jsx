"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
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
                ? "text-[#e6beae] border-b-2 border-[#e6beae]" // Active: Pinkish color with a border
                : "text-[#b2967d] hover:text-[#e6beae]" // Inactive: Brown color with Pinkish hover
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
