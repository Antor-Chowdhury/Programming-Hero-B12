import { useState } from "react";

export default function Bowler() {
  const [ball, setBall] = useState(6);

  const ballsRemaining = () => {
    if (ball > 0) {
      setBall(ball - 1);
    }
  };

  const bowlerStyle = {
    border: "2px solid tomato",
    marginBottom: "20px",
  };

  return (
    <div style={bowlerStyle}>
      <h2>Player: Bowler</h2>

      {ball === 0 && <p>Bowler over done.</p>}

      <h3>Ball Remaining: {ball}</h3>
      <button
        onClick={ballsRemaining}
        style={{
          backgroundColor: "pink",
          color: "tomato",
        }}
      >
        Press Here
      </button>
    </div>
  );
}
