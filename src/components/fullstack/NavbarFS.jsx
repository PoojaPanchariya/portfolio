import React, { useState } from "react";
import "./NavbarFS.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NavbarFS = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-fs">
      {/* Logo */}
      <div className="navbar-logo-fs">
        <span className="navbar-brand brand-name" role="button" tabIndex={0}>
          <img src={logo} alt="Logo" />
        </span>
      </div>

      {/* Hamburger icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={menuOpen ? "bar change-bar1" : "bar"}></div>
        <div className={menuOpen ? "bar change-bar2" : "bar"}></div>
        <div className={menuOpen ? "bar change-bar3" : "bar"}></div>
      </div>

      {/* Links */}
      <div className={`navbar-links-fs ${menuOpen ? "open" : ""}`}>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#resume" onClick={closeMenu}>
          Resume
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <Link to="/" className="blink-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/data-analyst" className="blink-link" onClick={closeMenu}>
          Data Analyst
        </Link>
      </div>
    </nav>
  );
};

export default NavbarFS;
