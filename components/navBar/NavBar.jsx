// components/navBar/NavBar.jsx
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/getleedz-logo.png";

const NavBar = () => {
  return (
    // leicht nach unten versetzt, zentriert
    <nav className="fixed inset-x-0 top-6 z-50">
      <div className="flex justify-center">
        <Link href="/" legacyBehavior>
          <a className="block relative w-[200px] h-[60px] sm:w-[240px] sm:h-[72px] lg:w-[260px] lg:h-[80px]">
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
