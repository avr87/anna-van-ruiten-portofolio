import React from "react";
import "./Contact.css";
import EmailLogo from "./emailLogo.png";
import GithubLogo from "./githubLogo.png";
import LinkedInLogo from "./LinkedInLogo.png";

export default function Contact() {
  return (
    <div className="container-contact">
      <div className="contact">
        <div id="contact">
          <h3>I'd love to hear from you!</h3>
          <div className="d-flex justify-content-evenly icons">
            <button
              type="button"
              className="btn btn-light button contactButton"
            >
              <a
                href="mailto:annavanruiten@icloud.com"
                className="email-link"
                title="Email address"
              >
                <img src={EmailLogo} alt="Logo of Email" />
              </a>
            </button>
            <button
              type="button"
              className="btn btn-light button contactButton"
            >
              <a
                href="https://www.linkedin.com/in/annavanruiten"
                className="linkedIn-link"
                title="LinkedIn Link"
              >
                <img src={LinkedInLogo} alt="LinkedIn Logo" />
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
