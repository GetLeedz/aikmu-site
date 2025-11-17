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
        {/* Header-Höhe etwas höher, damit Logo Luft hat */}
        <div className="flex h-20 sm:h-20 lg:h-24 items-center justify-between">
          {/* Logo – MOBILE bewusst grösser */}
          <div className="relative h-12 w-[220px] sm:h-14 sm:w-[240px] lg:h-16 lg:w-[260px]">
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

          {/* Burger-Icon rechts */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center border-round-gradient rounded p-2 text-white md:hidden"
            aria-label="Menü öffnen"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
