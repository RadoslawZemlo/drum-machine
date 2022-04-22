import React from "react";
import * as sounds from "../Samples/Samples";

const DrumMachine = () => {
  const samples = Object.keys(sounds);
  const playSamples = Object.values(sounds);

  const playSample = e => {
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
            onClick={playSample}
          >
            {sample}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
