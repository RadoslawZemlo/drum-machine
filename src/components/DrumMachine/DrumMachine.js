import Pad from "../Pad/Pad";
import * as sounds from "../Samples/Samples";

const DrumMachine = () => {
  const keys = ["`", "z", "x", "c"];

  const samples = Object.keys(sounds);
  const playSamples = Object.values(sounds);

  return (
    <div className="drum-machine">
      <div className="pads-container">
        {samples.map((sample, i) => (
          <Pad key={i} keyPress={keys[i]} playSample={playSamples[i]} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
