// src/components/Contact.js
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

const Contact = ({ theme }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hmbibyf",       // EmailJS service ID
        "template_aftq8hh",      // EmailJS template ID
        form.current,
        "tNAqttSXNOHzQCWky"      // EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again later.");
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className={`text-center py-5 contact-section ${theme}`}>
      <h2 className="section-title animate-slide-up">Contact Me</h2>
      <div className="contact-grid">
        {/* Contact Form */}
        <div className="form-container animate-slide-up">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="links-container animate-fade-in">
          <div className="icon-links">
            <a
              className="icon-box"
              href="mailto:poojash0699@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="fa-envelope" />
              poojash0699@gmail.com
            </a>
            <a
              className="icon-box"
              href="tel:+917477265047"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone className="fa-phone" />
              +91-7477265047
            </a>
            <a
              className="icon-box"
              href="https://www.linkedin.com/in/pooja-panchariya-b9b71525b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="fa-linkedin" />
              pooja-panchariya-b9b71525b
            </a>
            <a
              className="icon-box"
              href="https://github.com/PoojaPanchariya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="fa-github" />
              github.com/PoojaPanchariya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
