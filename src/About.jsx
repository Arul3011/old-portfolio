import React from "react";
import "./about.css";
import logo from "./assets/photo_2024-09-14_14-53-42.jpg";
const About = () => {
  return (
    <div className="about" data-aos="zoom-in-up">
      <h1>ABOUT ME</h1>
      <div className="cointainer">
        <img
          src="https://thumbs.dreamstime.com/b/computer-software-developer-desk-room-office-158615853.jpg"
          alt=""
        />
        <div className="textfeild">
          <p>
            I'm a passionate web developer skilled in creating dynamic,
            user-friendly applications with React, Next.js, and MongoDB. I
            specialize in building responsive web solutions that deliver
            seamless user experiences, working across both frontend and backend
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
