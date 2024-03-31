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
const Images = require.context("../assets/nnphotography", true);
const ImageList = Images.keys().map((image) => Images(image));
// Ends

const TestGallery = () => {
  console.log(
    "23: ",
    process.env,
    process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    `
            ${process.env.REACT_APP_CLOUDINARY_API_KEY} +
              ":" +
              ${process.env.REACT_APP_CLOUDINARY_API_SECRET}`
  );
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [imageSet, setImage] = useState();

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    let response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/resources/image`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            process.env.REACT_APP_CLOUDINARY_API_KEY +
              ":" +
              process.env.REACT_APP_CLOUDINARY_API_SECRET
          ).toString("base64")}'`,
        },
      }
    )
      .then((res) => {
        console.log("res", res);
        res.json();
      })
      .catch((err) => console.error(err));
  };

  const toggleFullscreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };
  // const fullScreenImage = () => {
  //   console.log("Image Selected");
  //   return (
  //     <div className="fullscreen-image">
  //       <h1>Hello World</h1>
  //     </div>
  //   );
  // };

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
          {ImageList &&
            ImageList.map((image) => (
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
                          backgroundImage: `url(${image})`,
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
