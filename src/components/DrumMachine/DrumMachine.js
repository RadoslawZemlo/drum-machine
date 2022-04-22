import React, { useEffect } from "react";
import * as sounds from "../Samples/Samples";

const DrumMachine = () => {
  const keys = ["`", "z", "x", "c"];

  const samples = Object.keys(sounds);
  const playSamples = Object.values(sounds);

  const handleKeyPress = e => {
    keys.forEach((key, i) => {
      if (e.key === key) playSamples[i]();
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  });

  const handleClick = e => {
    const index = e.target.value;
    const play = playSamples[index];

    play();
  };

  return (
    <div className="drum-machine">
      <div className="pads-container">
        {samples.map((sample, index) => (
          <button
            key={index}
            className="pad"
            value={index}
            onClick={handleClick}
          >
            {keys[index]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
