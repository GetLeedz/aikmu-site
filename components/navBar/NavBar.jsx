import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/getleedz-logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Höhe des Headers -> sorgt dafür, dass Logo vertikal mittig ist */}
        <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
          
          {/* Logo: Mobile grösser, links bündig */}
          <div className="relative h-9 w-[170px] sm:h-10 sm:w-[200px] lg:h-12 lg:w-[240px]">
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

          {/* Burger-Icon (kann später fürs Menü genutzt werden) */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center border-round-gradient rounded p-2 text-white md:hidden"
            aria-label="Menü öffnen"
          >
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
