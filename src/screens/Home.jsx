import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="home-slider">
      <Navbar />
      <div className="overlay"></div>
      <div className="banner">
        <div className="video">
          <Slider />
        </div>
      </div>
      {/* <Slider /> */}
    </div>
  );
};

export default Home;
