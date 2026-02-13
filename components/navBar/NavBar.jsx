import Image from "next/image";
import Link from "next/link";

const Logo = "/images/logo-aikmu-transparent_white_transparent.png";

const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      {/* Hintergrund mit weniger Deckkraft (40% statt 80%) für echtes Glas-Feeling */}
      <div className="backdrop-blur-xl bg-[#020617]/40 border-b border-white/10">
        <div className="flex justify-center py-4">
          <Link href="/" legacyBehavior>
            <a
              aria-label="AiKMU Home"
              /* Größe reduziert von 260px auf 160px für einen edleren Look */
              className="relative block w-[160px] h-[50px] transition-transform hover:scale-105 active:scale-95"
            >
              <Image
                src={Logo}
                alt="AiKMU Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;