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
    <div className="projects">
      <h2>Projects I have created so far</h2>
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
                src={EnglishDictionaryscreenshot}
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
                className="img-fluid tarangire-pic"
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
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-6">
            <div className="description">
              <h3>NC News</h3>
              <p>
                Front end: I crafted a responsive front end using React. NC
                News, akin to Reddit, offers a dynamic platform for user
                engagement, content rating, and topic discussions. The platform
                features a user-friendly CRUD application, allowing users to
                effortlessly vote on articles and actively contribute to
                discussions by adding and deleting comments. Back end: I
                developed an API resembling a real-world backend service, aimed
                at providing data to the frontend architecture. Utilizing a
                PostgreSQL database and node-postgres, I created various
                endpoints and employed Test-Driven Development (TDD) for
                testing.
              </p>
            </div>
          </div>
          <div className="Tipper">
            <div className="row">
              <div className="col-6">
                <div className="description">
                  <h3>
                    Tipper
                    <br />
                    Cashless tipping mobile web-app
                  </h3>
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
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about"></div>
    </div>
  );
}
