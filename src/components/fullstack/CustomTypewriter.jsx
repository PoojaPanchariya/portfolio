import React, { useEffect, useState } from "react";

const CustomTypewriter = () => {
  const sentenceStart = "Hi, I'm ";
  const name = "Pooja Panchariya";
  const fullText = sentenceStart + name;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
  let typingSpeed = 100;
  let pauseAfterTyped = 8000;
  let timeout;

  if (!isDeleting && index < fullText.length) {
    timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      setIndex(index + 1);
    }, typingSpeed);
  } else if (!isDeleting && index === fullText.length) {
    timeout = setTimeout(() => {
      setIsDeleting(true);
    }, pauseAfterTyped);
  } else if (isDeleting && index > 0) {
    timeout = setTimeout(() => {
      setDisplayedText((prev) => prev.slice(0, -1));
      setIndex(index - 1);
    }, 50);
  } else if (isDeleting && index === 0) {
    setIsDeleting(false);
  }

  return () => clearTimeout(timeout);
}, [index, isDeleting, fullText]); // ✅ include fullText to fix warning


  const highlightedPart = displayedText.startsWith(sentenceStart)
    ? displayedText.slice(sentenceStart.length)
    : "";

  return (
    <h2 className="custom-typewriter">
      {displayedText.startsWith(sentenceStart) && (
        <>
          {sentenceStart}
          <span className="highlight">{highlightedPart}</span>
          <span className="cursor">|</span>
        </>
      )}
      {!displayedText.startsWith(sentenceStart) && (
        <>
          {displayedText}
          <span className="cursor">|</span>
        </>
      )}
    </h2>
  );
};

export default CustomTypewriter;
