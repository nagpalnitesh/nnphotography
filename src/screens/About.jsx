import React from "react";
import Navbar from "../components/Navbar";

import HeaderImg from "../assets/images/nature-1.jpg";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

import MyImg from "../assets/nitesh_nagpal.jpg";

const About = () => {
  return (
    <div className="gallery">
      <div className="overlay"></div>
      <div className="banner">
        <img src={HeaderImg} alt="Background Image" />
      </div>

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
      {/* About Me */}
      <div className="about-me">
        <div className="about-me-text">
          <div>
            <p>
              I'm more than just a full-stack developer with four years of
              professional experience; I'm a storyteller who captures life's
              most breathtaking moments through the lens of my camera. When I'm
              not coding, you can find me immersed in the world of nature and
              wildlife photography, where every click of the shutter is an
              opportunity to freeze time and preserve the beauty of our planet.
            </p>
            <p>
              My photography journey began with a Nikon D3200, a faithful
              companion that has seen me through countless adventures. But it
              doesn't end there – I also wield a Sony Handycam to capture moving
              images, allowing me to explore the dynamic narratives that unfold
              in the natural world.
            </p>
            <p>
              My passion for photography is deeply rooted in my love for the
              outdoors, a place where I can connect with the tranquility of
              nature and the majesty of wildlife. Each image I capture is a
              story waiting to be shared, an emotion waiting to be felt.
            </p>
            <p>
              Join me on this visual journey as we explore the world through my
              lens. Together, we'll witness the beauty of nature and the wonders
              of wildlife, framed in pixels and preserved for eternity.
            </p>
            <p>Thank you for being a part of my photographic adventure.</p>
            <p>Warm regards,</p>
            <p>Nitesh Nagpal</p>
          </div>
        </div>
        <div className="my-photo">
          <img src={MyImg} alt="Nitesh Nagpal" />
        </div>
      </div>
      {/* FOOTER */}
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default About;
