import React, { useState, useRef, useEffect } from "react"; // Importerer React, useState, useRef og useEffect hooks
import { useLocation } from "react-router-dom"; // Importerer useLocation fra React Router, så vi kan få adgang til den nuværende URL
import { Link } from "react-router-dom"; // Importerer Link fra React Router til navigering
import logo from "../assets/spiralogo.svg"; // Importerer logo-billedet til desktop
import logoMobile from "../assets/spiramobile.svg"; // Importerer logo-billedet til mobil
import shortArrow from "../assets/shortarrow.svg"; // Importerer pilbilledet (til kontakt-knappen)

// Hovedkomponenten Header
export default function Header() {
  const location = useLocation(); // Bruger useLocation til at få den aktuelle URL (for at opdage om vi er på forsiden)

  // useEffect hook som kører, når URL'en ændres (fx når vi navigerer til en anden side)
  useEffect(() => {
    // Hvis vi er på forsiden ("/spira/"), skal vi sikre os at cursoren fjernes
    if (location.pathname === "/spira/") {
      setActiveIndex(null); // Deselecter alle navigationselementer (cursor fjernes fra navbar)
    }
  }, [location]); // Denne useEffect kører hver gang URL'en ændres

  // State for at styre om navigationsbaren skal vises eller skjules (baseret på scroll-bevægelse)
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0); // Bruges til at gemme sidste scroll-position for at bestemme retningen på scrollen

  const hideScrollY = useRef(0); //Gemmer position for scroll, til at skjule navbaren efter 100px og vise igen efter 100px

  // useEffect som reagerer på scroll-bevægelse og viser/skjuler navbaren baseret på om man scroller op eller ned
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Hent den nuværende scroll-position

      // Scroller ned
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNav(false);
        hideScrollY.current = currentScrollY; // Gem hvor langt vi var nede da vi skjulte navbaren
      }

      // Scroller op
      if (currentScrollY < lastScrollY.current) {
        const scrollUpDistance = hideScrollY.current - currentScrollY;

        // Hvis vi har scrollet mindst 100px op, vis navbaren
        if (scrollUpDistance > 100) {
          setShowNav(true);
        }
      }

      lastScrollY.current = currentScrollY; // Gem den nuværende scroll-position
    };

    // Tilføjer en event listener, så vi kan håndtere scroll
    window.addEventListener("scroll", handleScroll);

    // Rydder op ved at fjerne event listener når komponenten fjernes
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Denne useEffect kører kun én gang, når komponenten første gang rendres

  // State til at styre positionen og størrelsen af den animerede cursor (den der følger links)
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    top: 0,
  });

  // State til at styre hvilket link der er aktivt (for at ændre cursorens position)
  const [activeIndex, setActiveIndex] = useState(null);
  const tabRefs = useRef([]); // Refs til at referere til hver navbar-link

  // Funktion der opdaterer cursorens position og størrelse, når vi hover over et link
  const updateCursorPosition = (index) => {
    const tab = tabRefs.current[index]; // Hent det specifikke link-element
    if (tab) {
      const { offsetLeft, offsetWidth } = tab; // Hent positionen (venstre) og bredden af linket
      const newWidth = offsetWidth + 30; // Tilføj lidt ekstra bredde for cursoren
      const newLeft = offsetLeft + (offsetWidth - newWidth) / 2; // Beregn venstreforskyvningen, så cursoren er centreret

      setPosition({
        left: newLeft, // Sæt cursorens nye venstreforskyvning
        width: newWidth, // Sæt cursorens nye bredde
        top: 0, // Cursoren er ikke forskudt vertikalt
      });

      setActiveIndex(index); // Opdater hvilket link der er aktivt
    }
  };

  return (
    <header>
      <nav className={showNav ? "navBarVisible" : "navBarHidden"}>
        {/* Hvis showNav er true, vis navbaren, ellers skjul den */}

        <Link to="/spira/">
          <img className="logoDesk" src={logo} alt="Logo" />{" "}
          {/* Desktop logo */}
          <img className="logoMobile" src={logoMobile} alt="LogoMobile" />{" "}
          {/* Mobil logo */}
        </Link>

        <div className="navbar">
          {/* Kun vis cursoren hvis der er et aktivt index (dvs. hvis vi hover over et link) */}
          {activeIndex !== null && (
            <div
              className="cursor"
              style={{
                left: `${position.left}px`,
                width: `${position.width}px`,
              }}
            ></div>
          )}

          {/* Link til Ydelser */}
          <p
            ref={(el) => (tabRefs.current[1] = el)} // Reference til første tab (Ydelser)
            onMouseEnter={() => updateCursorPosition(1)} // Når musen er over dette link, opdater cursor-positionen
          >
            <Link to="ydelser" className={activeIndex === 1 ? "active" : ""}>
              Ydelser
            </Link>
          </p>

          {/* Link til Om os */}
          <p
            ref={(el) => (tabRefs.current[2] = el)} // Reference til anden tab (Om os)
            onMouseEnter={() => updateCursorPosition(2)} // Når musen er over dette link, opdater cursor-positionen
          >
            <Link to="omos" className={activeIndex === 2 ? "active" : ""}>
              Om os
            </Link>
          </p>

          {/* Link til Bæredygtighed */}
          <p
            ref={(el) => (tabRefs.current[3] = el)} // Reference til tredje tab (Bæredygtighed)
            onMouseEnter={() => updateCursorPosition(3)} // Når musen er over dette link, opdater cursor-positionen
          >
            <Link
              to="baeredygtighed"
              className={activeIndex === 3 ? "active" : ""} // Hvis linket er aktivt, tilføj aktiv klasse
            >
              Bæredygtighed
            </Link>
          </p>
        </div>

        <div className="kontaktKnapContainer">
          <p className="kontaktknap">
            {/* Kontakt link */}
            <Link to="kontakt">Kontakt</Link>
            <img src={shortArrow} alt="arrow" /> {/* Pilbillede */}
          </p>
        </div>
      </nav>
    </header>
  );
}
