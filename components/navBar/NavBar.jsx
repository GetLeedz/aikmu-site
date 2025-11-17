import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/getleedz-logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex flex-col z-50 py-[24px] md:py-[32px] backdrop-blur-xl">
      {/* Navbar-Content */}
      <div className="px-4 xl:mx-[55px] 2xl:mx-[120px] flex items-center justify-between">
        {/* Logo – Mobile kleiner, Desktop grösser */}
        <div className="relative w-[150px] h-[38px] sm:w-[190px] sm:h-[48px] lg:w-[240px] lg:h-[60px]">
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

        {/* Burger-Icon nur vorbereitet, aktuell ausgeblendet */}
        {/* Wenn du später ein Menü brauchst, einfach `hidden` entfernen */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="hidden tablet:flex items-center justify-center border-round-gradient rounded p-2 text-white"
          aria-label="Menü öffnen"
        >
          <FaBars className="text-xl" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
