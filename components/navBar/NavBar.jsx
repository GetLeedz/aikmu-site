// components/navBar/NavBar.jsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/getleedz-logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-xl">
      {/* Innenleiste: Logo links, rechts Platz für Burger / Desktop-Menü */}
      <div className="flex items-center h-16 sm:h-20 px-3 sm:px-5 lg:px-10">
        {/* LOGO – linksbündig */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            // ✅ NEU (mit negativen Margins, um das Padding des Elternelements auszugleichen)
<div className="relative w-[170px] h-[46px] sm:w-[210px] sm:h-[56px] lg:w-[240px] lg:h-[64px] -ml-3 sm:-ml-5 lg:-ml-10">
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

        {/* Burger-Icon – mit ml-auto ganz nach rechts geschoben, nur Mobile */}
        <button
          type="button"
          aria-label="Menü öffnen"
          onClick={() => setOpen(!open)}
          className="ml-auto flex sm:hidden items-center justify-center border-round-gradient rounded-md p-2 text-white"
        >
          <FaBars className="text-xl" />
        </button>

        {/* Desktop-Bereich rechts (momentan leer, später für Links/CTA) */}
        <div className="hidden sm:flex ml-auto items-center gap-6">
          {/* hier kannst du später Menülinks oder einen Button einfügen */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
