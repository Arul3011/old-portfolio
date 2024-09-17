import React from "react";
import "./about.css";
import logo from "./assets/photo_2024-09-14_14-53-42.jpg";
const About = () => {
  return (
    <div className="about">
      <h1>ABOUT ME</h1>
      <div className="cointainer">
        <img src={logo} alt="" />
        <div className="textfeild"></div>
      </div>
    </div>
  );
};

export default About;
