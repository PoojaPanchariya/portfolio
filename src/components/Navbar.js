import React from "react";
import { Link } from "react-router-dom"; // <-- import Link

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className={`navbar navbar-expand-lg shadow-sm ${theme}`}>
      <div className="container">
        <Link className="navbar-brand brand-name" to="/">
          Pooja Panchariya
        </Link>
        <div>
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/full-stack">
                Full Stack
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-sm btn-outline-secondary ms-3"
                onClick={toggleTheme}
              >
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
