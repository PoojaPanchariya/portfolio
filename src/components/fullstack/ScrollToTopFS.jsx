// ScrollToTopFS.jsx
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopFS.css";

const ScrollToTopFS = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`scroll-top-fs ${isVisible ? "show" : ""}`} onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTopFS;
