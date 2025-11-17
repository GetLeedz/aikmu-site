import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/getleedz-logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-transparent">
      <div className="w-full px-3 sm:px-4 lg:px-10">
        {/* Row: Logo + Burger */}
        <div className="flex h-20 sm:h-20 lg:h-24 justify-start">
          
          {/* LOGO – deutlich grösser + wirklich linksbündig */}
          <div className="relative h-[58px] w-[250px] sm:h-[64px] sm:w-[270px] lg:h-[72px] lg:w-[300px]">
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

          {/* Burger-Icon ganz rechts */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="ml-auto flex items-center justify-center border-round-gradient rounded p-2 text-white md:hidden"
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
