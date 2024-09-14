import React from "react";
import logo from "./assets/photo_2024-09-14_14-53-42.jpg";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="one">
          <h1>Hello..👋</h1>
          <h3>I am a frontent react developer</h3>
          <p>Hi, I'm Arul. A passionate Front-end React</p>
        </div>
        <div className="two">
          <div className="imgd">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="STACK">
        <div className="con">
          <span>Tech Stack | </span>
          <img src="https://skillicons.dev/icons?i=html" alt="" />
          <img src="https://skillicons.dev/icons?i=css" alt="" />
          <img src="https://skillicons.dev/icons?i=js" alt="" />
          <img src="https://skillicons.dev/icons?i=react" alt="" />
          <img src="https://skillicons.dev/icons?i=next" alt="" />
          <img src="https://skillicons.dev/icons?i=git" alt="" />
          <img src="https://skillicons.dev/icons?i=github" alt="" />
          <img src="https://skillicons.dev/icons?i=python" alt="" />
          <img src="https://skillicons.dev/icons?i=mongodb" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
