import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
      <div className="App">
        <Navbar />
        <Header />
        <Main />
        <About />
        <Contact />
      </div>
  );
}
