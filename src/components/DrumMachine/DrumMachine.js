import { useState } from "react";
import Display from "../Display/Display";
import Pad from "../Pad/Pad";
import * as sounds from "../Samples/Samples";

const DrumMachine = () => {
  const [currentPlay, setCurrentPlay] = useState();

  const keys = [
    "2",
    "3",
    "4",
    "5",
    "q",
    "w",
    "e",
    "r",
    "a",
    "s",
    "d",
    "f",
    "`",
    "z",
    "x",
    "c"
  ];

  const samplesNames = Object.keys(sounds);
  const samples = Object.values(sounds);

  return (
    <div className="drum-machine">
      <Display currentPlay={currentPlay} />
      <div className="pads-container">
        {samples.map((sample, i) => (
          <Pad
            key={i}
            keyPress={keys[i]}
            sample={sample}
            sampleName={samplesNames[i]}
            setCurrentPlay={setCurrentPlay}
          />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
