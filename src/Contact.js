import React from "react";
import "./Contact.css"
import EmailLogo from "./emailLogo.png";
import GithubLogo from "./githubLogo.png";

export default function Contact(){
    return (
      <div className="container">
        <div className="contact">
          <div id="contact">
            <h2>I'd love to hear from you!</h2>
                <h4>Let's get to know eachother</h4>

            <div className="d-flex justify-content-evenly">
              <button
                type="button"
                className="btn btn-light button contactButton"
              >
                <a
                  href="mailto:annavanruiten@gmail.com"
                  className="email-link"
                  title="Email address"
                >
                  <img src={EmailLogo} alt="Logo of Email"/>
                </a>
              </button>
              <button
                type="button"
                className="btn btn-light button contactButton"
              >
                <a
                  href="https://github.com/avr87?tab=repositories"
                  className="github-link"
                  title="Github-Link"
                >
                  <img src={GithubLogo} alt="Logo of Github" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}