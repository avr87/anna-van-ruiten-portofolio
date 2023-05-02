import React from "react";
import "./Header.css";
import AnnavanRuiten from "./AnnavanRuiten.png";

export default function Header(){

    return (
      <header>
        <div className="row">
          <div className="col">
            <h2>Hello,</h2> 
            <h1>I'm Anna van Ruiten</h1>
            <h3>Junior Front End Developer based in London</h3>
          </div>
          <div className="col">
            <img src={AnnavanRuiten} className="img-fluid" alt="profile-pic" />
          </div>
        </div>
      </header>
    );
}