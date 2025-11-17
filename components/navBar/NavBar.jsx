import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/getleedz-logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-safe fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-transparent">
      {/* Volle Breite, Logo links, Burger rechts */}
      <div className="flex items-center justify-between w-full px-1 sm:px-5 lg:px-10 py-3 sm:py-4">
        {/* Logo linksbündig */}
        <Link href="/">
          <a className="flex items-center">
            <div className="relative h-[64px] w-[260px] sm:h-[70px] sm:w-[280px] lg:h-[80px] lg:w-[320px]">
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
