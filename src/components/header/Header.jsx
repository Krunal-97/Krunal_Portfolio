import React from "react";
import "./Header.css";
import Resume from "../../assets/Kruna_Parmar_Resume.pdf";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import profile_img from "../../assets/profile.png";

const Header = () => {
  return (
    <header id="header">
      <div className="header__contaier">
        <div className="header__left">
          <div className="header_text">
            <h5>Hello, Nice to meet you! 😊</h5>
            <h1>My name is Krunal Parmar.</h1>
            <h3>
              I'm a Full-stack Software Developer situated in Toronto, Canada.👨‍💻
            </h3>
          </div>
          <div className="header__icons">
            <a href="https://www.linkedin.com/in/krunal-97/" target="_blank">
              <BsLinkedin className="icon"></BsLinkedin>
            </a>

            <a href="https://github.com/Krunal-97" target="_blank">
              <FaGithubSquare className="icon"> </FaGithubSquare>
            </a>
          </div>

          <div className="header__download">
            <a className="btn" href="#">
              Download Resume
            </a>
            <a className="btn" href="#about">
              About Me
            </a>
          </div>
        </div>
        <div className="header__right">
          <div className="right__image">
            <img src={profile_img}></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
