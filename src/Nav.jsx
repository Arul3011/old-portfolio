import React, { useRef } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
const Nav = () => {
  const dilogref = useRef();
  const handelnav =() =>{
    ref.current?.showModal();
    alert("clicked");
  }
  return (
    <div className="nav">
      <h3>Arul.dev</h3>
      <div className="navic">
        <span onClick={handelnav}>
           <IoReorderThreeOutline />
        </span>
      </div>
      <div className="list">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contect">CONTACT</a>
      </div>
      <dialog ref={dilogref}> 
           <div className="dlist">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contect">CONTACT</a>
      </div>
      </dialog >
    </div>
  );
};

export default Nav;
