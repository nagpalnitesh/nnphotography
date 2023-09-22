import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Gallery from "./screens/Gallery";
import About from "./screens/About";
import Contact from "./screens/Contact";

const Routers = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="wrapper">
          <div className="content">
            <div>
              {/* Routes */}
              <Routes>
                {/* Home */}
                <Route exact path="/" element={<Home />} />
                {/* Gallery */}
                <Route exact path="/gallery" element={<Gallery />} />
                {/* About Me */}
                <Route exact path="/about-me" element={<About />} />
                {/* Contact Me */}
                <Route exact path="/contact-me" element={<Contact />} />
              </Routes>
            </div>
          </div>
          {/* <div className="footer">
            <h1>Footer</h1>
            <div className="container-fluid">
            </div> 
          </div> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routers;
