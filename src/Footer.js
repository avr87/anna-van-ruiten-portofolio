import React from "react";
import "./Footer.css";

export default function Footer(){
    return (
      <div className="footer">
        <div className="boxes">
          <div className="box-1">
            <ul className="footerlist">
              <li>
                <a href="#app">Home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="box-2">
            <p>
              I have created this page to show you some of my projects and to
              introduce myself to you.{" "}
            </p>
            This page was coded by Anna van Ruiten and open-sourced on{ ' '}
             <a href="https://github.com/avr87/anna-van-ruiten-portofolio.git">
               Github
            </a>.
          </div>
        </div>
      </div>
    );
}