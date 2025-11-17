import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/getleedz-logo.png";
// import NavItems from "../navItems/NavItems";
import Social from "../social/Social";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex flex-col z-50 py-[30px] md:py-[40px] backdrop-blur-xl">
      {/* navbar brand */}
      <div className="px-4 xl:mx-[55px] 2xl:mx-[120px] flex flex-row tablet:flex-col items-start tablet:items-start gap-7 xl:gap-[45px] 2xl:gap-[84px] relative">
        
        {/* Logo – auf Mobile kleiner */}
        <div className="relative w-[128px] h-[32px] sm:w-[190px] sm:h-[48px] lg:w-[220px] lg:h-[55px]">
          <Link href="/">
            <Image
              src={Logo}
              alt="GetLeedz Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Link>
        </div>

        {/* Burger Menü */}
        <div
          tabIndex={0}
          onClick={() => setOpen(!open)}
          className="absolute right-4 border-round-gradient rounded p-1 hidden tablet:block"
        >
          <FaBars className="text-xl" />
        </div>

        {/* rechte Seite */}
        <div
          className={`flex flex-row tablet:flex-col items-center tablet:items-start justify-between w-full ${
            open ? "tablet:block" : "tablet:hidden"
          }`}
        >
          {/* Social icons + Button */}
          <div className="flex flex-row tablet:flex-col items-center tablet:items-start gap-5 xl:gap-8 2xl:gap-12">
            <Social />
            {/* CTA rechts oben optional – falls du den nicht willst, einfach weg lassen */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
