import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Add this line to include Bootstrap JS
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaSwift,
  FaPhp,
  FaHtml5,
  FaCss3,
  FaJs,
  FaCode,
  FaDatabase,
  FaTools,
  FaBars,
} from "react-icons/fa";
import "./App.css";
import {} from "react-icons/fa";

const Portfolio = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <FaCode style={{ color: "white" }} />{" "}
            <span style={{ color: "orange" }}>Palapon.io</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <FaBars style={{ color: "white" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  <span style={{ color: "orange" }}>Skills</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  <span style={{ color: "orange" }}>Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Experience">
                  <span style={{ color: "orange" }}>Experience</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <span style={{ color: "orange" }}>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="bg-light text-start py-5">
        <div className="container my-5">
          <h4>Hi, I'm</h4>
          <h1>Palapon </h1>
          <h1>Frontend Developer</h1>
          <p>Passionate about React, JavaScript, and Web Development</p>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </header>

      {/* skills Section */}
      <section id="skills" className="p-5 bg-dark text-white">
        <div className="text-center">
          <h5 style={{ color: "orange" }}>What I Know</h5>
          <h1>Who I Am</h1>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">
                  <FaCode style={{ color: "orange" }} /> Frontend
                </h5>
                <ul>
                  <li>
                    <FaHtml5 style={{ color: "#e34c26" }} /> HTML5 &{" "}
                    <FaCss3 style={{ color: "#264de4" }} /> CSS3
                  </li>
                  <li>
                    <FaJs style={{ color: "#f0db4f" }} /> JavaScript
                  </li>
                  <li>
                    <FaReact style={{ color: "#61DBFB" }} /> React.js
                  </li>
                  <li>
                    <FaBootstrap style={{ color: "#563d7c" }} /> Bootstrap
                  </li>
                  <li>
                    <FaCss3 style={{ color: "#38b2ac" }} /> Tailwind
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">
                  <FaDatabase style={{ color: "orange" }} /> Backend
                </h5>
                <ul>
                  <li>
                    <FaPhp style={{ color: "#8993be" }} /> PHP
                  </li>
                  <li>
                    <FaDatabase style={{ color: "#f29111" }} /> SQL
                  </li>
                  <li>
                    <FaDatabase style={{ color: "#00758f" }} /> MySQL
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">
                  <FaTools style={{ color: "orange" }} /> Tools & Others
                </h5>
                <ul>
                  <li>
                    <FaCode style={{ color: "orange" }} /> Git & GitHub
                  </li>
                  <li>
                    <FaCode style={{ color: "orange" }} /> VSCode
                  </li>
                  <li>
                    <FaSwift style={{ color: "#f05138" }} /> Swift
                  </li>
                  <li>
                    <FaNodeJs style={{ color: "#68a063" }} /> Node.js
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light  p-5 ">
        <h2 className="text-center mb-3">My Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">Project : sport-exercise</h5>
                <span class="badge bg-light text-primary m-1">HTML</span>
                <span class="badge bg-light text-primary m-1">CSS</span>
                <span class="badge bg-light text-primary m-1">JS</span>
                <span class="badge bg-light text-primary m-1">PHP</span>
                <span class="badge bg-light text-primary m-1">MYSQL</span>
                <p className="card-text">
                  A Digital Ecosystem Prototype of Sport and Exercise for Health
                  Information Management System
                </p>
                <a href="" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">Project : kanommuangphet</h5>
                <span class="badge bg-light text-primary m-1">HTML</span>
                <span class="badge bg-light text-primary m-1">CSS</span>
                <span class="badge bg-light text-primary m-1">JS</span>
                <span class="badge bg-light text-primary m-1">PHP</span>
                <span class="badge bg-light text-primary m-1">MYSQL</span>
                <p className="card-text">
                  Kanom Muang Phet simplifies ingredient, order, and reservation
                  management while connecting suppliers to grow your business.
                </p>
                <a href="" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-2">
              <div className="card-body">
                <h5 className="card-title">
                  Project : Retail Management System
                </h5>
                <p className="card-text">
                  <span class="badge bg-light text-primary m-1">SwiftUI</span>
                  <span class="badge bg-light text-primary m-1">
                    Playground
                  </span>
                  <br></br>
                  The system simplifies inventory management, helping sellers
                  work efficiently and track products faster.
                </p>
                <a
                  href="https://github.com/palapon001/ProjectSwiftUI"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="Experience" className="container my-5">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-circle"></div>
            <div className="card text-start p-3 bg-light ">
              <h5>Dec 2022 - Mar 2023</h5>
              <h4>Kiatnakin Phatra Bank (Bangkok) | Intern iOS Engineer</h4>
              <ul>
                <li>Implemented login flows</li>
                <li>Implemented Product shelf</li>
                <li>Implemented Face Scan</li>
                <li>Fixed issues</li>
                <li>Implemented OTP</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-circle"></div>
            <div className="card text-start p-3 bg-light ">
              <h5>Oct 2018 - Feb 2019, May 2017 - Sep 2017</h5>
              <h4>
                PEA District 1 (Southern), Phetchaburi Province | Intern Web
                Master
              </h4>
              <ul>
                <li>
                  Managed web maintenance for 13 departments within the
                  organization
                </li>
                <li>
                  Upgraded and added Joomla modules, slideshows, and menu
                  functions
                </li>
                <li>
                  Added news articles to the website and integrated domain login
                  for PEA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-light p-5 ">
        <div className="text-center">
          <h5 style={{ color: "orange" }}>GET IN TOUCH</h5>
          <h1>Contact</h1>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 align-self-center">
            <div className="d-flex justify-content-center">
              <div className="p-1 ">
                <ul className="list-unstyled">
                  <li>
                    <FaEnvelope /> naymonpalapon@gmail.com
                  </li>
                  <li>
                    <FaPhone /> 0996317186
                  </li>
                  <li>
                    <FaMapMarkerAlt /> 53/1338 Krisadanakorn Changwattana
                    Village, Bang Taladd, Pakret, Nontaburi 11120
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form className="card p-4 m-5 justify-content-center">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Palapon Thitithanaporn</p>
      </footer>
    </div>
  );
};

export default Portfolio;
