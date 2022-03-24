import React from "react";
import "./About.css";
import profile_img from "../../assets/profile.jpeg";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="about__container sec__container">
      {/* <div className="sec__heading">
        <h1>About Me</h1>
      </div> */}

      <div className="grid__structure">
        <div className="about__image__left">
          <img className="left__image" src={profile_img}></img>
        </div>
        <div className="about__info__right">
          <div className="about__text">
            <p>
              I'm Krunal Parmar, and I'm currently enrolled in Centennial
              College's Software Engineering Artificial Intelligence course. I'm
              also a student researcher at the WIMTACH, where I am working with
              cutting-edge technologies like React, Python, OCR, REST APIs, and
              more.
            </p>
            <p>
              In terms of my prior education and experience, I earned a Bachelor
              of Engineering in Computer Science. And, I worked as a Web
              Developer Trainee where I worked on JavaScript, Sass, React,
              Node.js, and so on. As a result, I am willing to broaden my
              horizons by working on projects that require a Full Stack
              Developer, thanks to my interest and talents in Artificial
              Intelligence and Software Development.
            </p>
            <p className="resume">
              <a className="btn" href="#">
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="about__skills">
        <div className="skill">
          <FaReact className="skill__icon" />
          <h1>React</h1>
        </div>
        <div className="skill">
          <FaNodeJs className="skill__icon"></FaNodeJs>
          <h1>Node.js</h1>
        </div>
        <div className="skill">
          <SiMongodb className="skill__icon" />
          <h1>MongoDB</h1>
        </div>
        <div className="skill">
          <FaPython className="skill__icon" />
          <h1>Python</h1>
        </div>
        <div className="skill">
          <IoLogoJavascript className="skill__icon" />
          <h1>JavaScript</h1>
        </div>
        <div className="skill">
          <FaSass className="skill__icon" />
          <h1>Sass</h1>
        </div>
        <div className="skill">
          <SiPandas className="skill__icon" />
          <h1>Pandas</h1>
        </div>
        <div className="skill">
          <SiNumpy className="skill__icon" />
          <h1>NumPy</h1>
        </div>
        <div className="skill">
          <SiScikitlearn className="skill__icon" />
          <h1>SK-Learn</h1>
        </div>
        <div className="skill">
          <SiMysql className="skill__icon" />
          <h1>MySQL</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
