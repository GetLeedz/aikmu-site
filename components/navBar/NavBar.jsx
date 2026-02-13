import Image from "next/image";
import Link from "next/link";

const Logo = "/images/logo-aikmu-transparent_white_transparent.png";

const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      {/* Der Container nutzt jetzt nur noch Backdrop-Blur und eine minimale weiße Linie. 
          Die eigentliche Hintergrundfarbe (rgba 0.1) kommt sauber aus der globals.css.
      */}
      <div className="backdrop-blur-2xl border-b border-white/5 transition-all duration-500">
        <div className="flex justify-center py-5">
          <Link href="/" legacyBehavior>
            <a
              aria-label="AiKMU Home"
              className="group relative block w-[180px] h-[58px] transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Image
                src={Logo}
                alt="AiKMU Logo"
                layout="fill"
                objectFit="contain"
                priority
                className="transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;