// src/components/LandingPage.jsx
import React from "react";
import "./LandingPage.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content ">
        <h1 className="landing-title sliding-text">Hi,I am Pooja Panchariya</h1>

        <p className="landing-subtitle">
          Welcome to my portfolio! I am a <strong>Full Stack Developer</strong>{" "}
          & <strong>Data Analyst</strong> passionate about turning ideas into
          digital solutions and extracting insights from data.
        </p>
        <p className="explore-text  floating-text">
          Explore more to see my profile in detail 👇
        </p>

        <div className="landing-buttons">
          <a href="/portfolio/full-stack" className="landing-btn">
            Full Stack
          </a>
          <a href="/portfolio/data-analyst" className="landing-btn">
            Data Analyst
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://linkedin.com/in/pooja-panchariya-b9b71525b"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/PoojaPanchariya"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
