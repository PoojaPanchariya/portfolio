import React from "react";
import "./ResumeFS.css";
import { FaGraduationCap, FaBriefcase, FaEye, FaDownload } from "react-icons/fa";

const ResumeFS = () => {
  const education = [
    {
      title: "M.Sc. in Computer Science",
      institution: "Gyanodaya Institute Of Management And Technology, Neemuch",
      year: "2020",
    },
    {
      title: "B.Sc. in Computer Science",
      institution: "Gyanodaya Institute Of Management And Technology, Neemuch",
      year: "2018",
    },
  ];

  const experience = [
    {
      title: "Data Analyst Training",
      institution: "Technoglobe, Udaipur",
      year: "2025",
    },
    {
      title: "Full Stack Developer Training",
      institution: "Technoglobe, Udaipur",
      year: "2025",
    },
    {
      title: "Frontend Developer Training",
      institution: "Codesh Institute, Neemuch",
      year: "2024",
    },
  ];

  return (
    <section id="resumefs" className="resumefs-section">
      <h2 className="resumefs-heading">Resume</h2>

      <div className="resumefs-buttons">
        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer" className="resume-btn  view-btn">
          <FaEye className="btn-icon" /> View Resume
        </a>
        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download className="resume-btn download-btn">
          <FaDownload className="btn-icon" /> Download Resume
        </a>
      </div>

      <div className="resumefs-content">
        {/* Education */}
        <div className="resumefs-column">
          <h3 className="resumefs-subheading">
            <FaGraduationCap className="icon" /> Education
          </h3>
          {education.map((edu, index) => (
            <div className="resumefs-item" key={index}>
              <h4>{edu.title}</h4>
              <p>{edu.institution}</p>
              <span>{edu.year}</span>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="resumefs-column">
          <h3 className="resumefs-subheading">
            <FaBriefcase className="icon" /> Experience
          </h3>
          {experience.map((exp, index) => (
            <div className="resumefs-item" key={index}>
              <h4>{exp.title}</h4>
              <p>{exp.institution}</p>
              <span>{exp.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeFS;
