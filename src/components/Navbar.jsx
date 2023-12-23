import React from "react";

import Logo from "../assets/Photography_Logo_W_crop.png";

const Navbar = ({ activeMenu }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a href="/" className="navbar-brand">
          <img src={Logo} alt="nn photography" className="logo-navbar" />
        </a>
        <button
          className="btn navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        {/* <input type="checkbox" id="check" />
        <label htmlFor="check" className="menuBtn">
          <i className="fas fa-bars"></i>
        </label> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* <button className="close-menu">Close</button> */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                <div>Home</div>
                <div
                  className={`underline ${
                    activeMenu === "Home" ? "active-menu" : "nav-link-underline"
                  }`}
                ></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="/gallery" className="nav-link">
                <div>Gallery</div>
                <div
                  className={`underline  ${
                    activeMenu === "Gallery"
                      ? "active-menu"
                      : "nav-link-underline"
                  }`}
                ></div>
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="#" className="nav-link">
                Prints

                <div className="underline nav-link-underline"></div>
              </a>
            </li> */}
            <li className="nav-item">
              <a href="/about-me" className="nav-link">
                <div>About Me</div>
                <div
                  className={`underline  ${
                    activeMenu === "About"
                      ? "active-menu"
                      : "nav-link-underline"
                  }`}
                ></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact-me" className="nav-link">
                <div>Contact Me</div>
                <div
                  className={`underline  ${
                    activeMenu === "Contact"
                      ? "active-menu"
                      : "nav-link-underline"
                  }`}
                ></div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
