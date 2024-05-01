import React, { useState } from "react";
import "./Navbar.css";


export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (event) => {
    const href = event.target.getAttribute("href");
    setActiveLink(href);
  };
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("AnnaVanRuitenCV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "AnnaVanRuitenCV.pdf";
        alink.click();
      });
    });
  };

  return (
    <nav className="navbar navbar-expand-sm fixed-top" id="topheader">
      <a className="navbar-brand brand" href="#app">
        Anna van Ruiten
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeLink === "#projects" ? "active" : ""
              }`}
              href="#projects"
              onClick={handleClick}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeLink === "#about" ? "active" : ""}`}
              href="#about"
              onClick={handleClick}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeLink === "#contact" ? "active" : ""
              }`}
              href="#contact"
              onClick={handleClick}
            >
              Contact
            </a>
          </li>
          <li className="nav-item nav-download">
            <button className="download-button nav-link" onClick={onButtonClick}>
              Download CV
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
