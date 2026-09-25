import React from "react";
import Navbar from "../components/Navbar";

import HeaderImg from "../assets/images/DSC_2725.jpeg";
import HeaderImg2 from "../assets/images/DSC_9885.jpg";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import usePageMeta from "../seo/usePageMeta";

import MyImg from "../assets/nitesh_nagpal.jpg";

const About = () => {
  usePageMeta("/about-me");

  return (
    <div className="gallery">
      <Navbar activeMenu="About" />
      <div className="overlay"></div>
      <div className="banner">
        <img src={HeaderImg} alt="" />
      </div>
      {/* TODO: parallax background with overlay */}
      <div className="gallery-page-header">
        <PageHeader
          pageName={"About Me"}
          // headerStyle={"gallery-header-img"}
          headerImg={HeaderImg2}
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
        <div className="my-photo">
          <img src={MyImg} alt="Portrait of Nitesh Nagpal" />
        </div>
        <div className="about-me-text">
          <div>
            <p>
              I'm Nitesh Nagpal, and I photograph wildlife and nature. It
              started with a Nikon D3200, the camera I learned on, and grew
              into the habit of heading outdoors whenever I can to watch
              animals on their own terms.
            </p>
            {/* TODO(Nitesh): optional. If you want a specific field moment
                here (the first animal or place that hooked you), write it in
                your own words. Nothing has been filled in on your behalf. */}
            <p>
              I shoot stills on the D3200 and film on a Sony Handycam. What I
              enjoy most is the waiting: staying still long enough that an
              animal stops noticing me and goes back to being itself.
            </p>
            <p>
              Outside photography I've worked as a full-stack developer for 7+
              years, and the time spent photographing wildlife in the field is
              why I founded{' '}
              <a href="https://wildsnap.in" target="_blank" rel="noreferrer">
                WildSnap
              </a>
              , an AI tool for identifying wildlife.
            </p>
            <p>Thank you for looking.</p>
            <p>Nitesh Nagpal</p>
          </div>
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
