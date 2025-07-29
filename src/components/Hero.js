import React, { useEffect, useState } from 'react';
import './Hero.css';
import profilePic from '../assets/pooja.png';
import { Typewriter } from 'react-simple-typewriter';

const Hero = ({ theme }) => {
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTyping(false);
      setTimeout(() => {
        setShowTyping(true);
      }, 100);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  function openGmail() {
    const email = "poojash0699@gmail.com";
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(url,"_blank");
  }

  return (
    <section className={`text-center py-5 hero-section ${theme}`}>
      <div className="hero-container container fade-in">
        {/* Left Side: Text Content */}
        <div className="hero-content">
          <h1>
            Hi, I’m{' '}
            <span className="typing-name">
              {showTyping && (
                <Typewriter
                  words={['Pooja Panchariya']}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              )}
            </span>
          </h1>

          <p className="animated-tools">
            <Typewriter
              words={[
                'Data Analyst 💻',
                'Power BI & Python Enthusiast 📊',
                'SQL + Excel Professional 📈',
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="hero-about">
            I’m a <span className="highlight">Data Analyst</span> passionate about transforming raw data into meaningful insights.
            Skilled in <span className="highlight">Power BI</span>, <span className="highlight">Python</span>, <span className="highlight">SQL</span>, and <span className="highlight">Excel</span>.
          </p>

          <a onClick={openGmail} className="btn-hire" role="button">Hire Me</a>

        </div>

        {/* Right Side: Image */}
        <div className="hero-image-wrapper zoom-in">
          <img src={profilePic} alt="Pooja Panchariya" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
