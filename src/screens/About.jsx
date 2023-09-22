import React from "react";
import Navbar from "../components/Navbar";

import HeaderImg from "../assets/images/nature-1.jpg";
import HeaderImg2 from "../assets/images/nature-2.jpg";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="gallery">
      <Navbar />
      {/* TODO: parallax background with overlay */}
      <div className="gallery-page-header">
        <PageHeader
          pageName={"About Me"}
          // headerStyle={"gallery-header-img"}
          headerImg={HeaderImg}
        />
      </div>
      {/* <div className="gallery-header">
        <div className="gallery-header-img">
          <h1 className="gallery-header-text">Gallery</h1>
        </div>
      </div> */}
      {/* Gallery-Tagline */}
      <div className="gallery-section-text">
        {/* <p>Captured Moments, Framed Eternally</p> */}
        <hr />
        <p>Exploring Life Through the Camera's Eye</p>
        <hr />
      </div>
      {/* FOOTER */}
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default About;
