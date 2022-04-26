import Pad from "../Pad/Pad";
import * as sounds from "../Samples/Samples";

const DrumMachine = () => {
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

  console.log(sounds);

  const samples = Object.values(sounds);

  return (
    <div className="drum-machine">
      <div className="pads-container">
        {samples.map((sample, i) => (
          <Pad key={i} keyPress={keys[i]} sample={sample} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
