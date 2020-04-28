import React from "react";
import Navbar from "../components/Navbar";

const HeroLayout = () => (
  <>
    <Navbar />
    <div className="hero-container">
      <div className="grid1">
        Welcome to&nbsp;<span>Movie</span>App
      </div>
      <div className="grid3"></div>
      <div className="grid4">Next generation to enjoy movies</div>
    </div>
  </>
);

export default HeroLayout;
