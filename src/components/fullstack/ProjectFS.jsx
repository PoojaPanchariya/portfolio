import React, { useState } from "react";
import "./ProjectFS.css";
import { FaCopy } from "react-icons/fa";

const ProjectsFS = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const projects = [
    {
      title: "Hotel Booking Platform",
      description:
        "A full-fledged hotel booking platform with Stripe integration, MongoDB, and JWT-based authentication. Users can search, book, and manage bookings with a responsive UI. Built using MERN stack, with full backend and frontend development done independently.Includes complex logic for room availability, booking management, and real-time data handling.",

      link: "https://comfotel.vercel.app/",
      embed: "https://comfotel.vercel.app/",
      github: "https://github.com/PoojaPanchariya/hotel-booking",
    },
    // Add more projects here
  ];

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="projects" className="projects-section-fs">
      <h2 className="sectionfs-title">Projects</h2>
      <div className="projectfs-grid">
        {projects.map((project, index) => (
          <div className="projectfs-card" key={index}>
            <div className="projectfs-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            {project.embed && (
              <div className="browser-window">
                <div className="browser-header">
                  <span className="circle red"></span>
                  <span className="circle yellow"></span>
                  <span className="circle green"></span>
                  <span className="browser-title">{project.title}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="open-button"
                  >
                    Open in New Tab
                  </a>
                </div>

                <span className="preview-note">
                  🔍 Preview Only — Click "Open in New Tab" for full version
                </span>

                <iframe
                  src={project.embed}
                  title={project.title}
                  className="projectfs-iframe"
                  frameBorder="0"
                  loading="lazy"
                ></iframe>
              </div>
            )}

            <div className="projectfs-buttons">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="open-button view-live-btn"
              >
                View Live
              </a>
              <div className="projectfs-link-text">
                {project.link}{" "}
                <FaCopy
                  className="copy-icon"
                  onClick={() => copyToClipboard(project.link, index)}
                  title="Copy Link"
                />
                {copiedIndex === index && (
                  <span className="copied-msg">Copied!</span>
                )}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-button github-btn"
                >
                  View GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsFS;
