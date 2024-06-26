import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import HeaderImg from "../assets/images/DSC_2725.jpeg";
import HeaderImg2 from "../assets/images/DSC_9885.jpg";
import HeaderImg3 from "../assets/images/DSC_9634.jpg";
import ArrowIcon from "../assets/icons/arrow-90.png";
import LeftArrowIcon from "../assets/icons/left-arrow-90.png";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

import { Buffer } from "buffer";

// import Slider from "../components/Slider";

// Import Images
// To Import all imgaes from asset folder
// const Images = require.context("../assets/nnphotography", true);
// const ImageList = Images.keys().map((image) => Images(image));
// Ends

const TestGallery = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [imageSet, setImage] = useState();

  const [images, setImages] = useState([]);

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/gallery");

      if (response.ok) {
        const data = await response.json();
        setImages(data.resources);
        console.log(data); // Handle the fetched data here
      } else {
        console.error("Failed to fetch data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleFullscreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };

  console.log("57: ", images);

  return (
    <>
      {/* 
        <div className="background-slider">
          <Slider />
        </div> */}
      <div className="gallery">
        <Navbar activeMenu="Gallery" />
        {/* TODO: parallax background with overlay */}
        <div className="overlay"></div>
        <div className="banner">
          <img src={HeaderImg} alt="Background" />
        </div>
        <div className="gallery-page-header">
          <PageHeader
            pageName={"Gallery"}
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
          <p>A Gallery of Timeless Memories</p>
          <hr />
        </div>
        {/* Display Image in FullView */}
        <div
          className={`fullscreenImageView ${
            isFullScreen ? "fullscreen-image" : "no-image"
          }`}
        >
          <img src={imageSet} alt="" />
          <span className="closeButton" onClick={toggleFullscreen}>
            &times;
          </span>
        </div>
        {/* Gallery Section */}
        <div className="gallery-section">
          {/* Gallery Cards */}
          {images &&
            images.map((image) => (
              <>
                <div className="gallery-list-item">
                  <div className="gallery-card w-inline-block">
                    <div className="card-img-container">
                      {/* <img src={HeaderImg} alt="" className="img-hover-icon" /> */}
                      <div
                        onClick={() => {
                          setImage(image);
                          toggleFullscreen();
                        }}
                        style={{
                          backgroundImage: `url(${image.url})`,
                          transformStyle: "preserve-3d",
                          opacity: "1",
                          backgroundPositionY: 0,
                          backgroundRepeat: "no-repeat",
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        }}
                        className="gallery-card-img"
                      ></div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
        {/* CTA */}
        <div className="call-to-action">
          <a
            href="/contact-me"
            className="action-block w-inline-block"
            style={{
              backgroundImage: `url(${HeaderImg3})`,
              transformStyle: "preserve-3d",
              opacity: "1",
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionY: "35%",
            }}
          >
            <div className="action-text action-text-style">
              <div className="action-small-title">Contact Me</div>
              <h5>Let's Work Together</h5>
            </div>
            <img
              src={LeftArrowIcon}
              className="action-arrow-icon action-arrow left-arrow"
              alt="
                  onClick={toggleFullscreen}arrow-icon"
              // style={{ transform: "rotate(-180deg)" }}
            />
          </a>
          <a
            href="/about-me"
            className="action-block w-inline-block"
            style={{
              backgroundImage: `url(${HeaderImg2})`,
              transformStyle: "preserve-3d",
              opacity: "1",
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionY: "25%",
            }}
          >
            <div className="action-text action-text-style">
              <div className="action-small-title">
                Behind the Lens: My Journey, Your Story
              </div>
              <h5>Learn More About Me</h5>
            </div>
            <img
              src={ArrowIcon}
              className="action-arrow-icon action-arrow"
              alt="arrow-icon"
            />
          </a>
        </div>
        {/* FOOTER */}
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default TestGallery;
