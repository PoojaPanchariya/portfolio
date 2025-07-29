import React, { useRef } from "react";
import "./ContactFS.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactFS = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hmbibyf", // replace with your EmailJS Service ID
        "template_wy7c78p", // replace with your EmailJS Template ID
        form.current,
        "tNAqttSXNOHzQCWky" // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message Sent Successfully! ✅");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message ❌");
        }
      );

    e.target.reset();
  };
  return (
    <div className="contactfs-section" id="contact">
      <h2 className="contactfs-heading">Contact Me</h2>

      <div className="contactfs-container">
        {/* Left - Profile Links */}
        <div className="connectfs-card">
          <h2 className="connect-title">Connect with Me</h2>
          <p className="connect-subtitle">I'd love to hear from you! 💬</p>

          <div className="social-links">
            <a
              href="https://linkedin.com/in/pooja-panchariya-b9b71525b"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item linkedin"
            >
              <FaLinkedin className="icons" />
              <span>pooja-panchariya-b9b71525b</span>
            </a>
            <a
              href="https://github.com/PoojaPanchariya"
              className="social-item github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FaGithub style={{ fontSize: "1.5rem", color: "#24292e" }} />
              </div>
              github.com/PoojaPanchariya
            </a>
            <a
              href="mailto:poojash0699@gmail.com"
              className="social-item email"
            >
              <FaEnvelope className="icons" />
              <span>poojash0699@gmail.com</span>
            </a>
            <a href="tel:+917477265047" className="social-item phone">
              <FaPhone className="icons" />
              <span>+91-7477265047</span>
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="contactfs-card">
          <h3 className="connect-title">Send Me a Message</h3>
          <p className="connect-subtitle">
            Let's collaborate or just say hello💬
          </p>

          <form className="contactfs-form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFS;
