import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/getleedz-logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl">
      {/* INNEN-LEISTE: Logo links, Burger rechts */}
      <div className="flex items-center justify-between h-16 sm:h-20 px-3 sm:px-5 lg:px-10">
        {/* Logo – linksbündig, auf Mobile schön gross */}
        <div className="relative block w-[150px] h-[40px] sm:w-[190px] sm:h-[52px]">
          <Link href="/">
            <a>
              <Image
                src={Logo}
                alt="GetLeedz Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </a>
          </Link>
        </div>

        {/* Burger-Icon rechts, mit etwas Abstand vom Rand */}
        <button
          type="button"
          aria-label="Menü öffnen"
          onClick={() => setOpen(!open)}
          className="flex sm:hidden items-center justify-center border-round-gradient rounded-md p-2 text-white"
        >
          <FaBars className="text-xl" />
        </button>

        {/* Rechte Seite für Desktop (später für Menüpunkte/CTA, aktuell leer) */}
        <div className="hidden sm:flex items-center gap-6">
          {/* hier kannst du später Links / Button einfügen */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
