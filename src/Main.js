import React from "react";
import Weatherscreenshot from "./Weatherscreenshot.png";
import Dictionaryscreenshot from "./Dictionaryscreenshot.png";
import Tarangire from "./Tarangirescreenshot.png";
import WorldClock from "./WorldClockscreenshot.png";
import "./Main.css";

export default function Main() {
  return (
    <div className="projects">
      <div id="projects">
        <h4>What I have created so far</h4>
        <div className="WeatherApp">
          <div className="row">
            <div className="col-6">
              <a
                href="https://luminous-mousse-9fab79.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Weatherscreenshot}
                  alt="Screenshot of Weather-app"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-6">
              <div className="description">
                <h3>Weather App</h3>
                <p>
                  Built using VSCode, HTML5, CSS, REACT, Bootstrap, Axios, Api
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="DictionaryApp">
          <div className="row">
            <div className="col-6">
              <div className="description">
                <h3>Dictionary App</h3>
                <p>
                  Built using VSCode, HTML5, CSS, REACT, Bootstrap, Axios, Api
                </p>
              </div>
            </div>
            <div className="col-6">
              <a
                href="https://earnest-dusk-24b82f.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Dictionaryscreenshot}
                  alt="Screenshot of Dictionary-app "
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="TarangireLandingPage">
          <div className="row">
            <div className="col-6">
              <a
                href="https://ephemeral-faloodeh-7a699d.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Tarangire}
                  alt="Screenshot of Tarangire landing page"
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-6">
              <div className="description">
                <h3>Tarangire Landing Page</h3>
                <p>Built using VSCode, HTML5, CSS, Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Worldclock">
          <div className="row">
            <div className="col-6">
              <div className="description">
                <h3>World Clock</h3>
                <p>
                  Built using VSCode, HTML5, CSS, REACT, Bootstrap, Axios, Api
                </p>
              </div>
            </div>
            <div className="col-6">
              <a
                href="https://bright-tarsier-f27327.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={WorldClock}
                  alt="Screenshot of Worldclock page "
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <button type="button" className="btn btn-light button">
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}
