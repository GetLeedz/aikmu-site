// ... (Importe bleiben gleich)

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl">
      <div className="flex items-center justify-between h-16 sm:h-20 px-3 sm:px-5 lg:px-10">
        {/* Logo links */}
        {/* Hier wurden die negativen Margins für die Links-Bündigkeit beibehalten */}
        <div className="relative block w-[150px] h-[40px] sm:w-[190px] sm:h-[52px] -ml-3 sm:-ml-5 lg:-ml-10">
          {/* *** HIER IST DIE KORREKTUR ***
             1. passHref hinzugefügt.
             2. Das umschließende <a>-Tag entfernt. 
          */}
          <Link href="/" passHref> 
            <Image
                src={Logo}
                alt="GetLeedz Logo"
                layout="fill"
                objectFit="contain"
                priority
            />
          </Link>
        </div>

        {/* Burger rechts */}
        <button
          type="button"
          aria-label="Menü öffnen"
          onClick={() => setOpen(!open)}
          className="flex sm:hidden items-center justify-center border-round-gradient rounded-md p-2 text-white -mr-3 sm:-mr-5 lg:-mr-10"
        >
          <FaBars className="text-xl" />
        </button>

        {/* Desktop-Bereich */}
        <div className="hidden sm:flex items-center gap-6">
          {/* hier kommen später Links/Buttons hin */}
        </div>
      </div>
    </nav>

  );
};

export default NavBar;