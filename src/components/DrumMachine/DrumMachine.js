import React from "react";
import Pad from "../Pad/Pad";

const DrumMachine = () => {
  const samples = ["kick", "snare", "closedHH", "openHH"];

  return (
    <div className="drum-machine">
      <div className="pads-container">
        {samples.map(sample => (
          <Pad sample={sample} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
