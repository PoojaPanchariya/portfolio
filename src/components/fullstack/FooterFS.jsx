import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./FooterFS.css"

const FooterFS = () => {
  return (
    <footer className="footerfs-container">
      <div className="footerfs-top">
       
        <div className="footerfs-socials">
          <a
            href="https://linkedin.com/in/pooja-panchariya-b9b71525b"
            target="_blank"
            rel="noreferrer"
            className="footerfs-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/PoojaPanchariya"
            target="_blank"
            rel="noreferrer"
            className="footerfs-icon"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:poojash0699@gmail.com"
            className="footerfs-icon"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footerfs-bottom">
        <p>&copy; {new Date().getFullYear()} Pooja Panchariya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterFS;
