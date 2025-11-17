// components/navBar/NavBar.jsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/getleedz-logo.png";
import Social from "../social/Social";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    // Header-Balken: direkt am Top, volle Breite
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl">
      {/* Innen: Logo links, rechts Social + Burger */}
      <div className="flex items-center justify-between h-16 sm:h-20 px-0 pr-4">
        {/* Logo GANZ links, vertikal mittig */}
        <Link href="/" legacyBehavior>
          <a className="block relative w-[146px] h-[40px] sm:h-[48px]">
            <Image
              src={Logo}
              alt="Nav Bar Brand"
              layout="fill"
              objectFit="contain"
              priority
            />
          </a>
        </Link>

        {/* rechter Bereich */}
        <div className="flex items-center gap-4">
          {/* Desktop / Tablet: Social-Icons o.ä. */}
          <div className="hidden tablet:flex items-center gap-4">
            <Social />
          </div>

          {/* Mobile: Burger rechts, mittig */}
          <button
            type="button"
            aria-label="Menü öffnen"
            onClick={() => setOpen(!open)}
            className="tablet:hidden flex items-center justify-center border-round-gradient rounded p-2 text-white"
          >
            <FaBars className="text-xl leading-none" />
          </button>
        </div>
      </div>

      {/* Mobile-Dropdown unter dem Header */}
      {open && (
        <div className="tablet:hidden w-full px-4 pb-4">
          <Social />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
