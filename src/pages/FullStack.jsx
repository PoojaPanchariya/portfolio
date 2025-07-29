import React from "react";
import "./FullStack.css";
import NavbarFS from "../components/fullstack/NavbarFS";
import AboutFS from "../components/fullstack/AboutFS";
import ProjectsFS from "../components/fullstack/ProjectFS";
import SkillsFS from "../components/fullstack/SkillsFS";
import ResumeFS from "../components/fullstack/ResumeFS";
import ContactFS from "../components/fullstack/ContactFS";
import FooterFS from "../components/fullstack/FooterFS";
import ScrollToTopFS from "../components/fullstack/ScrollToTopFS";

function FullStack() {
  return (
    <div className="fullstack-container">
      <NavbarFS />
      <AboutFS />
      <ProjectsFS />
      <SkillsFS />
      <ResumeFS />
      <ContactFS />
      <FooterFS />
      <ScrollToTopFS />
    </div>
  );
}

export default FullStack;
