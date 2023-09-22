import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

import GridIcon from "../assets/icons/grid-90.png";
import px500Icon from "../assets/icons/500px-90.png";
import YoupicIcon from "../assets/icons/296377_OkiZZbJi0qz7PGcI_85399-removebg-preview.png";

const Home = () => {
  return (
    <div className="home-slider">
      {/* Navbar */}
      <Navbar />
      {/* Slider */}
      {/* <div className="overlay"></div> */}
      <div className="banner">
        <div className="video">
          {/* <Slider /> */}
          <Slider />
        </div>
      </div>
      {/* Details Section */}
      {/* <div className="main-text">
        <div className="main-small-header">Nitesh Nagpal</div>
        <h1 className="main-header">Photographer</h1>
        <div className="main-categories">
          <div className="main-category-container">
            <div className="dot-separator main-dot-separator w-hidden-tiny w-condition-invisible">
              <div>•</div>
            </div>
            <a href="/" className="main-category w-inline-bock">
              <div>Landscape</div>
              <div className="underline main-text-underline"></div>
            </a>
          </div>
          <div className="main-category-container">
            <div className="dot-separator main-dot-separator w-hidden-tiny">
              <div>•</div>
            </div>
            <a href="/" className="main-category w-inline-bock">
              <div>Wildlife</div>
              <div className="underline main-text-underline"></div>
            </a>
          </div>
          <div className="main-category-container">
            <div className="dot-separator main-dot-separator w-hidden-tiny">
              <div>•</div>
            </div>
            <a href="/" className="main-category w-inline-bock">
              <div>Portrait</div>
              <div className="underline main-text-underline"></div>
            </a>
          </div>
        </div>
      </div> */}
      {/* footer Buttons */}
      <div className="home-footer">
        <div className="circle-border">
          <a href="/">
            <div className="circle-border-img">
              <img src={GridIcon} alt="view gallery" className="gallery-grid" />
              <div className="gallery-text">View Gallery</div>
            </div>
          </a>
          {/* textarea */}
          {/* <i className="fa-solid fa-grip gallery-grid"></i> */}
        </div>
        <div className="social-icons">
          {/* <div className="circle-border mx-3">
            <div className="circle-border-img">
              <img src={GridIcon} alt="view gallery" className="gallery-grid" />
            </div>
          </div> */}
          {/* Facebook */}
          <a href="https://www.facebook.com/nnphotography09">
            <div className="pie-wrapper progress-45 style-2 mx-3">
              <span className="label">
                {/* <img
                src={GridIcon}
                alt="view gallery"
                className="social-icon-img"
              /> */}
                <i class="fa-brands fa-facebook-f social-icon-img"></i>
              </span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="shadow"></div>
            </div>
          </a>
          {/* Twitter */}
          <a href="https://twitter.com/_niteshnagpal_">
            <div className="pie-wrapper progress-45 style-2 mx-3">
              <span className="label">
                {/* <img
                src={GridIcon}
                alt="view gallery"
                className="social-icon-img"
              /> */}
                {/* <i class="fa-brands fa-twitter"></i> */}
                <i class="fa-brands  fa-twitter social-icon-img"></i>
              </span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="shadow"></div>
            </div>
          </a>
          {/* Youpic */}
          <a href="https://youpic.com/photographer/NN_Photography/">
            <div className="pie-wrapper progress-45 style-2 mx-3">
              <span className="label">
                <img
                  src={YoupicIcon}
                  alt="view gallery"
                  className="youpic-img social-icon-img"
                />
                {/* <i class="fa-brands fa-facebook-f social-icon-img"></i> */}
              </span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="shadow"></div>
            </div>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/__nnphotography__/">
            <div className="pie-wrapper progress-45 style-2 mx-3">
              <span className="label">
                {/* <img
                src={GridIcon}
                alt="view gallery"
                className="social-icon-img"
              /> */}
                <i class="fa-brands fa-instagram social-icon-img"></i>
              </span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="shadow"></div>
            </div>
          </a>
          {/* 500px */}
          <a href="https://500px.com/p/niteshnagpal">
            <div className="pie-wrapper progress-45 style-2 mx-3">
              <span className="label">
                <img
                  src={px500Icon}
                  alt="view gallery"
                  className="px500_icon social-icon-img"
                />
                {/* <i class="fa-brands fa-instagram social-icon-img"></i> */}
              </span>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="shadow"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
