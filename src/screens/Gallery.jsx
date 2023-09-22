import React from "react";
import Navbar from "../components/Navbar";

import HeaderImg from "../assets/images/nature-1.jpg";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const Gallery = () => {
  return (
    <div className="gallery">
      <Navbar />
      {/* TODO: parallax background with overlay */}
      <div className="gallery-page-header">
        <PageHeader
          pageName={"Gallery"}
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
        <h1>Hello WOrld</h1>
      </div>
      {/* Gallery Section */}
      <div className="gallery-section">
        {/* Gallery Cards */}
        <div className="gallery-list-item">
          <a href="/" className="gallery-card w-inline-block">
            <div className="card-img-container">
              {/* <img src={HeaderImg} alt="" className="img-hover-icon" /> */}
              <div
                style={{
                  backgroundImage: `url(${HeaderImg})`,
                  transformStyle: "preserve-3d",
                  opacity: "1",
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                }}
                className="gallery-card-img"
              ></div>
            </div>
          </a>
        </div>
        <div className="gallery-list-item">
          <a href="/" className="gallery-card w-inline-block">
            <div className="card-img-container">
              {/* <img src={HeaderImg} alt="" className="img-hover-icon" /> */}
              <div
                style={{
                  backgroundImage: `url(${HeaderImg})`,
                  transformStyle: "preserve-3d",
                  opacity: "1",
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                }}
                className="gallery-card-img"
              ></div>
            </div>
          </a>
        </div>
        <div className="gallery-list-item">
          <a href="/" className="gallery-card w-inline-block">
            <div className="card-img-container">
              {/* <img src={HeaderImg} alt="" className="img-hover-icon" /> */}
              <div
                style={{
                  backgroundImage: `url(${HeaderImg})`,
                  transformStyle: "preserve-3d",
                  opacity: "1",
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                }}
                className="gallery-card-img"
              ></div>
            </div>
          </a>
        </div>
        <div className="gallery-list-item">
          <a href="/" className="gallery-card w-inline-block">
            <div className="card-img-container">
              {/* <img src={HeaderImg} alt="" className="img-hover-icon" /> */}
              <div
                style={{
                  backgroundImage: `url(${HeaderImg})`,
                  transformStyle: "preserve-3d",
                  opacity: "1",
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                }}
                className="gallery-card-img"
              ></div>
            </div>
          </a>
        </div>
        <div className="gallery-list-item">
          <a href="/" className="gallery-card w-inline-block">
            <div className="card-img-container">
              {/* <img src={HeaderImg} alt="" className="img-hover-icon" /> */}
              <div
                style={{
                  backgroundImage: `url(${HeaderImg})`,
                  transformStyle: "preserve-3d",
                  opacity: "1",
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                }}
                className="gallery-card-img"
              ></div>
            </div>
          </a>
        </div>
        <div className="gallery-list-item">
          <a href="/" className="gallery-card w-inline-block">
            <div className="card-img-container">
              {/* <img src={HeaderImg} alt="" className="img-hover-icon" /> */}
              <div
                style={{
                  backgroundImage: `url(${HeaderImg})`,
                  transformStyle: "preserve-3d",
                  opacity: "1",
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                }}
                className="gallery-card-img"
              ></div>
            </div>
          </a>
        </div>
      </div>
      {/* CTA */}
      <div className="call-to-action">
        <h1>Hello Contact Me</h1>
      </div>
      {/* FOOTER */}
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
