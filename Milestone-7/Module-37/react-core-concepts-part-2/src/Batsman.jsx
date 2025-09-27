import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };

  const handleFours = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
  };

  const handleSix = () => {
    const updatedRuns = runs + 6;
    setRuns(updatedRuns);

    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
  };

  const batsmanStyle = {
    border: "2px solid blue",
    marginBottom: "20px",
  };

  return (
    <div style={batsmanStyle}>
      <h3>Player: Bangla Batsman</h3>
      <h3>
        <small>Six: {sixes}</small>
      </h3>
      {runs > 50 && <p>You Score: {runs}</p>} {/* dynamically called */}
      <h2>Score: {runs}</h2>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFours}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
