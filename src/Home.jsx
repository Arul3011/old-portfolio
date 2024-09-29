import React, { useState } from "react";
import logo from "./assets/photo_2024-09-14_14-53-42.jpg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Home = () => {
  const [line, setLine] = useState(true);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) {
      setLine(false);
    } else {
      setLine(true);
    }
  });
  window.addEventListener("load", () => {
    if (window.innerWidth > 850) {
      setLine(false);
    } else {
      setLine(true);
    }
  });
  return (
    <div>
      <div className="home">
        <div className="one">
          <h1>Hi..There👋</h1>
          <h2>I'm Arul.</h2>
          <h3>I am a frontent react developer</h3>
          <p> A passionate in Front-end Development</p>
          <div className="cv-btn">
            <FaLinkedin />
            <FaGithubSquare />
            <button>View CV</button>
          </div>
        </div>
        <div className="two">
          <div className="imgd">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="STACK">
        <div className="con">
          <span>
            Tech Stack
            {line ? <hr style={{ width: "90%" }} /> : "|"}
          </span>

          <div className="stack-imgs">
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
    </div>
  );
};

export default Home;
