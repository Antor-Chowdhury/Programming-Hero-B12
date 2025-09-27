import { useState } from "react";

export default function Counter_practice() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="card">
      <h2>Counter Practice</h2>
      <h3>Count Number: {count}</h3>
      <button onClick={handleIncrease}>Increase: </button>
      <button onClick={handleDecrease}>Decrease: </button>
      <button onClick={handleReset}>Reset: </button>
    </div>
  );
}
