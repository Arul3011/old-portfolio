import React from "react";
import "./projects.css";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
  {
  title:"tnea Admission Predictor",
  img:"/tneacouns.jpg",
  gitLink:"https://github.com/Arul3011/counselingpredictor.git",
  liveLink:"https://counselingpredictor.vercel.app/"
  },
 {
  title:"waste management System",
  img:"/wastrally.png",
  gitLink:"https://github.com/Arul3011/wast-management-app.git",
  liveLink:"https://wast-management-app.vercel.app/"
  },
  {
  title:"blog application",
  img:"/blog.png",
  gitLink:"https://github.com/Arul3011/blogapp",
  liveLink:"https://blogapp-pi-seven.vercel.app/"
  }
]
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <div className="cointainer">

        {projects.map((val)=>(
              <div className="projectfeild"  data-aos="flip-left">
              <p>{val.title}</p>
              <img src={val.img} alt="image"/>
              <div className="projectdet">
              <a href={val.gitLink} target="_blank" title="view project code" ><FaGithub /></a>
              <a href={val.liveLink}  title="live site" target="_blank" ><CiGlobe /></a>
              </div>
            </div>
        ))}
        {/* <div className="projectfeild">
          <h2>Project title</h2>
          <img src="https://img.freepik.com/free-vector/landing-page-website-template-with-abstract-low-poly-design_1048-14390.jpg?t=st=1733814664~exp=1733818264~hmac=b7b09b7292b056f3fd1c25ac6c3e2c44fafaf1056f695ff0ffb5aff8029ea0dc&w=740" alt=""/>
          <div className="projectdet">
         
          <a href=""  title="view project code" ><FaGithub /></a>
          <a href=""  title="live site" ><CiGlobe /></a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
