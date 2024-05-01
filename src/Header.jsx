import React from "react";
import "./Header.css";
import AnnavanRuiten from "./AnnavanRuiten.png";

export default function Header(){

    return (
      <header>
        <div className="container-header">
          <div id="header" className="header">
            <div className="row">
              <div className="col heading">
                <h2>Jambo!👋🏽</h2>
                <h1>I'm Anna van Ruiten</h1>
                <h2>Junior Software Developer</h2>
                <h3>🏡 London, UK</h3>
              </div>
              <div className="col pic">
                <img
                  src={AnnavanRuiten}
                  className="img-fluid shadow-sm"
                  alt="profile-pic"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="projects"> </div>
      </header>
    );
}