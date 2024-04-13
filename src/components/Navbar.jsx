import React from "react";

import Logo from "../assets/Photography_Logo_W_crop.png";

const Navbar = ({ activeMenu }) => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={Logo} alt="nn photography" className="logo-navbar" />
        {/* logo */}
      </a>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className="fas fa-bars" id="menu-icon"></i>
      </label>

      <nav className="navbar">
        <a href="/" className="nav-link">
          <div>Home</div>
          <div
            className={`underline ${
              activeMenu === "Home" ? "active-menu" : "nav-link-underline"
            }`}
          ></div>
        </a>
        <a href="/gallery" className="nav-link">
          <div>Gallery</div>
          <div
            className={`underline  ${
              activeMenu === "Gallery" ? "active-menu" : "nav-link-underline"
            }`}
          ></div>
        </a>
        <a href="/about-me" className="nav-link">
          <div>About Me</div>
          <div
            className={`underline  ${
              activeMenu === "About" ? "active-menu" : "nav-link-underline"
            }`}
          ></div>
        </a>
        <a href="/contact-me" className="nav-link">
          <div>Contact Me</div>
          <div
            className={`underline  ${
              activeMenu === "Contact" ? "active-menu" : "nav-link-underline"
            }`}
          ></div>
        </a>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
