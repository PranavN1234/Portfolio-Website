"use client";

const links = [
  { name: "home", path: "#home" },
  { name: "resume", path: "#resume" },
  { name: "work", path: "#work" },
  { name: "publications", path: "#publications" },
  { name: "contact", path: "#contact" },
];

const Nav = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <a
            href={link.path}
            key={index}
            className="capitalize font-medium transition-all text-[#8c5e58] hover:text-[#A2707A]"
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
