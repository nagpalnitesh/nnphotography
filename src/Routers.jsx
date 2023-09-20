import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="wrapper">
          <div className="content">
            <div>{/* Routes */}</div>
            <Home />
          </div>
          {/* <div className="footer">
            <h1>Footer</h1>
            <div className="container-fluid">
            </div> 
          </div> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routers;
