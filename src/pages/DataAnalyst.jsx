import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

function DataAnalyst() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
    AOS.init({ duration: 1000 });
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero theme={theme} />
      <Projects theme={theme} />
      <Skills theme={theme} />
      <Resume theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
      <ScrollToTop />
    </div>
  );
}

export default DataAnalyst;
