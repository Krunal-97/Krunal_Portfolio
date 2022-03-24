import React from "react";
import "./Exprience.css";

const Exprience = () => {
  return (
    <>
      <div id="exprience" className="exprience__container sec__container">
        <div className="sec__heading">
          <h1>
            My
            <span className="sec__subheading"> Exprience</span>
          </h1>
        </div>
        <div className="exprience__section">
          <h1 className="exprience__title">Full Stack Developer</h1>
          <h2 className="exprience__subtitle">WIMTACH</h2>
          <p className="exprience__description">
            👉 Developing OCR-based application to recognize the text, and
            convert that text to the speech for kids.
          </p>
          <p className="exprience__description">
            👉 Creating and implementing Restful APIs using Python and Flask for
            the image pre-processing and functionalities, and achieved the
            accuracy of predictions to around 99 percent.
          </p>
          <p className="exprience__description">
            👉 Designing the interactive frontend and reusable components with
            the React Native.
          </p>
        </div>

        <div className="exprience__section">
          <h1 className="exprience__title">Web Developer Intern</h1>
          <h2 className="exprience__subtitle">Accupoint Software Solutions</h2>
          <p className="exprience__description">
            👉 Worked with team members in the development of the frontend and
            backend of the web applications using technologies such as
            JavaScript, React, HTML5, CSS3, Sass.
          </p>
          <p className="exprience__description">
            👉 Collaborated with team members using version control systems such
            as Git and Used JIRA for assigned task tracking.
          </p>
        </div>
      </div>
    </>
  );
};

export default Exprience;
