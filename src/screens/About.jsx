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
        {/* <p>Captured Moments, Framed Eternally</p> */}
        <hr />
        <p>A Gallery of Timeless Memories</p>
        <hr />
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
        <a
          href="/contact-me"
          className="action-block w-inline-block"
          style={{
            backgroundImage: `url(${HeaderImg2})`,
            transformStyle: "preserve-3d",
            opacity: "1",
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          }}
        >
          <div className="action-text action-text-style">
            <div className="action-small-title">Contact Me</div>
            <h5>Let's Work Together</h5>
          </div>
        </a>
        <a
          href="/about-me"
          className="action-block w-inline-block"
          style={{
            backgroundImage: `url(${HeaderImg})`,
            transformStyle: "preserve-3d",
            opacity: "1",
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          }}
        >
          <div className="action-text action-text-style">
            <div className="action-small-title">
              Behind the Lens: My Journey, Your Story
            </div>
            <h5>Learn More About Me</h5>
          </div>
        </a>
      </div>
      {/* FOOTER */}
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default About;
