import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

import GridIcon from "../assets/icons/grid-90.png";

const Home = () => {
  return (
    <div className="home-slider">
      <Navbar />
      <div className="overlay"></div>
      <div className="banner">
        <div className="video">
          {/* <Slider /> */}
          <Slider />
        </div>
      </div>
      {/* footer Buttons */}
      <div className="home-footer">
        <div className="circle-border">
          <div className="circle-border-img">
            <img src={GridIcon} alt="view gallery" className="gallery-grid" />
            <div className="gallery-text">View Gallery</div>
          </div>
          {/* textarea */}
          {/* <i className="fa-solid fa-grip gallery-grid"></i> */}
        </div>
        <div className="social-icons">
          {/* <div className="circle-border mx-2">
            <div className="circle-border-img">
              <img src={GridIcon} alt="view gallery" className="gallery-grid" />
            </div>
          </div> */}
          {/* Facebook */}
          <div className="pie-wrapper progress-45 style-2 mx-2">
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
          {/* Youpic */}
          <div className="pie-wrapper progress-45 style-2 mx-2">
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
          {/* Instagram */}
          <div className="pie-wrapper progress-45 style-2 mx-2">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
