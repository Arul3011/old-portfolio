import React from "react";
import "./projects.css";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <div className="cointainer">
        <div className="projectfeild">
          <h2>Project title</h2>
          <img src="https://img.freepik.com/free-vector/landing-page-website-template-with-abstract-low-poly-design_1048-14390.jpg?t=st=1733814664~exp=1733818264~hmac=b7b09b7292b056f3fd1c25ac6c3e2c44fafaf1056f695ff0ffb5aff8029ea0dc&w=740" alt=""/>
          <div className="projectdet">
         
    <a href=""  title="view project code" ><FaGithub /></a>
    <a href=""  title="live site" ><CiGlobe /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
