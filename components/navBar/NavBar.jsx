import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/getleedz-logo.png";
//import NavItems from "../navItems/NavItems";
import Social from "../social/Social";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    // Header-Balken: weniger hoch, direkt am Top
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl">
      {/* navbar brand + Inhalt */}
      <div className="px-4 xl:mx-[55px] 2xl:mx-[120px] flex flex-row tablet:flex-col items-center tablet:items-start gap-7 xl:gap-[45px] 2xl:gap-[84px] py-4 relative">
        
        {/* Logo-Box etwas höher, damit dein Logo sauber sitzt */}
        <div className="w-[146px] h-[90px] flex items-center">
          <Link href="/">
            <a className="block w-full h-full relative">
              <Image src={Logo} alt="Nav Bar Brand" layout="fill" objectFit="contain" />
            </a>
          </Link>
        </div>

        {/* Burger-Icon für Tablet/Mobile */}
        <div
          tabIndex={0}
          onClick={() => setOpen(!open)}
          className="absolute right-4 border-round-gradient rounded p-1 hidden tablet:block"
        >
          <FaBars className="text-xl" />
        </div>

        {/* rechter Bereich: Social + Button */}
        <div
          className={`flex flex-row tablet:flex-col items-center tablet:items-start justify-between w-full ${
            open ? "tablet:block" : "tablet:hidden"
          }`}
        >


        </div>
      </div>
    </nav>
  );
};

export default NavBar;
