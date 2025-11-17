import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/getleedz-logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-transparent">
      {/* WIRKLICH volle Breite, kein zentrierender Container */}
      <div className="flex items-center justify-between w-full px-2 sm:px-4 lg:px-8">
        {/* Logo links */}
        <Link href="/">
          <a className="flex items-center">
            <div className="relative h-[58px] w-[250px] sm:h-[64px] sm:w-[270px] lg:h-[72px] lg:w-[300px]">
              <Image
                src={Logo}
                alt="GetLeedz Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </a>
        </Link>

        {/* Burger rechts */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="ml-auto flex items-center justify-center border-round-gradient rounded p-2 text-white md:hidden"
          aria-label="Menü öffnen"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
