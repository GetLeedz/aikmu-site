// components/navBar/NavBar.jsx
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/getleedz-logo.png";

const NavBar = () => {
  return (
    // Fixierter Header oben, voller Viewport
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl">
      {/* Innenbereich: Logo links, sonst nichts */}
      <div className="flex items-center h-16 sm:h-20 px-4">
        <Link href="/">
          <a className="block relative w-[146px] h-[40px] sm:h-[48px]">
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
    </nav>
  );
};

export default NavBar;
