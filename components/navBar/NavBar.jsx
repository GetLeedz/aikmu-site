import Image from "next/image";
import Link from "next/link";

const Logo = "/images/logo-aikmu-transparent_white_transparent.png";

const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 overflow-hidden">
      <div className="backdrop-blur-xl bg-[#020617]/80 border-b border-white/5">
        <div className="flex justify-center py-3">
          <Link href="/" legacyBehavior>
            <a
              aria-label="AiKMU Home"
              className="relative block w-[260px] h-[80px]"
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
