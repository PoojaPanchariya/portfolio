import React, { useEffect, useState } from "react";
import "./SkillsFS.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

const hardSkills = [
  { name: "HTML", level: 95, icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", level: 85, icon: <FaJs color="#776c24ff" /> },
  { name: "ReactJS", level: 90, icon: <FaReact color="#2d7a8dff" /> },
  { name: "Node.js/Express.js", level: 80, icon: <FaNodeJs color="#354b33ff" /> },
  { name: "MongoDB", level: 75, icon: <FaDatabase color="#2b5c23ff" /> },
];

const softSkills = [
  { name: "Communication", level: 85 },
  { name: "Teamwork", level: 95 },
  { name: "Time Management", level: 90 },
  { name: "Discipline", level: 95 },
  { name: "Quick Learning", level: 90 },
  { name: "Punctuality", level: 90 },
];

const SkillsFS = () => {
  const [animatedHardSkills, setAnimatedHardSkills] = useState([]);
  const [animatedSoftSkills, setAnimatedSoftSkills] = useState([]);

  useEffect(() => {
    // Animate hard skills
    const interval = setInterval(() => {
      setAnimatedHardSkills((prev) => {
        return hardSkills.map((skill, i) => {
          const current = prev[i] ?? 0;
          if (current < skill.level) return current + 1;
          return skill.level;
        });
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate soft skills
    const interval = setInterval(() => {
      setAnimatedSoftSkills((prev) => {
        return softSkills.map((skill, i) => {
          const current = prev[i] ?? 0;
          if (current < skill.level) return current + 1;
          return skill.level;
        });
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="skillsfs-section" id="skillsfs">
      <h2 className="skillsfs-heading">Skills</h2>
      <div className="skillsfs-container">
        {/* Hard Skills */}
        <div className="hard-skills">
          {hardSkills.map((skill, index) => (
            <div key={index} className="skillsfs-card">
              <div className="skillsfs-title">
                <span className="skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
                <span>{animatedHardSkills[index] ?? 0}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${animatedHardSkills[index] ?? 0}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <div className="soft-skill-circles">
            {softSkills.map((skill, index) => {
              const radius = 40;
              const circumference = 2 * Math.PI * radius;
              const animatedValue = animatedSoftSkills[index] ?? 0;
              const offset = circumference * (1 - animatedValue / 100);

              return (
                <div key={index} className="circle-container">
                  <svg className="progress-ring" width="100" height="100">
                    <circle
                      className="progress-ring-bg"
                      cx="50"
                      cy="50"
                      r={radius}
                      strokeWidth="10"
                    />
                    <circle
                      className="progress-ring-circle"
                      cx="50"
                      cy="50"
                      r={radius}
                      strokeWidth="10"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                    />
                  </svg>
                  <div className="circle-label">{animatedValue}%</div>
                  <p>{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsFS;
