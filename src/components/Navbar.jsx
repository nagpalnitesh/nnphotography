import React from "react";

import Logo from "../assets/Photography_Logo_W_crop.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          <img src={Logo} alt="nn photography" className="logo-navbar" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Prints
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
