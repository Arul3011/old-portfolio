import React, { useEffect, useState } from "react";
import logo from "./assets/photo_2024-09-14_14-53-42.jpg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [line, setLine] = useState(true);
  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) {
      setLine(false);
    } else {
      setLine(true);
    }
  });

  useEffect(()=>{
    const fun =()=>{
      if (window.innerWidth > 850) {
        setLine(false);
      } else {
        setLine(true);
      }
    }
    fun()
  
     
    }, []);
 
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
        });
        AOS.refresh();
      }, []);


  return (
    <section>
      <div  className="home">
        <div className="one" data-aos="zoom-in-down">
          <h1>Hi..There👋</h1>
          <h2>I'm Arul.</h2>
          <h3>I am a Web developer</h3>
          <p> Passionate about developing web applications</p>
          <div className="cv-btn">
            <a href="https://in.linkedin.com/in/arul-y-558491270" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/Arul3011" target="_blank"><FaGithubSquare /></a>
            
            
            <a href="/ARUL.pdf" target="_blank" className="cv-link" >View CV</a>
             

          </div>
        </div>
        <div className="two">
          <div className="imgd"  data-aos="zoom-in">
            <img src={logo} alt="logo"  />
          </div>
        </div>
      </div>
      <div className="STACK" data-aos="zoom-in-up">
        <div className="con">
          <span>
            Tech Stack
            {line ? <hr style={{ width: "90%" }} /> : "|"}
          </span>

          <div className="stack-imgs" >
            <img src="https://skillicons.dev/icons?i=html" alt="" />
            <img src="https://skillicons.dev/icons?i=css" alt="" />
            <img src="https://skillicons.dev/icons?i=js" alt="" />
            <img src="https://skillicons.dev/icons?i=python" alt="" />
            <img src="https://skillicons.dev/icons?i=react" alt="" />
            <img src="https://skillicons.dev/icons?i=next" alt="" />
            <img src="https://skillicons.dev/icons?i=git" alt="" />
            <img src="https://skillicons.dev/icons?i=github" alt="" />
            <img src="https://skillicons.dev/icons?i=mongodb" alt="" />
            <img src="https://skillicons.dev/icons?i=expressjs" alt="" />
            <img src="https://skillicons.dev/icons?i=nodejs" alt="" />
            <img src="https://skillicons.dev/icons?i=flask" alt="" />
          </div>
        </div>
      </div>
    </section >
  );
};

export default Home;
