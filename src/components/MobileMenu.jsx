import { Stack } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import "./MobileMenu.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";

function MobileMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu container

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    // Add event listener to close menu on clicking outside
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`burger-menu ${isMenuOpen ? "open" : ""}`}
      id="mobile-menu"
      ref={menuRef}
    >
      <button className="burger-button" onClick={toggleMenu}>
        Menu
      </button>
      <nav className="menu-content">
        <Stack spacing={4} paddingLeft="10px" paddingRight="10px">
          <div></div>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          {/* REMOVED FROM SITE UNTIL CONTENT IS READY 
          <Link to="/forloeb" onClick={closeMenu}>
            <li>Forløb</li>
          </Link> 
          */}
          <Link to="/spiseforstyrrelse" onClick={closeMenu}>
            Spiseforstyrrelse
          </Link>
          <Link to="/om-mig" onClick={closeMenu}>
            Om mig
          </Link>
          <Link to="/priser" onClick={closeMenu}>
            Priser
          </Link>
          <Link to="/kontakt" onClick={closeMenu}>
            Kontakt
          </Link>
          <div></div>
        </Stack>
      </nav>
    </div>
  );
}

export default MobileMenu;
