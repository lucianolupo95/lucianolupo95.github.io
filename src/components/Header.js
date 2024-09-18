// Header.js
import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              Proyectos
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>
              Experiencia
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
