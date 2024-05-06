import React from "react";
import "./styling/Header.css";
import AnnavanRuiten from "./images/AnnavanRuiten.png";

export default function Header(){

    return (
      <header>
        <div className="container-header">
          <div id="header" className="header">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
              <div className="col heading">
                <h2>Jambo!👋🏽</h2>
                <h1>Anna van Ruiten</h1>
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