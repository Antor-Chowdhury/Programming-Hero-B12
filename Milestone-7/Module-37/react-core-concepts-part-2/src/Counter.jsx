import { useState } from "react";

export default function Counter() {
  const [count, SetCount] = useState(0);

  const handleAdd = () => {
    // console.log("Add button Clicked");

    const newCount = count + 1;
    SetCount(newCount);
  };

  const counterStyle = {
    border: "2px solid yellow",
  };

  return (
    <div style={counterStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
