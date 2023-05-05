import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg  navbar-light fixed-top">
        <a className="navbar-brand brand" href="#header">
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
          <div className="navbar-nav mr-auto">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className=" nav-link" href="#header">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className=" nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className=" nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className=" nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
