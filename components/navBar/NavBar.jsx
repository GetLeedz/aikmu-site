import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../public/images/getleedz-logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl">
      {/*         ANPASSUNG: Padding am Haupt-Div beibehalten, aber das Logo 
        im nächsten Schritt an den Rand verschieben, um das Padding zu "ignorieren".
      */}
      <div className="flex items-center justify-between h-16 sm:h-20 px-3 sm:px-5 lg:px-10">
        {/* Logo links */}
        {/*           NEUE ANPASSUNG: Um das Logo wirklich ganz an den linken Rand zu bringen 
          (linksbündig mit dem Content), müssen wir das Padding des Elternelements 
          (px-3/px-5) links ausgleichen. 
          Ich empfehle, das Padding auf der Nav-Ebene zu entfernen und es 
          dem Logo und dem Button hinzuzufügen, ODER einen negativen Margin 
          für das Logo zu nutzen, um es nach links zu schieben.
          
          Wir bleiben bei der Struktur und fügen einen negativen Margin hinzu:
          -ml-3 für kleine Screens
          -sm:ml-5 für mittlere Screens
          -lg:ml-10 für große Screens
        */}
        <div className="relative block w-[150px] h-[40px] sm:w-[190px] sm:h-[52px] -ml-3 sm:-ml-5 lg:-ml-10">
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

        {/* Burger rechts */}
        {/*           ANPASSUNG: Der Burger hat bereits einen rechten Margin (mr-1/mr-2), 
          aber um den Rand (px-3/px-5/px-10) zu "ignorieren" und ihn weiter 
          nach rechts zu schieben, entfernen wir seinen Margin und geben ihm 
          einen negativen Margin von rechts (-mr-X). 
          Da der Button p-2 hat, muss der negative Margin nur das Padding des 
          Elternelements ausgleichen. 
          Ich entferne den mr-1/mr-2, da er unnötig ist, und verwende -mr-3/5/10.
        */}
        <button
          type="button"
          aria-label="Menü öffnen"
          onClick={() => setOpen(!open)}
          className="flex sm:hidden items-center justify-center border-round-gradient rounded-md p-2 text-white -mr-3 sm:-mr-5 lg:-mr-10" // mr-1/mr-2 entfernt und durch negativen Margin ersetzt
        >
          <FaBars className="text-xl" />
        </button>

        {/* Desktop-Bereich (falls du später Menüpunkte / CTA willst) */}
        <div className="hidden sm:flex items-center gap-6">
          {/* hier kommen später Links/Buttons hin */}
        </div>
      </div>
    </nav>

  );
};

export default NavBar;