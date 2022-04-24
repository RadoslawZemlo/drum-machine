import React, { useEffect } from "react";

const Pad = ({ keyPress, playSample }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleClick = () => {
    playSample();
  };

  const handleKeyDown = e => {
    if (e.key === keyPress) playSample();
  };

  return (
    <button className="pad" onClick={handleClick}>
      {keyPress}
    </button>
  );
};

export default Pad;
