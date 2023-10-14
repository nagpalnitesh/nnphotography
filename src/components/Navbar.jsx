import React from "react";

import Logo from "../assets/Photography_Logo_W_crop.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
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
        ></button>
        {/* <input type="checkbox" id="check" />
        <label htmlFor="check" className="menuBtn">
          <i className="fas fa-bars"></i>
        </label> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* <button className="close-menu">Close</button> */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/gallery" className="nav-link">
                Gallery
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="#" className="nav-link">
                Prints
              </a>
            </li> */}
            <li className="nav-item">
              <a href="/about-me" className="nav-link">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact-me" className="nav-link">
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
