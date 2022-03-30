import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/intelligentSearch.png";
import img2 from "../../assets/Ticker.png";
import img3 from "../../assets/amazon.png";
import wordpress from "../../assets/WordPress.jpeg";
import card from "../../assets/CardScanner.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="sec__container">
      <div className="sec__heading sec__container">
        <h1>
          My
          <span className="sec__subheading"> Projects</span>
        </h1>
      </div>
      <div className="portfolio__container ">
        <div className="project">
          <h1 className="project__title">TICKR: Incident Management System</h1>
          <img src={img2} />
          <p className="project__description">
            💻 Technologies: React, MongoDB, Express.js, Node.js
          </p>
          <p className="project__description">
            ➡️ Developed a web app to help customers to raise the system-related
            issues/tickets for the admin to resolve.
          </p>

          <p className="project__description">
            ➡️ Implemented CRUD Operations, JWT authentication, route guards,
            and audit trail to track the journey of the raised ticket.
          </p>

          <div className="project__btns">
            <a
              className="btn"
              target="_blank"
              href="http://tickr-ims.herokuapp.com/home"
            >
              Visit Project
            </a>
            <a
              className="btn"
              target="_blank"
              href="https://github.com/Krunal-97/Incident_Management"
            >
              Github
            </a>
          </div>
        </div>

        <div className="project">
          <h1 className="project__title">
            Intelligent Search: AI - based Web Application
          </h1>
          <img src={img1} />
          <p className="project__description">
            💻 Technologies: React, Sass, MongoDB, Python, Python-Flask
          </p>
          <p className="project__description">
            ➡️ Developed a web app to help organization to search the answers
            and covert it to speech from the trained data.
          </p>
          <p className="project__description">
            ➡️ Built Restful APIs for CRUD operation, uploading any files,
            downloading any files.
          </p>
          <div className="project__btns">
            {/* <a className="btn" target="_blank" href="#">
              Visit Project
            </a> */}
            <a
              className="btn"
              target="_blank"
              href="https://github.com/Krunal-97/IntelligentSearch"
            >
              Github
            </a>
          </div>
        </div>

        <div className="project">
          <h1 className="project__title">Amazon Clone</h1>
          <img src={img3} />

          <p className="project__description">
            💻 Technologies: React , Redux, Firebase
          </p>
          <p className="project__description">
            ➡️ User can add items to cart, update cart, remove items from cart.
          </p>
          <p className="project__description">
            ➡️ Interactive reusable components built with React and responsive
            design.
          </p>
          <p className="project__description">
            ➡️ Also, it is deployed using firebase.
          </p>
          <p></p>
          <div className="project__btns">
            <a
              className="btn"
              target="_blank"
              href="https://myproject-10599.firebaseapp.com/"
            >
              Visit Project
            </a>
            <a
              className="btn"
              target="_blank"
              href="https://github.com/Krunal-97/AmazonReactProj"
            >
              Github
            </a>
          </div>
        </div>

        <div className="project">
          <h1 className="project__title">Card Scanner</h1>
          <img src={card} />

          <p className="project__description">
            💻 Technologies: React, Python, Chalice, AWS, DynamoDb
          </p>

          <p className="project__description">
            ➡️ Created a web app that upload any card image to the AWS and fetch
            the information such as name, number, email, address and so on.
          </p>
          <p className="project__description">
            ➡️ Implemented APIs with Python and Chalice, and fetched it with
            axios in the React. Aftet that, stored card information to the
            database.
          </p>
          <p className="project__description">
            ➡️ Also, it has search all contacts and search by name features.
          </p>
          <div className="project__btns">
            {/* <a className="btn" target="_blank" href="#">
              Visit Project
            </a> */}
            <a
              className="btn"
              target="_blank"
              href="https://github.com/Krunal-97/Card_Scanner"
            >
              Github
            </a>
          </div>
        </div>

        <div className="project">
          <h1 className="project__title">WordPress Theme Development</h1>
          <img src={wordpress} />
          <p className="project__description">
            💻 Technologies: HTML5 , CSS3 , JavaScript , jQuery , PHP ,
            WordPress
          </p>
          <p className="project__description">
            ➡️ Created a WordPress custom theme that has functionalities such as
            custom header options, custom post-type-based slider, child pages,
            subpages of child pages container, custom footer widget areas
            options, and responsive design.
          </p>
          <div className="project__btns">
            {/* <a className="btn" href="#">
              Visit Project
            </a> */}
            <a
              className="btn"
              target="_blank"
              href="https://github.com/Krunal-97/rtCamp-WordPress-Engineer-Challenge"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
