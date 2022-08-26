import React from "react";
import "./Exprience.css";

const Exprience = () => {
  return (
    <>
      <div id="exprience" className="exprience__container sec__container">
        <div className="sec__heading">
          <h1>
            My
            <span className="sec__subheading"> Experience</span>
          </h1>
        </div>
        <div className="exprience__section">
          <h2 className="exprience__title">👨‍💻 Software Engineer Intern</h2>
          <h4 className="exprience__subtitle">🏢 WIMTACH, Toronto, Canada.</h4>
          <h4 className="exprience__subtitle">Jan. 2022 – July - 2022</h4>
          <p className="exprience__description">
            👉 Developing React-based OCR application to recognize the text from
            the image and convert that text to the speech.
          </p>
          <p className="exprience__description">
            👉 Designing the interactive reusable front-end components with
            React and integrating them with the backend.
          </p>
          <p className="exprience__description">
            👉 Implementing REST APIs using Python and Flask, and achieved the
            accuracy of predictions to more than 90 percent.
          </p>
        </div>

        <div className="exprience__section">
          <h2 className="exprience__title">👨‍💻 Web Developer</h2>
          <h4 className="exprience__subtitle">
            🏢 Accupoint Software Solutions, Ahmedabad, India.
          </h4>
          <h4 className="exprience__subtitle">Nov. 2019 to Dec. 2020</h4>
          <p className="exprience__description">
            👉 Worked with team members in the development of the frontend and
            backend of the web applications.
          </p>
          <p className="exprience__description">
            👉 Collaborated with team members using version control systems such
            as Git and Used JIRA for assigned task tracking.
          </p>
          <p className="exprience__description">
            👉 Used technologies such as JavaScript, ReactJS, NodeJS, HTML5,
            CSS3, Sass and so on.
          </p>
        </div>
      </div>
    </>
  );
};

export default Exprience;
