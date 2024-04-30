import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container-about">
      <div className="about">
        <h3>About me</h3>
        <p>
          Hey there! 👋🏽 My name is Anna, and I'm a Junior Software Developer
          passionate about coding and theatre 🎭. I started my coding journey
          with
          <a
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            {" "}
            SheCodes Max 🚀
          </a>{" "}
          and I loved it so much that I decided to join
          <a
            href="https://northcoders.com/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            {" "}
            Northcoders'
          </a>{" "}
          bootcamp to expand my knowledge with like-minded peers 🔍.
          <br />
          <br />
          As a mom 👩‍👧, I'm determined to be a positive role model for my
          daughter and show her that anything is achievable with resilience and
          determination 💪.
          <br />
          <br />
          I'm excited to start my career in tech with the same energy and
          enthusiasm I had pursuing a career on stage 🎤.
          <br />I believe that passion leads to purpose 💡, and I'm all about
          chasing that purpose. Whether it's coding or theatre, let's make our
          journey exciting and fulfilling together! 🌟
        </p>
      </div>
    </div>
  );
}
