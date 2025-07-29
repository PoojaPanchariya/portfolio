import React from "react";
import "./AboutFS.css";
import myPhoto from "../../assets/pooja.png";
import { TypeAnimation } from "react-type-animation";
import CustomTypewriter from "./CustomTypewriter";
import "./CustomTypewriter.css";

function openGmail() {
  const email = "poojash0699@gmail.com";
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  window.open(url, "_blank");
}
const AboutFS = () => {
  return (
    <section className="aboutme-fs">
      <div className="aboutme-container">
        <div className="aboutme-image-wrapper">
          <img src={myPhoto} alt="Pooja Panchariya" className="aboutme-image" />
        </div>
        <div className="aboutme-content">
          <CustomTypewriter />

          <h2>
            <TypeAnimation
              className="typing-highlight"
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Expert",
                2000,
                "Problem Solver",
                2000,
                "Creative Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{
                fontSize: "1.5rem",
                display: "inline-block",
                color: "#8b0618",
              }}
            />
          </h2>

          <p>
            A passionate <strong>Full Stack Developer</strong> with a flair for
            crafting intuitive user interfaces and scalable backend systems. I
            specialize in <strong>MERN stack</strong> and have hands-on
            experience building real-world projects, from responsive dashboards
            to dynamic web platforms.
          </p>
          <p>
            My journey blends creativity, clean code, and a constant hunger to
            learn. Whether it's building APIs or polishing front-end
            interactions, I love solving problems and turning ideas into working
            solutions.
          </p>
          <div className="skills-tags">
            {["JavaScript", "React", "Node.js", "Express", "MongoDB"].map(
              (skill, index) => (
                <span key={index} style={{ "--i": index }}>
                  {skill}
                </span>
              )
            )}
          </div>

          <button onClick={openGmail} className="hireme-btn">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutFS;
