import React from "react";
import Weatherscreenshot from "./Weatherscreenshot.png";
import Tarangire from "./Tarangirescreenshot.png";
import WorldClock from "./WorldClockscreenshot.png";
import NCNewsscreenshot from "./NCNewsscreenshot.png";
import "./Main.css";
import EnglishDictionaryscreenshot from "./EnglishDictionaryscreenshot.png";
import Tippersscreenshot from "./Tippersscreenshot.png";

export default function Main() {
  return (
    <>
      <main className="projects">
        <h3>My Projects</h3>
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
                  className="rounded mx-auto d-block shadow-sm"
                />
              </a>
            </div>
            <div className="col-6">
              <div className="description">
                <h4>Weather App</h4>
                <p>VSCode, HTML5, CSS, REACT, Bootstrap, Axios, Api</p>
              </div>
            </div>
          </div>
        </div>
        <div className="DictionaryApp">
          <div className="row">
            <div className="col-6">
              <div className="description">
                <h4>Dictionary App</h4>
                <p>VSCode, HTML5, CSS, REACT, Bootstrap, Axios, Api</p>
              </div>
            </div>
            <div className="col-6">
              <a
                href="https://earnest-dusk-24b82f.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={EnglishDictionaryscreenshot}
                  alt="Screenshot of Dictionary-app "
                  className="rounded mx-auto d-block shadow-sm"
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
                  className="rounded mx-auto d-block shadow-sm"
                />
              </a>
            </div>
            <div className="col-6">
              <div className="description">
                <h4>Tarangire Landing Page</h4>
                <p>VSCode, HTML5, CSS, Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Worldclock">
          <div className="row">
            <div className="col-6">
              <div className="description">
                <h4>World Clock</h4>
                <p>VSCode, HTML5, CSS, REACT, Bootstrap, Axios, Api</p>
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
                  className="rounded mx-auto d-block shadow-sm"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="NCNews">
          <div className="row">
            <div className="col-6">
              <a
                href="https://nc-news-anna-front-end.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={NCNewsscreenshot}
                  alt="Screenshot of the homepage of NC News"
                  className="rounded mx-auto d-block shadow-sm"
                />
              </a>
            </div>
            <div className="col-6">
              <div className="description">
                <h4>NC News</h4>
                <h5>
                 A dynamic platform for user
                  engagement, content rating, and topic discussions.
                </h5>
                <br />
                <p>
                  <strong>BackEnd: </strong>
                  <br />
                  JavaScript, Postgres, Sql, ExpressJs, Jest, Husky, Supertest
                  <br />
                  <strong>FrontEnd: </strong>
                  <br />
                  React, Bootstrap, Axios, Vercel
                </p>
              </div>
            </div>
            <div className="Tipper">
              <div className="row">
                <div className="col-6">
                  <div className="description">
                    <h4>Tipper</h4>

                    <h5>Cashless tipping mobile web-app</h5>
                    <br />
                    <p>
                      <strong>BackEnd: </strong>
                      <br />
                      JavaScript, MongoDB, ExpressJs, Jest, Husky, Supertest
                      <br />
                      <strong>FrontEnd: </strong>
                      <br />
                      Next.js, Bootstrap, Stripe, Cryptr, SCSS, Axios, Vercel
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <a
                    href="https://front-end-eight-eta-57.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Tippersscreenshot}
                      alt="Screenshot of the log-in page of the Tipper app"
                      className="rounded mx-auto d-block shadow-sm"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about"></div>
      </main>
    </>
  );
}
