import React, { useState, useEffect } from "react";

const Pad = ({ keyPress, sample }) => {
  const [padDown, setPadDown] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleClick = () => {
    sample.play();
    setPadDown(1);
  };

  const handleKeyDown = e => {
    if (e.key === keyPress) {
      sample.play();
      setPadDown(1);
    }
  };

  return (
    <button
      className="pad"
      onClick={handleClick}
      onAnimationEnd={() => setPadDown(0)}
      paddown={padDown}
    >
      {keyPress}
    </button>
  );
};

export default Pad;
