import React from "react";
import "./styling/Contact.css";
import EmailLogo from "./images/emailLogo.png";
import GithubLogo from "./images/githubLogo.png";
import LinkedInLogo from "./images/LinkedInLogo.png";

export default function Contact() {
  return (
    <div className="container-contact boxes">
      <div className="contact box-1">
        <div id="contact">
          <h3>I'd love to hear from you!</h3>
        </div>
      </div>
      <div className="d-flex justify-content-evenly icons box-2">
        <button type="button" className="btn btn-light button contactButton">
          <a
            href="mailto:annavanruiten@icloud.com"
            className="email-link"
            title="Email address"
          >
            <img src={EmailLogo} alt="Logo of Email" />
          </a>
        </button>
        <button type="button" className="btn btn-light button contactButton">
          <a
            href="https://www.linkedin.com/in/annavanruiten"
            className="linkedIn-link"
            title="LinkedIn Link"
          >
            <img src={LinkedInLogo} alt="LinkedIn Logo" />
          </a>
        </button>
        <button type="button" className="btn btn-light button contactButton">
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
  );
}
