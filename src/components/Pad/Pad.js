import { useState, useEffect } from "react";

const Pad = ({ keyPress, sample, sampleName, setCurrentPlay }) => {
  const [padDown, setPadDown] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleClick = () => {
    sample.currentTime = 0;

    sample.play();
    setCurrentPlay(sampleName);
    setPadDown(1);
  };

  const handleKeyDown = e => {
    if (e.key === keyPress) {
      sample.currentTime = 0;

      sample.play();
      setCurrentPlay(sampleName);
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
      {keyPress.toUpperCase()}
    </button>
  );
};

export default Pad;
