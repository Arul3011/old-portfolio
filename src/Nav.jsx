import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
const Nav = () => {
  return (
    <div className="nav">
      <h3>Arul.dev</h3>
      <div className="navic">
        <IoReorderThreeOutline />
      </div>
      <div className="list">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contect">CONTECT</a>
      </div>
    </div>
  );
};

export default Nav;
