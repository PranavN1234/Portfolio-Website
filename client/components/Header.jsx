import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-[#8c5e58]"> {/* Brown text color */}
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Pranav Iyer<span className="text-[#A2707A]">.</span> {/* Pinkish accent color */}
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-[#eee4e1] text-[#8c5e58] hover:bg-[#e7d8c9]">
              Hire me
            </Button> {/* Light Peach background, Brown text, and Light Brown hover effect */}
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
